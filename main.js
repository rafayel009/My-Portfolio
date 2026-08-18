/* ==========================================================
   RENDER — reads SITE from data.js and fills in the page.
   You shouldn't need to edit this file to update content;
   edit data.js instead.
   ========================================================== */
(function () {
  const $ = (id) => document.getElementById(id);

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    $("heroName").textContent = SITE.name;
    $("heroRole").textContent = SITE.role;
    $("heroSummary").textContent = SITE.summary;
    document.title = `${SITE.name} — ${SITE.role}`;

    const emailBtn = $("heroEmailBtn");
    emailBtn.href = `mailto:${SITE.email}`;

    const linkedinBtn = $("heroLinkedinBtn");
    if (SITE.linkedin && SITE.linkedin.trim().length > "https://linkedin.com/in/".length) {
      linkedinBtn.href = SITE.linkedin;
    } else {
      linkedinBtn.remove();
    }

    const resumeBtn = $("heroResumeBtn");
    resumeBtn.href = SITE.resumeFile;

    [$("heroPhoto"), $("heroPhotoMobile")].forEach((img) => {
      if (SITE.photo) {
        img.src = SITE.photo;
        img.alt = SITE.name;
      } else {
        img.remove();
      }
    });

    const meta = $("heroMeta");
    [SITE.location, SITE.email, SITE.phone].filter(Boolean).forEach((t) => {
      meta.appendChild(el("li", null, t));
    });
  }

  /* ---------- Quick facts ---------- */
  function renderFacts() {
    const list = $("factsList");
    (SITE.quickFacts || []).forEach((f) => {
      const li = el(
        "li",
        null,
        `<span class="fact-label">${f.label}</span><span class="fact-value">${f.value}</span>`
      );
      list.appendChild(li);
    });
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    if (!SITE.show.education) return toggleSection("education", false);
    const wrap = $("educationList");
    (SITE.education || []).forEach((ed) => {
      const row = el(
        "div",
        "edu-row",
        `
        <div class="edu-left">
          <div class="edu-degree">${ed.degree}</div>
          <div class="edu-inst">${ed.institution}</div>
          ${ed.note ? `<div class="edu-note">${ed.note}</div>` : ""}
        </div>
        <div class="edu-right">
          <span class="edu-year">${ed.year}</span>
          ${ed.detail || ""}
        </div>
      `
      );
      wrap.appendChild(row);
    });
  }

  /* ---------- Research ---------- */
  function renderResearch() {
    if (!SITE.show.research) return toggleSection("research", false);
    const r = SITE.research;
    if (!r) return toggleSection("research", false);

    $("researchTitle").textContent = r.title;

    const bullets = $("researchBullets");
    (r.bullets || []).forEach((b) => bullets.appendChild(el("li", null, b)));

    if (r.publication) {
      $("researchPub").innerHTML = `
        <div class="pub-label">${r.publication.label || "Publication"}</div>
        <div class="pub-title">${r.publication.title}</div>
        <div class="pub-meta">${r.publication.venue || ""}${
        r.publication.status
          ? `<span class="pub-status">${r.publication.status}</span>`
          : ""
      }</div>
      `;
    }

    const chips = $("modelChips");
    (r.models || []).forEach((m) => chips.appendChild(el("span", "chip", m)));
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    if (!SITE.show.projects) return toggleSection("projects", false);
    const grid = $("projectsGrid");
    (SITE.projects || []).forEach((p) => {
      const card = el(
        "article",
        "project-card",
        `
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      `
      );
      grid.appendChild(card);
    });
  }

  /* ---------- Experience ---------- */
  function renderExperience() {
    if (!SITE.show.experience) return toggleSection("experience", false);
    const list = $("experienceList");
    (SITE.experience || []).forEach((xp) => {
      const item = el(
        "div",
        "timeline-item",
        `
        <div class="timeline-period">${xp.period}</div>
        <div>
          <div class="timeline-role">${xp.role}</div>
          <div class="timeline-org">${xp.org}</div>
          <ul>${(xp.bullets || []).map((b) => `<li>${b}</li>`).join("")}</ul>
        </div>
      `
      );
      list.appendChild(item);
    });
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    if (!SITE.show.skills) return toggleSection("skills", false);
    const groups = $("skillsGroups");
    (SITE.skills || []).forEach((g) => {
      const group = el(
        "div",
        "skill-group",
        `
        <p class="skill-group-title">${g.category}</p>
        <div class="chip-row">${g.items.map((i) => `<span class="chip">${i}</span>`).join("")}</div>
      `
      );
      groups.appendChild(group);
    });

    const langRow = document.querySelector(".languages-row");
    if (SITE.show.languages && SITE.languages && SITE.languages.length) {
      const langs = $("languagesList");
      SITE.languages.forEach((l) =>
        langs.appendChild(el("span", "chip", `${l.name} — ${l.level}`))
      );
    } else if (langRow) {
      langRow.remove();
    }
  }

  /* ---------- Footer / contact ---------- */
  function renderFooter() {
    $("footerName").textContent = SITE.name;
    $("footerCopy").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

    const links = $("contactLinks");
    const items = [
      { label: `Email — ${SITE.email}`, href: `mailto:${SITE.email}` },
      SITE.phone ? { label: `Phone — ${SITE.phone}`, href: `tel:${SITE.phone.replace(/\s+/g, "")}` } : null,
    ];
    if (SITE.linkedin && SITE.linkedin.trim().length > "https://linkedin.com/in/".length) {
      items.push({ label: "LinkedIn ↗", href: SITE.linkedin, external: true });
    }
    items.filter(Boolean).forEach((it) => {
      const a = el("a", null, it.label);
      a.href = it.href;
      if (it.external) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      links.appendChild(a);
    });
  }

  /* ---------- Section visibility ---------- */
  function toggleSection(id, visible) {
    const section = document.getElementById(id);
    if (section && !visible) section.remove();
  }

  /* ---------- MOSFET diagram tooltip ---------- */
  const LAYER_INFO = {
    substrate: "Substrate — bulk semiconductor body",
    source: "Source — n+ doped region",
    drain: "Drain — n+ doped region",
    channel: "Channel — carriers flow here when biased on",
    oxide: "Gate oxide — SiO₂ / HfO₂ dielectric",
    gate: "Gate metal — controls the channel",
  };
  function initDiagram() {
    const tooltip = $("diagramTooltip");
    document.querySelectorAll(".mosfet-diagram .layer").forEach((layer) => {
      const key = layer.dataset.layer;
      layer.setAttribute("tabindex", "0");
      const show = () => (tooltip.textContent = LAYER_INFO[key] || "");
      const hide = () => (tooltip.textContent = "");
      layer.addEventListener("mouseenter", show);
      layer.addEventListener("focus", show);
      layer.addEventListener("mouseleave", hide);
      layer.addEventListener("blur", hide);
    });
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const toggle = $("navToggle");
    const links = $("navLinks");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ---------- Boot ---------- */
  function init() {
    renderHero();
    renderFacts();
    renderEducation();
    renderResearch();
    renderProjects();
    renderExperience();
    renderSkills();
    renderFooter();
    initDiagram();
    initNav();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

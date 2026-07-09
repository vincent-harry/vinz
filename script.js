const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const backToTop = document.querySelector(".back-to-top");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const year = document.querySelector("#year");
const contactEmail = "";
const projectTabs = document.querySelectorAll("[data-project-filter]");
const projectGroups = document.querySelectorAll("[data-project]");
const lightboxItems = [...document.querySelectorAll("[data-lightbox]")];
const unavailableButtons = document.querySelectorAll("[data-unavailable]");
let activeLightboxItems = [];
let activeLightboxIndex = -1;
let toastTimer;

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 600);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const sections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.projectFilter;

    projectTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    projectGroups.forEach((group) => {
      group.classList.toggle(
        "is-hidden",
        filter !== "all" && group.dataset.project !== filter
      );
    });
  });
});

unavailableButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.dataset.unavailable || "file";
    showToast(`${label} is not added yet. Add the file to assets, then update the link.`);
  });
});

function openLightbox(src, title) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightboxImage.src = src;
  lightboxImage.alt = title ? `${title} preview` : "Image preview";
  lightboxCaption.textContent = title || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose?.focus();
}

function visibleLightboxItems() {
  return lightboxItems.filter((item) => {
    const projectGroup = item.closest("[data-project]");
    return !projectGroup || !projectGroup.classList.contains("is-hidden");
  });
}

function openLightboxItem(item) {
  activeLightboxItems = visibleLightboxItems();
  activeLightboxIndex = activeLightboxItems.indexOf(item);
  openLightbox(item.dataset.lightbox, item.dataset.title);
}

function showLightboxOffset(offset) {
  if (!lightbox?.classList.contains("is-open") || activeLightboxItems.length === 0) return;

  activeLightboxIndex =
    (activeLightboxIndex + offset + activeLightboxItems.length) %
    activeLightboxItems.length;

  const item = activeLightboxItems[activeLightboxIndex];
  openLightbox(item.dataset.lightbox, item.dataset.title);
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
  activeLightboxIndex = -1;
}

lightboxItems.forEach((item) => {
  const open = () => openLightboxItem(item);

  item.addEventListener("click", open);
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => showLightboxOffset(-1));
lightboxNext?.addEventListener("click", () => showLightboxOffset(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    showLightboxOffset(-1);
  }

  if (event.key === "ArrowRight") {
    showLightboxOffset(1);
  }
});

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please complete all fields before creating an email.";
      return;
    }

    if (!contactEmail) {
      formNote.textContent = "Vincent's email address is not added yet. Update contactEmail in script.js when available.";
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    formNote.textContent = "Opening your email app with the prepared message.";
  });
}

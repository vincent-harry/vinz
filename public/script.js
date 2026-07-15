const siteHeader = document.querySelector("[data-site-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = Array.from(document.querySelectorAll("[data-section-link]"));
const quickNavigation = document.querySelector("[data-quick-nav]");

const lightbox = document.querySelector("#lightbox");
const lightboxPanel = lightbox?.querySelector(".lightbox-panel");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxControls = document.querySelector(".lightbox-controls");
const lightboxPrevious = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const galleryItems = Array.from(document.querySelectorAll("[data-lightbox]"));
const lightboxOpeners = Array.from(document.querySelectorAll("[data-lightbox-open]"));

let activeGalleryItems = [];
let activeGalleryIndex = -1;
let lastFocusedElement = null;

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

function setActiveNavigation(sectionId) {
  navItems.forEach((link) => {
    const isActive = link.hash === `#${sectionId}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function closeNavigation(options = {}) {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  if (options.restoreFocus) navToggle.focus();
}

if (navToggle && navLinks) {
  const toggleNavigation = () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  navToggle.addEventListener("click", toggleNavigation);
  navToggle.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleNavigation();
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveNavigation(link.hash.slice(1));
      closeNavigation();
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("is-open")) return;
    if (navLinks.contains(event.target) || navToggle.contains(event.target)) return;
    closeNavigation();
  });

  const desktopNavigation = window.matchMedia("(min-width: 1281px)");
  desktopNavigation.addEventListener("change", (event) => {
    if (event.matches) closeNavigation();
  });
}

const observedSections = navItems
  .map((link) => document.querySelector(link.hash))
  .filter((section) => section instanceof HTMLElement);

if ("IntersectionObserver" in window && observedSections.length > 0) {
  const intersections = new Map();
  const headerHeight = siteHeader?.getBoundingClientRect().height || 76;
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => intersections.set(entry.target.id, entry));

      const contactSection = document.querySelector("#contact");
      if (window.location.hash === "#contact" && contactSection) {
        const contactBounds = contactSection.getBoundingClientRect();
        if (contactBounds.top < window.innerHeight && contactBounds.bottom > headerHeight) {
          setActiveNavigation("contact");
          return;
        }
      }

      const visibleSections = observedSections.filter(
        (section) => intersections.get(section.id)?.isIntersecting,
      );

      if (visibleSections.length === 0) return;

      visibleSections.sort((first, second) => {
        const firstDistance = Math.abs(first.getBoundingClientRect().top - headerHeight);
        const secondDistance = Math.abs(second.getBoundingClientRect().top - headerHeight);
        return firstDistance - secondDistance;
      });
      setActiveNavigation(visibleSections[0].id);
    },
    {
      rootMargin: `-${Math.ceil(headerHeight)}px 0px -68% 0px`,
      threshold: [0, 0.01],
    },
  );

  observedSections
    .filter((section) => section.id !== "contact")
    .forEach((section) => sectionObserver.observe(section));

  const homeSection = document.querySelector("#home");
  if (homeSection && quickNavigation) {
    const quickNavigationObserver = new IntersectionObserver(
      ([entry]) => quickNavigation.classList.toggle("is-visible", !entry.isIntersecting),
      { threshold: 0.12 },
    );
    quickNavigationObserver.observe(homeSection);
  }

  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveNavigation("contact");
        }
      },
      {
        rootMargin: `-${Math.ceil(headerHeight)}px 0px 0px 0px`,
        threshold: 0.05,
      },
    );
    contactObserver.observe(contactSection);
  }
} else if (quickNavigation) {
  quickNavigation.classList.add("is-visible");
}

const initialSection = window.location.hash.slice(1);
if (initialSection && document.getElementById(initialSection)) {
  setActiveNavigation(initialSection);
}

window.addEventListener("hashchange", () => {
  const sectionId = window.location.hash.slice(1);
  if (sectionId && document.getElementById(sectionId)) setActiveNavigation(sectionId);
});

function showGalleryItem(index) {
  if (!lightbox || !lightboxImage || !lightboxTitle || activeGalleryItems.length === 0) return;

  activeGalleryIndex = (index + activeGalleryItems.length) % activeGalleryItems.length;
  const item = activeGalleryItems[activeGalleryIndex];
  const source = item.dataset.lightbox || "";
  const title = item.dataset.lightboxTitle || "Portfolio screenshot";

  lightboxImage.src = source;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
}

function openLightbox(item) {
  if (!lightbox || !item) return;
  const group = item.dataset.lightboxGroup;

  activeGalleryItems = group
    ? galleryItems.filter((candidate) => candidate.dataset.lightboxGroup === group)
    : [item];
  activeGalleryIndex = activeGalleryItems.indexOf(item);

  const hasSectionNavigation = Boolean(group) && activeGalleryItems.length > 1;
  if (lightboxControls) lightboxControls.hidden = !hasSectionNavigation;
  if (lightboxPrevious) lightboxPrevious.disabled = !hasSectionNavigation;
  if (lightboxNext) lightboxNext.disabled = !hasSectionNavigation;

  lastFocusedElement = document.activeElement;
  showGalleryItem(activeGalleryIndex);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  activeGalleryItems = [];
  activeGalleryIndex = -1;
  if (lightboxControls) lightboxControls.hidden = true;
  if (lightboxPrevious) lightboxPrevious.disabled = true;
  if (lightboxNext) lightboxNext.disabled = true;
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

lightboxOpeners.forEach((opener) => {
  opener.addEventListener("click", () => {
    const source = opener.dataset.lightboxOpen || "";
    const item = galleryItems.find((candidate) => candidate.dataset.lightbox === source);
    if (item) openLightbox(item);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrevious?.addEventListener("click", () => showGalleryItem(activeGalleryIndex - 1));
lightboxNext?.addEventListener("click", () => showGalleryItem(activeGalleryIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks?.classList.contains("is-open")) {
    closeNavigation({ restoreFocus: true });
    return;
  }

  if (!lightbox?.classList.contains("is-open")) return;

  const canNavigate = !lightboxControls?.hidden && activeGalleryItems.length > 1;
  if (canNavigate && event.key === "ArrowLeft") {
    event.preventDefault();
    showGalleryItem(activeGalleryIndex - 1);
    return;
  }
  if (canNavigate && event.key === "ArrowRight") {
    event.preventDefault();
    showGalleryItem(activeGalleryIndex + 1);
    return;
  }

  if (event.key === "Tab" && lightboxPanel) {
    const controls = Array.from(
      lightboxPanel.querySelectorAll("button:not([disabled]), a[href]"),
    );
    if (controls.length === 0) return;
    const firstControl = controls[0];
    const lastControl = controls[controls.length - 1];

    if (event.shiftKey && document.activeElement === firstControl) {
      event.preventDefault();
      lastControl.focus();
    } else if (!event.shiftKey && document.activeElement === lastControl) {
      event.preventDefault();
      firstControl.focus();
    }
  }
});

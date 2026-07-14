const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrevious = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const galleryItems = Array.from(document.querySelectorAll("[data-lightbox]"));

let activeGalleryIndex = -1;
let lastFocusedElement = null;

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach((link) => link.addEventListener("click", closeNavigation));

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("is-open")) return;
    if (navLinks.contains(event.target) || navToggle.contains(event.target)) return;
    closeNavigation();
  });
}

function showGalleryItem(index) {
  if (!lightbox || !lightboxImage || !lightboxTitle || galleryItems.length === 0) return;

  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];
  const source = item.dataset.lightbox || "";
  const title = item.dataset.lightboxTitle || "Project screenshot";

  lightboxImage.src = source;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
}

function openLightbox(index) {
  if (!lightbox) return;
  lastFocusedElement = document.activeElement;
  showGalleryItem(index);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  activeGalleryIndex = -1;
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrevious?.addEventListener("click", () => showGalleryItem(activeGalleryIndex - 1));
lightboxNext?.addEventListener("click", () => showGalleryItem(activeGalleryIndex + 1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showGalleryItem(activeGalleryIndex - 1);
  if (event.key === "ArrowRight") showGalleryItem(activeGalleryIndex + 1);
});

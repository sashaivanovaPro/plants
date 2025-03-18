// Smooth scroll for links

export const smoothScrollTo = (targetId, delay = 0) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  setTimeout(() => {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, delay);
};

export const handleSmoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("data-goto");
  if (targetId) {
    smoothScrollTo(targetId, 300);
  }
};

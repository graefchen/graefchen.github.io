/* code taken and slightly adapted from:
 * Hyperplexed "The Mouse Trailer With Intelligent Features"
 * https://youtu.be/CZIJKkwc8l8?si=z5xknlbr5na5FKHx
 */
const dot = document.getElementById("dot");

const isTouchDevice = () =>
  navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

const anim = (e, interacting) => {
  const x = e.clientX - dot.offsetWidth / 2,
    y = e.clientY - dot.offsetHeight / 2;
  const keyframe = {
    transform: `translate(${x}px,${y}px) scale(${interacting ? 6 : 1})`,
  };
  dot.animate(keyframe, { duration:1000, fill: "forwards" });
};

/* When we are on a touch design, we remove the dot, else animate it. */
if (isTouchDevice()) {
  dot.remove();
} else {
  const posX = innerWidth / 2,
    posY = innerHeight / 2;

  dot.style.transform = `translate(${posX}px,${posY}px)`;
  window.onmousemove = (e) => {
    const interacting = e.target.closest(".interactable") !== null;

    anim(e, interacting);
  };
}

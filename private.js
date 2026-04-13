
// e.preventDefault(); will disable any copy/paste functions

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
    e.preventDefault();
  }
});

document.addEventListener("copy", (e) => {
  e.preventDefault();
});
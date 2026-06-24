document.addEventListener("DOMContentLoaded", () => {

  const btn = document.createElement("button");
  
  btn.className = "theme-toggle";

  document
    .querySelector(".quarto-navbar-tools")
    .appendChild(btn);

  const saved =
    localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute(
    "data-bs-theme",
    saved
  );

  updateIcon();

  btn.addEventListener("click", () => {

    const current =
      document.documentElement.getAttribute(
        "data-bs-theme"
      );

    const next =
      current === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute(
      "data-bs-theme",
      next
    );

    localStorage.setItem(
      "theme",
      next
    );

    updateIcon();
  });

  function updateIcon() {
  btn.innerHTML =
    document.documentElement.getAttribute("data-bs-theme") === "dark"
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon-stars"></i>';
    
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const emailText = document.getElementById("email-copy");
  const toast = document.getElementById("copy-toast");

  if (!emailText || !toast) return;

  let timeout = null;

  emailText.addEventListener("click", async () => {
    const email = "hern0473@umn.edu";

    try {
      await navigator.clipboard.writeText(email);

      // reset animation cleanly every click
      toast.classList.remove("show");

      // force reflow so animation restarts properly
      void toast.offsetWidth;

      toast.classList.add("show");

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        toast.classList.remove("show");
      }, 1000);

    } catch (err) {
      console.log("Copy failed", err);
    }
  });

});
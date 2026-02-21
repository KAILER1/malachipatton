/*
 * Shared nav, footer, and interactive behaviors for all pages.
 * Edit the navLinks array to update navigation across every page.
 */
(function () {
  var src = document.currentScript.getAttribute("src");
  var prefix = src.indexOf("../../") === 0 ? "../../" : "";

  var parts = window.location.pathname.split("/");
  var pageName = parts[parts.length - 1] || "index.html";
  var activePage = pageName;

  if (prefix) {
    var category = parts[parts.length - 2];
    activePage = category + ".html";
  }

  function activeClass(page) {
    return activePage === page ? " nav-active" : "";
  }

  var p = prefix;

  /* ── NAV ─────────────────────────────────────────── */

  var navLinks = [
    { page: "design.html",       label: "Design" },
    { page: "advertising.html",  label: "Advertising" },
    { page: "packaging.html",    label: "Packaging" },
    { page: "photography.html",  label: "Photography" },
    { page: "about.html",        label: "About" }
  ];

  var desktopHTML = "";
  var mobileHTML  = "";

  navLinks.forEach(function (link) {
    var cls = "w3-bar-item w3-button" + activeClass(link.page);
    desktopHTML += '<a href="' + p + link.page + '" class="' + cls + '">' + link.label + "</a>";
    mobileHTML  += '<a href="' + p + link.page + '" class="' + cls + '" onclick="document.getElementById(\'nav-mobile\').classList.remove(\'show\')">' + link.label + "</a>";
  });

  document.getElementById("nav-placeholder").innerHTML =
    '<nav class="w3-top">' +
      '<div class="w3-bar w3-black w3-wide w3-padding w3-card">' +
        '<a href="' + p + 'index.html" class="w3-bar-item w3-button site-logo"><b>MP</b> Creativity</a>' +
        '<a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-medium w3-hide-large" onclick="document.getElementById(\'nav-mobile\').classList.toggle(\'show\')">&#9776;</a>' +
        '<div class="w3-right w3-hide-small">' + desktopHTML + '</div>' +
      '</div>' +
      '<div id="nav-mobile" class="w3-bar-block w3-black w3-hide-medium w3-hide-large">' + mobileHTML + '</div>' +
    '</nav>';

  /* ── FOOTER ──────────────────────────────────────── */

  document.getElementById("footer-placeholder").innerHTML =
    '<footer class="site-footer">' +
      '<p>&copy; 2026 Malachi Patton. All rights reserved.</p>' +
    '</footer>';

  /* ── BACK-LINK (project detail pages) ────────────── */

  var backLink = document.getElementById("back-link");
  if (backLink) {
    backLink.addEventListener("click", function (e) {
      if (history.length > 1) { e.preventDefault(); history.back(); }
    });
  }

  /* ── THUMBNAIL GALLERY (project detail pages) ───── */

  var thumbs = document.querySelectorAll(".project-detail-thumbnails img");
  if (thumbs.length) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        thumbs.forEach(function (t) { t.classList.remove("active"); });
        this.classList.add("active");
        document.getElementById("main-image").src = this.getAttribute("data-full");
      });
    });
  }

  /* ── LIGHTBOX (photography page) ─────────────────── */

  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    document.querySelectorAll(".photo-lightbox").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("lightbox-img").src = this.getAttribute("data-src");
        document.getElementById("lightbox-img").alt = this.getAttribute("data-alt") || "";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("open");
        document.body.style.overflow = "";
      }
    });

    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      }
    });

    var closeBtn = document.querySelector(".lightbox-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  }
})();

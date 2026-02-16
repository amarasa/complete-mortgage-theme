/**
 * FAQ Accordion
 *
 * - Only one panel open at a time
 * - Smooth scroll to opened item (respects prefers-reduced-motion)
 * - Full keyboard accessibility (Enter / Space)
 * - ARIA state management
 */
(function () {
	"use strict";

	// Guard against double initialization
	if (window.__faqAccordionInitialized) return;
	window.__faqAccordionInitialized = true;

	var HEADER_OFFSET = 72;
	var SCROLL_DURATION = 1200;
	var prefersReduced = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	function smoothScrollTo(targetY) {
		if (prefersReduced) {
			window.scrollTo(0, targetY);
			return;
		}
		var startY = window.scrollY || window.pageYOffset;
		var diff = targetY - startY;
		if (Math.abs(diff) < 1) return;

		var startTime;
		function ease(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		}
		function step(ts) {
			if (!startTime) startTime = ts;
			var progress = Math.min((ts - startTime) / SCROLL_DURATION, 1);
			window.scrollTo(0, startY + diff * ease(progress));
			if (progress < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	function afterTransition(panel, cb) {
		if (!panel || prefersReduced) {
			requestAnimationFrame(cb);
			return;
		}
		var cs = getComputedStyle(panel);
		var dur =
			(parseFloat(cs.transitionDuration) || 0) +
			(parseFloat(cs.transitionDelay) || 0);

		if (dur > 0) {
			panel.addEventListener(
				"transitionend",
				function handler(e) {
					if (e.target === panel) {
						panel.removeEventListener("transitionend", handler);
						cb();
					}
				},
			);
		} else {
			requestAnimationFrame(cb);
		}
	}

	function toggleItem(btn, container, panel, root) {
		var wasActive = container.classList.contains("active");

		// Close all other open items in this accordion
		if (!wasActive) {
			var openItems = root.querySelectorAll(".a-container.active");
			for (var i = 0; i < openItems.length; i++) {
				if (openItems[i] !== container) {
					openItems[i].classList.remove("active");
					var otherBtn = openItems[i].querySelector(".a-btn");
					if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
				}
			}
		}

		// Toggle clicked item
		container.classList.toggle("active");
		var isNowActive = container.classList.contains("active");
		btn.setAttribute("aria-expanded", isNowActive ? "true" : "false");

		// Scroll into view on open
		if (isNowActive) {
			afterTransition(panel, function () {
				var rect = btn.getBoundingClientRect();
				var topLimit = HEADER_OFFSET + 8;
				var bottomLimit = window.innerHeight * 0.6;
				if (rect.top >= topLimit && rect.top <= bottomLimit) return;

				var y = Math.max(
					0,
					(window.scrollY || window.pageYOffset) + rect.top - HEADER_OFFSET,
				);
				smoothScrollTo(y);
			});
		}
	}

	function findBtn(el) {
		// Walk up from text nodes to element nodes
		while (el && el.nodeType !== 1) el = el.parentNode;
		return el ? el.closest(".a-btn") : null;
	}

	function handleInteraction(e, root) {
		var btn = findBtn(e.target);
		if (!btn || !root.contains(btn)) return;

		var container = btn.closest(".a-container");
		if (!container || !root.contains(container)) return;

		var panel = container.querySelector(".a-panel") || container;
		toggleItem(btn, container, panel, root);
	}

	function init() {
		var accordions = document.querySelectorAll(".faq-accordion");
		for (var i = 0; i < accordions.length; i++) {
			(function (root) {
				root.addEventListener("click", function (e) {
					handleInteraction(e, root);
				});

				root.addEventListener("keydown", function (e) {
					var key = e.key || "";
					if (key !== "Enter" && key !== " " && key !== "Spacebar") return;
					e.preventDefault();
					handleInteraction(e, root);
				});
			})(accordions[i]);
		}
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();

class LiteYTEmbed extends HTMLElement {
	connectedCallback() {
		this.videoId = this.getAttribute("videoid");
		let e = this.querySelector(".lyt-playbtn");

		if (!e) {
			e = document.createElement("button");
			e.type = "button";
			e.classList.add("lyt-playbtn");
			this.append(e);
		}

		if (!e.textContent) {
			const t = document.createElement("span");
			t.className = "lyt-visually-hidden";
			t.textContent = this.getAttribute("playlabel") || "Play";
			e.append(t);
		}

		this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`;

		// Add event listener to activate iframe on click
		e.addEventListener("click", () => this.activate());
	}

	activate() {
		if (this.classList.contains("lyt-activated")) return;

		this.classList.add("lyt-activated");

		// Remove background image
		this.style.backgroundImage = "none";

		// Create YouTube iframe
		const iframe = document.createElement("iframe");
		iframe.width = "100%";
		iframe.height = "100%";
		iframe.allow =
			"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
		iframe.allowFullscreen = true;
		iframe.src = `https://www.youtube-nocookie.com/embed/${this.videoId}?autoplay=1&playsinline=1`;

		// Remove play button & insert iframe
		this.innerHTML = "";
		this.appendChild(iframe);
	}
}

customElements.define("lite-youtube", LiteYTEmbed);

const USERNAME = "Julesfr__";
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;
const listeningStatus = document.getElementById("musicstatus");
let loaded = 0;

/* escape HTML */
function escapeHtml(str) {
	return str
		? str
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#39;")
		: "";
}

/* setup scroll animation */
function makeMarquee(container, speed = 80) {
	const inner = container.querySelector(".playing-marquee__inner");
	if (!inner) return;

	// reset
	inner.style.animation = "none";
	container
		.querySelectorAll(".playing-marquee__clone")
		.forEach((c) => c.remove());

	const fullWidth = inner.scrollWidth;
	const viewWidth = container.clientWidth;

	// if text fits, do nothing
	if (fullWidth <= viewWidth + 1) {
		inner.style.transform = "none";
		return;
	}

	// duplicate content for seamless loop
	const clone = inner.cloneNode(true);
	clone.classList.add("playing-marquee__clone");
	container.appendChild(clone);

	const duration = fullWidth / speed;
	const animName = `scroll-${Math.random().toString(36).slice(2)}`;
	const style = document.createElement("style");
	style.textContent = `
    @keyframes ${animName} {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${fullWidth}px); }
    }
  `;
	document.head.appendChild(style);

	[inner, clone].forEach((el) => {
		el.style.animation = `${animName} ${duration}s linear infinite`;
	});
}

/* main fetch + render */
async function getTrack() {
	try {
		const req = await fetch(BASE_URL);
		const json = await req.json();
		const track = json.track;
		const isPlaying = track["@attr"]?.nowplaying || false;

		listeningStatus.textContent = isPlaying
			? "Listening To"
			: "Last Listened";
		if (!isPlaying && loaded > 0) return;
		loaded = isPlaying ? 0 : 1;

		const playing = document.getElementById("playing");
		playing.innerHTML = `
      <div class="playing-wrapper">
        <img class="playing-cover" src="${escapeHtml(track.image[2]["#text"])}">
        <div class="playing-trackInfo">
          <a href="${escapeHtml(track.url)}" target="_blank">
            <div class="playing-marquee playing-marquee--track">
              <div class="playing-marquee__inner playing-trackName">${escapeHtml(track.name)}</div>
            </div>
          </a>
          <div class="playing-marquee playing-marquee--artist">
            <div class="playing-marquee__inner playing-artistName">${escapeHtml(track.artist["#text"])}</div>
          </div>
        </div>
      </div>
    `;

		const trackMarquee = playing.querySelector(".playing-marquee--track");
		const artistMarquee = playing.querySelector(".playing-marquee--artist");

		// trigger after render so widths are accurate
		requestAnimationFrame(() => {
			makeMarquee(trackMarquee, 100);
			makeMarquee(artistMarquee, 80);
		});
	} catch (e) {
		console.error(e);
	}
}

getTrack();
setInterval(getTrack, 5000);

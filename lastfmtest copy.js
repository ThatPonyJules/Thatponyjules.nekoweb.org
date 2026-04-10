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

/* MARQUEE — THIS ONE CANNOT BREAK */
function makeMarquee(container, speed = 80) {
	const text = container.querySelector(".playing-marquee__inner");
	if (!text) return;

	// measure text width BEFORE rebuilding
	const textWidth = text.scrollWidth;
	const containerWidth = container.clientWidth;

	// if no scroll needed
	if (textWidth <= containerWidth) return;

	// build track
	const track = document.createElement("div");
	track.className = "playing-marquee__track";

	const itemA = document.createElement("div");
	const itemB = document.createElement("div");

	itemA.className = itemB.className = "playing-marquee__item";
	itemA.innerHTML = text.innerHTML;
	itemB.innerHTML = text.innerHTML;

	track.appendChild(itemA);
	track.appendChild(itemB);

	container.innerHTML = "";
	container.appendChild(track);

	// duration based on real width
	const duration = textWidth / speed;
	track.style.animationDuration = `${duration}s`;
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
              <div class="playing-marquee__inner playing-trackName">
                ${escapeHtml(track.name)}
              </div>
            </div>
          </a>
          <div class="playing-marquee playing-marquee--artist">
            <div class="playing-marquee__inner playing-artistName">
              ${escapeHtml(track.artist["#text"])}
            </div>
          </div>
        </div>
      </div>
    `;

		requestAnimationFrame(() => {
			makeMarquee(playing.querySelector(".playing-marquee--track"), 100);
			makeMarquee(playing.querySelector(".playing-marquee--artist"), 80);
		});
	} catch (e) {
		console.error(e);
	}
}

getTrack();
setInterval(getTrack, 5000);

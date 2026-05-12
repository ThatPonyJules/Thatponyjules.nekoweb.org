const USERNAME = "Julesfr__";
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;
const listeningStatus = document.getElementById("musicstatus");

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

/* main fetch + render */
async function getTrack() {
	try {
		const req = await fetch(BASE_URL);
		const json = await req.json();
		const track = json.track;
		const isPlaying = track["@attr"]?.nowplaying || false;
		let musicstate = "bad code idiot";

		if(!isPlaying) {
			console.log("last listened to");
			musicstate = "Last Listened to";
		} else {
			console.log("listing atm");
			musicstate = "Listening to";
		}

		const playing = document.getElementById("playing");
		playing.innerHTML = `
		<div id="lastfm">
        	<img style="float: left; border-radius: 5px;" width="50%" src="${escapeHtml(track.image[3]["#text"])}"/>
			<div class="lastfm-row">
        	    <div id="lastfmtext" style="padding:15px">
					<p>` + musicstate + `</p>
					<br>
        	        <a href="${escapeHtml(track.url)}" style="font-size:20px">${escapeHtml(track.name)}</a>
        	        <p id="artistName">${escapeHtml(track.artist["#text"])}</p>
        	    </div>
        	</div>
		</div>
    `;
		console.log(track.name)

	} catch (e) {
		console.error(e);
	}

}

getTrack();
setInterval(getTrack, 5000);

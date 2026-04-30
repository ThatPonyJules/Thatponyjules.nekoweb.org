// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)

const USERNAME = "JulesFr__"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const listeningStatus = document.getElementById('musicstatus')

var loaded = 0

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();
    let status

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if (!isPlaying) {
        listeningStatus.textContent = "Last Listened"
        if (loaded > 0) {
            return
        }
        loaded = 1
    } else {
        listeningStatus.textContent = "Listening To"
        loaded = 0
    }

    // Values:
    // COVER IMAGE: json.track.image[1]['#text']
    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']


    document.getElementById("listening").innerHTML = `
    <flex id="lastfm">
    <img src="${json.track.image[2]['#text']}" style="margin-bottom: 5%; border-radius: 10px; width: 45%; border: 3px solid white">
    <div id="trackInfo">
    <h3 class="basictext" id="trackName">${json.track.name}</h3>
    <p class="basictext" id="artistName">${json.track.artist['#text']}</p>
    </div>
    </flex>
    `
};

getTrack();
setInterval(() => {
    getTrack();
}, 5000);

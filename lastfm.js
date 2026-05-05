// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)
                        
const USERNAME = "Julesfr__"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();
    let status

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if(!isPlaying) {
        // Trigger if a song isn't playing
        return;
    } else {
        // Trigger if a song is playing
    }

    // Values:
    // COVER IMAGE: json.track.image[1]['#text']
    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']

    document.getElementById("listening").innerHTML = `
    <flex id="lastfm">
        <img style="float: left; border-radius: 5px;" width="50%" src="${json.track.image[3]['#text']}"/>
        <div class="lastfm-row">
            <div id="lastfmtext">
                <a href="${json.track.url}">${json.track.name}</a>
                <p id="artistName">${json.track.artist['#text']}</p>
            </div>
        </div>
    </flex>
    `
};

getTrack();
setInterval(() => { getTrack(); }, 5000);
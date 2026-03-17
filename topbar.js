$(document).ready(function () {
	$(`h4`).prepend(`
		<div class="bottom">
			<div
				class="top-bar bottom"
				style="display: flex; justify-content: flex-end"
			>
				<span style="text-align:right">
					<p>
						<a href="/About.html">About</a>
						<a href="/Music.html">Music</a>
					</p>
				</span>
				<div class="dropdown">
					<div id="hitboxidfk">
						<button class="dropbtn" id="buttocks">[+]</button>
						<div
							class="dropdown-content"
							id="drop"
							style="display:none"
						>testing
							<a href="/Julessitedotnet.html">
								Julessite
							</a>
							<a href="/OCS.html">OCs</a>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="main-seg">
				<center>
							<a href="/Home.html">
								<img
									src="/TPJ LOGO.png"
									width=75%
								/>
							</a>
					</center>
				</div>
			</div>
		</div>
		<script
			type="text/javascript"
			src="https://panzi.github.io/Browser-Ponies/basecfg.js"
			id="browser-ponies-config"
		></script>
		<script
			type="text/javascript"
			src="https://panzi.github.io/Browser-Ponies/browserponies.js"
			id="browser-ponies-script"
		></script>
		<script type="text/javascript">
			/* <![CDATA[ */ (function (cfg) {BrowserPonies.setBaseUrl(cfg.baseurl);BrowserPonies.loadConfig(BrowserPoniesBaseConfig);BrowserPonies.loadConfig(cfg);})({"baseurl":"https://panzi.github.io/Browser-Ponies/","fadeDuration":500,"volume":1,"fps":25,"speed":3,"audioEnabled":false,"dontSpeak":true,"showFps":false,"showLoadProgress":true,"speakProbability":0.1,"spawn":{"fluttershy":1,"princess luna":1,"rainbow dash":1,"twilight sparkle":1},"autostart":true}); /* ]]> */
		</script>
		<script>

			    var toggledrop = false

			    $(document).ready(function(){
			    if (toggledrop == false) {
			      $("#hitboxidfk").hover(function(){
			      $("#drop").css("display", "block");
			      }, function(){
			      $("#drop").css("display", "none");
			  });
			  } else if (toggledrop == true) {
			      $("#hitboxidfk").hover(function(){
			      $("#drop").css("display", "block");
			      }, function(){
			      $("#drop").css("display", "bloxk");
			  });
			};
			    $("#buttocks").click(function(){
			      if (toggledrop == false) {
			        $("#drop").css("display", "block");
			        toggledrop = true;
			    } else {
			      $("#drop").css("display", "none");
			        toggledrop = false;
			    };
			  });
			});
		</script>
		<script type="text/javascript" src="Splashes.js"></script>
`);
});

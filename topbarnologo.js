$(document).ready(function () {
	$(`h4`).prepend(`    <div class="bottom">
      <div class="top-bar bottom" style="display: flex; justify-content: flex-end">
        <p style=text-align:right >
        <a href = "/About.html">About</a> <a href="/Music.html">Music</a></p>
        <div class="dropdown">
          <div id="hitboxidfk">
            <button class="dropbtn" id="buttocks">[+]</button>
            <div class="dropdown-content" id="drop" style="display:none">
              <a href="/Julessitedotnet.html">Julessite</a>
              <a href="/OCS.html">OCs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  </script>`);
});

document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("div");
	videoIntroduce.className = "container-fluid my-container h-100 x";
	videoIntroduce.innerHTML = `
	<div class="row h-100">
	<div class="col-12">
	<div class="video-wrapper">
  <iframe id="headerVimeoID"  class="video-fullscreen embed-responsive-item w-100 h-100" src="https://player.vimeo.com/video/830524731?autoplay=1&controls=0&&muted=1&loop=0" frameborder="0" allow="autoplay"
			allowfullscreen
	</iframe>
  </div>
  </div>
  </div>
  `;
	$("body").prepend(videoIntroduce);

	const iframe = document.getElementById("headerVimeoID");
	const playerHeader = new Vimeo.Player(iframe);

	playerHeader.on("ended", function () {
		playerHeader
			.pause()
			.then(function () {
				return playerHeader.getCurrentTime();
			})
			.then(function (seconds) {
				playerHeader.setCurrentTime(seconds - 0.01);
			});
	});
});

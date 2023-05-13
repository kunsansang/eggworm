document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("div");
	videoIntroduce.classList.add("container-fluid");
	videoIntroduce.classList.add("my-container");
	videoIntroduce.innerHTML = `
  <div class="row">
    <div class="col-md-12">
      <div class="video-wrapper">
        <!-- Replace the VIDEO_ID with your Vimeo video ID -->
        <iframe src="https://player.vimeo.com/video/658828604" class="embed-responsive-item w-100" frameborder="0"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
  `;
	document.body.appendChild(videoIntroduce);
});

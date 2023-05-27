document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("section");
	videoIntroduce.className = "home-gear";
	videoIntroduce.innerHTML = `
     <a href="/" title="GO GEAR" target="_blank">
        <div class="home-gear__image">
          <img alt="" class="pc-only loaded" data-src="https://goinc.co.jp/assets/images/home/go-gear-banner.jpg"
            src="https://goinc.co.jp/assets/images/home/go-gear-banner.jpg" lazy="loaded"> <img alt="" class="sp-only"
            data-src="https://goinc.co.jp/assets/images/home/go-gear-banner.jpg"
            src="https://goinc.co.jp/assets/images/home/go-gear-banner.jpg" lazy="loading"></div>
        <div class="arrow"><span></span></div>
      </a>
  `;
	$("body").append(videoIntroduce);
});

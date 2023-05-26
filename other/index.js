document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("section");
	videoIntroduce.className = "home-other";
	videoIntroduce.innerHTML = `
  <div class="home-other-item"><a href="https://www.eggworm.jp/founders" class="">
          <div class="home-other-item__image"><img
              data-src="https://raw.githubusercontent.com/kunsansang/eggworm/main/other/founder1.png "
              src="https://raw.githubusercontent.com/kunsansang/eggworm/main/other/founder1.png " lazy="loaded"
              class="loaded">
          </div>
          <div class="home-other-item__cover"></div>
          <div class="home-other-item__title">Founders<span></span></div>
        </a></div>
      <div class="home-other-item"><a href="/contact/?joinus=1" class="">
          <div class="home-other-item__image"><img
              data-src="	https://goinc.co.jp/data/uploads/2022/10/home-members2.jpg?20230510022158"
              src="	https://goinc.co.jp/data/uploads/2022/10/home-members2.jpg?20230510022158" lazy="loaded"
              class="loaded"></div>
          <div class="home-other-item__cover"></div>
          <div class="home-other-item__title">Join us<span></span></div>
        </a></div>
  `;
	$("body").append(videoIntroduce);
});

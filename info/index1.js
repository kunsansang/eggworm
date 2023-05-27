document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("section");
	videoIntroduce.className = "home-info";
	videoIntroduce.innerHTML = `
      <h2 class="home-info__title">COMPANY INFO</h2>
      <div class="home-info-content">
        <dl>
          <dt>会社名</dt>
          <dd>株式会社GO / GO inc.</dd>
          <dt>設　立</dt>
          <dd>2017年1月5日</dd>
          <dt>役　員</dt>
          <dd>三浦崇宏 / 福本龍馬</dd>
        </dl>
      </div>
      <div class="home-info-content">
        <dl>
          <dt>所在地</dt>
          <dd><span class="home-info__address">〒106-0032<br>
              東京都港区六本木3-17-10<br>
              ROPPONGI DUPLEX TOWER 2F</span> <a
              href="https://www.google.co.jp/maps/place/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEGO/@35.6618393,139.7347131,17z/data=!3m1!4b1!4m5!3m4!1s0x60188bde13a2e35b:0x75721a8cac63193a!8m2!3d35.661835!4d139.7369018?hl=ja&amp;shorturl=1"
              target="_blank" class="home-info__googlemap-link">
              <div class="text">Google Map<span class="line"></span></div>
            </a></dd>
        </dl>
        <p class="home-info__text">外苑東通り沿いの階段か、ローソン横の<br>
          エレベータで2Fにお上がりください</p>
      </div>
      <div class="home-contact"><a href="https://www.eggworm.jp/en/home#about" class="" title="CONTACT">CONTACT<div class="arrow"><span></span></div>
          </a></div>
  `;
	$("body").append(videoIntroduce);
});

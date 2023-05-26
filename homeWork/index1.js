document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("section");
	videoIntroduce.className = "home-works";
	videoIntroduce.innerHTML = `
 <header class="home-works-header active">
        <h2 class="home-works-title">WORKS</h2> <a href="https://www.eggworm.jp/en/our-work" class="home-works-all-link arrow-button active"><span
            class="text">View All</span> <span class="arrow"></span> <span class="line"></span></a>
      </header>
      <div class="home-works-list">
        <div class="home-works-item">
          <div class="home-works-item__inner"><a href="/works/familymart/" class="home-works-item__image">
              <div class="image" data-src="/data/uploads/2021/10/1340-750-f.jpg?20230510022158" lazy="loading"
                style="background-image: url('https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/ac09a66e-3604-425e-a1ef-fe2def98bb74/288020857_10159108756540698_9000293709595520415_n.jpeg?format=2500w');">
              </div>
            </a>
            <div class="home-works-info">
              <div class="home-works-info__logo"><img data-src="?20230510022158"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
              </div>
              <h3 class="home-works-info__title">BRUICHLADDICH</h3>
              <p class="home-works-info__text">Bruichladdich were looking to create awareness in 2022 for their product
                range in the Japanese market. They wanted a
                launch event in line with their target demographic and PR reach that would assist them in telling their
                brand story on a
                national scale.</p> <a href="https://www.eggworm.jp/en/our-work/bruichladdich"
                class="home-works-link arrow-button"><span class="text">View Details</span> <span class="arrow"></span>
                <span class="line"></span></a>
            </div>
            <div class="cover"></div>
          </div>
        </div>
        <div class="home-works-item">
          <div class="home-works-item__inner"><a href="/works/familymart/" class="home-works-item__image">
              <div class="image" data-src="/data/uploads/2021/10/1340-750-f.jpg?20230510022158" lazy="loading"
                style="background-image: url('https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/1596417754268-0HYZGZ8BXFKG20TNHSEK/107051076_2987167684885523_3111168653457907190_n.jpg');">
              </div>
            </a>
            <div class="home-works-info">
              <div class="home-works-info__logo"><img data-src="?20230510022158"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
              </div>
              <h3 class="home-works-info__title">TAXI OVATION</h3>
              <p class="home-works-info__text">To help the hospitals combat Covid-19 with Taxi Ovation – a fundraiser
                was created to provide free taxi-ride services
                for healthcare workers in partnership with Makita General Hospital and Kyoritsu Taxi Co., Ltd. The aim
                was to increase
                the welfare of hospital staff during this pandemic as well as providing business for companies who were
                affected by it.
              </p> <a href="https://www.eggworm.jp/en/our-work/bruichladdich" class="home-works-link arrow-button"><span
                  class="text">View Details</span> <span class="arrow"></span>
                <span class="line"></span></a>
            </div>
            <div class="cover"></div>
          </div>
        </div>
        <div class="home-works-item">
          <div class="home-works-item__inner"><a href="/works/familymart/" class="home-works-item__image">
              <div class="image" data-src="/data/uploads/2021/10/1340-750-f.jpg?20230510022158" lazy="loading"
                style="background-image: url('https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/1596418713811-XAM7LLHGZWOES91AAL3D/28161740_10155415421745698_2751362336498237194_o_10155415421745698.jpg');">
              </div>
            </a>
            <div class="home-works-info">
              <div class="home-works-info__logo"><img data-src="?20230510022158"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
              </div>
              <h3 class="home-works-info__title">ONITSUKA TIGER
              </h3>
              <p class="home-works-info__text">To mark 69 years of selling sneakers, Onitsuka Tiger opened up a flagship
                store in the heart of Tokyo. The opening night
                enhanced the relevance of the brand as one of Japan's original sneaker brands.
              </p> <a href="https://www.eggworm.jp/en/our-work/bruichladdich" class="home-works-link arrow-button"><span
                  class="text">View Details</span> <span class="arrow"></span>
                <span class="line"></span></a>
            </div>
            <div class="cover"></div>
          </div>
        </div>
      </div>
      <footer class="home-works-footer"><a href="https://www.eggworm.jp/en/our-work" class="home-works-footer__link">View All<span></span></a>
      </footer>
  `;
	$("body").append(videoIntroduce);
});

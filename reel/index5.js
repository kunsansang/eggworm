document.addEventListener("DOMContentLoaded", function (event) {
	const reelSection = document.createElement("section");
	reelSection.id = "gl-statement";
	reelSection.innerHTML = `
		<div class="gl-state-copyset">
        <div class="gl-state-copy">
          <img src="https://raw.githubusercontent.com/kunsansang/eggworm/main/reel/eggwormLine.svg" alt="logo">
        </div>
      </div>
      <div class="gl-state-copyset">
        <div class="gl-state-copy">
          <img src="https://raw.githubusercontent.com/kunsansang/eggworm/main/reel/eggworm.svg" alt="logo">
        </div>
      </div>
      <div class="gl-state-white"></div>
      <div class="gl-statement-txt">
        <p class="gl-state-intxt"><span class="gl-state-line">
            <span>Hello, we’re EGGWORM.</span>
        </p>
        <p class="gl-state-intxt"><span class="gl-state-line">
            <span>As a results-driven brand experience company, we create empowering encounters that invigorate our
              partners' brand narratives.
            </span>
        </p>
        <p class="gl-state-intxt"><span class="gl-state-line">
            <span>These dynamic experiences encompass the physical, digital, and the seamless
              fusion of both realms in today's ever-evolving world. We're dedicated to helping
              our partners adapt and flourish in the face of change. Change presents both
              challenges and opportunities for businesses, and it all begins with a visionary idea -
              one that we're committed to nurturing from the very beginning until it becomes a
              reality.
            </span>
        </p>
        <p class="gl-state-intxt"><span class="gl-state-line">
            <span>Navigating the Japanese market can be a daunting endeavor, but at EGGWORM,
              we embrace challenges as opportunities and take pride in turning the seemingly
              impossible into reality.
            </span>
        </p>
      </div>
  `;
	document.body.appendChild(reelSection);

	// variables
	const imgs = document.querySelectorAll(".gl-state-copy");
	const imgWidth = imgs[0].offsetWidth;
	const whiteBg = document.querySelector(".gl-state-white");
	const texts = document.querySelectorAll(".gl-state-intxt");
	let currentX = 0;
	var timer = null;

	// config variables
	let direction = -1; // 1 for moving right, -1 for moving left
	const defaultFrame = 10;
	const defaultSpeed = 1; // 0.5 -> 5
	let currentSpeedImg = 0.8;
	let delayX = 0; // 0 - 40
	let hasRun = false;

	// main functions
	function movementFrame() {
		currentX += direction * currentSpeedImg;

		if (currentX > window.innerWidth) {
			currentX = (-imgWidth * 98) / 100;
		}

		if (currentX < -imgWidth) {
			currentX = window.innerWidth;
		}

		imgs[0].style.transform = `matrix(1, 0, 0, 1, ${currentX + delayX}, 0)`;
		imgs[1].style.transform = `matrix(1, 0, 0, 1, ${currentX}, 0)`;
	}

	// utilize functions
	var getScrollAmount = (function (settings) {
		settings = settings || {};

		var lastPos,
			newPos,
			timer,
			delta,
			delay = settings.delay || 20; // in "ms" (higher means lower fidelity )

		function clear() {
			lastPos = null;
			delta = 0;
		}

		clear();

		return function () {
			newPos = window.scrollY;
			if (lastPos != null) {
				// && newPos < maxScroll
				delta = newPos - lastPos;
			}
			lastPos = newPos;
			clearTimeout(timer);
			timer = setTimeout(clear, delay);
			return delta;
		};
	})();

	function startMoving() {
		setInterval(movementFrame, defaultFrame);
	}

	function mapValue(oldValue, oldMin, oldMax, newMin, newMax) {
		const oldRange = oldMax - oldMin;
		const newRange = newMax - newMin;
		const newValue = ((oldValue - oldMin) * newRange) / oldRange + newMin;

		return newValue;
	}

	function resetDefaultSpeed() {
		currentSpeedImg = defaultSpeed;
	}

	function resetDelayXTo0() {
		intervalResetDelayX = setInterval(() => {
			if (delayX * -direction > 0) {
				delayX -= 0.05 * -direction;
			} else {
				clearInterval(intervalResetDelayX);
				delayX = 0;
			}
		}, 1);
	}

	function isInView(element) {
		const rect = element.getBoundingClientRect() ;
		return (
			rect.top * 1.5 <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.bottom * 1.5 >= 0
		);
	}

	function fadeInMoving() {
		let y = 0;
		const fadeInInterval = setInterval(() => {
			if (y === 101) {
				clearInterval(fadeInInterval)
			} else {
				y += 1;
			}
			whiteBg.style.transform = `translate(0%, ${y}%) matrix(1, 0, 0, 1, 0, 0)`;
		}, 5)
	}

	window.addEventListener(
		"scroll",
		function () {
			const scrollAmount = getScrollAmount();
			if (scrollAmount !== 0) {
				direction = -scrollAmount / Math.abs(scrollAmount);
			}
			if (!hasRun && isInView(whiteBg)) {
				hasRun = true;
				fadeInMoving();
				texts.forEach(text => {
					text.classList.add('fadeInBottom')
				})
			}
			const newSpeed = mapValue(Math.abs(scrollAmount), 1, 100, 2, 5);
			delayX = mapValue(Math.abs(scrollAmount), 20, 100, 40, 60) * -direction;
			currentSpeedImg = newSpeed; // img goes faster

			if (timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function () {
				resetDefaultSpeed();
				resetDelayXTo0();
			}, 150);
		},
		false,
	);

	// init running
	startMoving();
});

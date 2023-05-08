(function () {
	const reelSection = document.createElement("section");
	reelSection.id = "gl-statement";
	reelSection.innerHTML = `
  <div class="gl-state-copyset">
        <div class="gl-state-copy">
          <img src="./reel/a.svg" height="auto" alt="">
        </div>

      </div>
      <div class="gl-state-copyset">
        <div class="gl-state-copy">
          <img src="./reel/b.svg" height="auto" alt="">
        </div>
      </div>
      <div class="gl-state-white" style="opacity: 1; transform: translate(0%, 101%) matrix(1, 0, 0, 1, 0, 0);"></div>
      <div class="gl-statement-txt">
        <p class="gl-state-intxt">
          <span class="gl-state-line">
            Hello, we’re EGGWORM.
          </span>
        </p>
        <p class="gl-state-intxt">
          <span class="gl-state-line">
            As a results-driven brand experience company, we create empowering encounters
            that invigorate our partners' brand narratives.
          </span>
        </p>
        <p class="gl-state-intxt">
          <span class="gl-state-line">
            These dynamic experiences encompass the physical, digital, and the seamless
            fusion of both realms in today's ever-evolving world. We're dedicated to helping
            our partners adapt and flourish in the face of change. Change presents both
            challenges and opportunities for businesses, and it all begins with a visionary idea -
            one that we're committed to nurturing from the very beginning until it becomes a
            reality.
          </span>
        </p>
        <p class="gl-state-intxt">
          <span class="gl-state-line">
            Navigating the Japanese market can be a daunting endeavor, but at EGGWORM,
            we embrace challenges as opportunities and take pride in turning the seemingly
            impossible into reality.
          </span>
        </p>
      </div>
  `;
	const ndSection = document.querySelectorAll(selectors)('section')[1];
	ndSection.appendChild(reelSection);

	// variables
	const imgs = document.querySelectorAll(".gl-state-copy");
	const imgWidth = imgs[0].offsetWidth;
	let currentX = 0;
	var timer = null;

	// config variables
	let direction = -1; // 1 for moving right, -1 for moving left
	const defaultFrame = 10;
	const defaultSpeed = 1; // 0.5 -> 5
	let currentSpeedImg = 0.8;
	let delayX = 0; // 0 - 40
	let movementInterval;

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
		movementInterval = setInterval(movementFrame, defaultFrame);
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

	window.addEventListener(
		"scroll",
		function () {
			const scrollAmount = getScrollAmount();
			if (scrollAmount !== 0) {
				direction = -scrollAmount / Math.abs(scrollAmount);
			}

			const newSpeed = mapValue(Math.abs(scrollAmount), 1, 100, 2, 5);
			delayX = mapValue(Math.abs(scrollAmount), 1, 100, 25, 40) * -direction;
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
})();

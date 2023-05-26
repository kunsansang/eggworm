document.addEventListener("DOMContentLoaded", function (event) {
	setTimeout(() => {
		document.body.classList.add("is-fv-finish");
	}, 2000);
	const topScroll = document.createElement("div");
	topScroll.classList.add("top-scroll");
	const firstSection = document.querySelector(".container-fluid.my-container.h-100.x");
	firstSection.appendChild(topScroll);
});

(function () {
  setTimeout(() => {
    document.body.classList.add('is-fv-finish')
  }, 2000);

  const topScroll = document.createElement( "div" );
  topScroll.classList.add( "top-scroll" );
  const firstSection = document.querySelector("section");
  firstSection.appendChild( topScroll );
})();

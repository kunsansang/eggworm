(function () {
  // styling
  const hamburgerStyle = `
  .hamburbur-button {
    width: 38px;
    height: 38px;
    padding: 13px 0;
    position: fixed;
    top: 50px;
    right: 80px;
    cursor: pointer;
    mix-blend-mode: difference;
    z-index: 10002;
    will-change: transform;
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: -webkit-transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    -o-transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), -webkit-transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    box-sizing: border-box;

    /* animation */
    opacity: 0;
    -webkit-transform: translateX(10px) scaleX(0);
    -ms-transform: translateX(10px) scaleX(0);
    transform: translateX(10px) scaleX(0);

    animation-name: fadeIn;
    animation-duration: 1s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }

  .hamburbur-button span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    margin-bottom: 8px;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    -o-transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    box-sizing: border-box;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      -webkit-transform: translateX(10px) scaleX(0);
      -ms-transform: translateX(10px) scaleX(0);
      transform: translateX(10px) scaleX(0);
    }

    to {
      opacity: 1;
      -webkit-transform: translateX(0px) scaleX(1);
      -ms-transform: translateX(0px) scaleX(1);
      transform: translateX(0px) scaleX(1);
    }
  }

  @media (min-width: 769px) {
    .hamburbur-button:hover span:nth-of-type(1) {
      -webkit-transform: translateX(-5px);
      -ms-transform: translateX(-5px);
      transform: translateX(-5px);
    }

    .hamburbur-button.active:hover span:nth-of-type(1) {
      -webkit-transform: translateY(5px) rotate(45deg);
      -ms-transform: translateY(5px) rotate(45deg);
      transform: translateY(5px) rotate(45deg);
    }

    .hamburbur-button.active:hover span:nth-of-type(2) {
      -webkit-transform: translateY(-5px) rotate(-45deg);
      -ms-transform: translateY(-5px) rotate(-45deg);
      transform: translateY(-5px) rotate(-45deg);
    }


    .hamburbur-button:hover span:nth-of-type(2) {
      -webkit-transform: translateX(5px);
      -ms-transform: translateX(5px);
      transform: translateX(5px);
    }
  }

  .hamburbur-button.active span:nth-of-type(1) {
    -webkit-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
  }

  .hamburbur-button.active span:nth-of-type(2) {
    -webkit-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  `;
  const styleElm = document.createElement("style");
  styleElm.textContent = hamburgerStyle;
  document.head.appendChild(styleElm);

  // component
  const hamburgerWrapper = document.createElement( "div" );
  hamburgerWrapper.classList.add( "hamburbur-button" );
  hamburgerWrapper.id = "hamburgerMenu";
  hamburgerWrapper.innerHTML = `
  <span></span>
  <span></span>
  `;
  // document.querySelector(".header-nav-list")[0].appendChild(hamburgerWrapper);
  document.body.appendChild( hamburgerWrapper );

  // logic
  hamburgerWrapper.addEventListener( 'click', function () {
  this.classList.toggle( 'active' );
  });
})();

const sliderCard = tns({
  container: '.slide-card-box .slide-card-list',
  slideBy: 'page',
  items: 1,
  mouseDrag: true,
  arrowKeys: true,
  gutter: 10,
  edgePadding: 60,
  rewind: true,
  controlsContainer: '.slide-card-box .controls',
  prevButton: '.slide-card-box .controls .btn-prev',
  nextButton: '.slide-card-box .controls .btn-next',
  preventScrollOnTouch: true,
  responsive: {
    780: {
      items: 2,
      gutter: 20,
    },
    1200: {
      items: 3,
      gutter: 20,
      edgePadding: 0,
    },
  },
})

// const slideCardList = document.querySelector('.our-shop .slide-card-list')
// slideCardList.style.transform = 'translate3d(-40px, 0, 0)'

const sliderBox = tns({
  container: '.slide-box .slide-list',
  slideBy: 'page',
  items: 1,
  mouseDrag: true,
  arrowKeys: true,
  // speed: 1200,
  // autoplay: true,
  // autoplayHoverPause: true,
  // autoplayButtonOutput: false,
  controls: false,
  navContainer: '.slide-box .slide-carousel',
  loof: false,
})

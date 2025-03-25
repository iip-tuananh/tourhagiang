'use strict';

/* exported extend, ready */
let extend = function(out) {
  out = out || {};

  for (let i = 1; i < arguments.length; i++) {
    if (!arguments[i]) {
      continue;
    }

    for (let key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        out[key] = arguments[i][key];
      }
    }
  }

  return out;
};

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


ready(() => {
  const heroBtnPlay = document.getElementById('hero-btn-play');

  if (heroBtnPlay) {
    const heroVideo = document.getElementById('hero-video');
    let isChangeVideo = false;

    heroBtnPlay.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(!isChangeVideo);
      if (!isChangeVideo) {
        isChangeVideo = true;
        heroVideo.src = heroVideo.dataset.srcFull;
        heroVideo.poster = heroVideo.dataset.posterFull;
        heroBtnPlay.classList.add('paused');
      } else {
        if (heroVideo.paused) {
          heroVideo.play();
          heroBtnPlay.classList.add('paused');
        } else {
          heroVideo.pause();
          heroBtnPlay.classList.remove('paused');
        }
      }
    });
  }

  // mobile nav-style-1
  const navS1Item = document.querySelectorAll('.nav-style-1 .nav-link[data-bs-toggle="tab"]');
  navS1Item.forEach((el) => {
    el.addEventListener('shown.bs.tab', e => {
      e.target.closest('.dropdown').querySelector('.dropdown-toggle').textContent = e.target.textContent;
    });
  });
});


// --------------------------
// navbar-toggle
// --------------------------

/* global ready */
ready(() => {
  'use strict';

  if (window.innerWidth < 992) {
    const navbarCollapse = document.getElementById('navbar-collapse'),
      navbarToggle = document.getElementById('navbar-toggle'),
      navbarDropdownToggle = navbarCollapse.querySelectorAll('.dropdown-toggle');
    let closeNavbar;

    navbarDropdownToggle.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        const elNavbarDropdownMenu = el.nextElementSibling;

        if (!elNavbarDropdownMenu.classList.contains('show')) {
          elNavbarDropdownMenu.classList.add('show');
          elNavbarDropdownMenu.style.height = 'auto';
          const height = elNavbarDropdownMenu.clientHeight + 'px';
          elNavbarDropdownMenu.style.height = '0';

          setTimeout(() => {
            elNavbarDropdownMenu.style.height = height;
          }, 0);

          setTimeout(() => {
            elNavbarDropdownMenu.style.height = '';
          }, 300);
        } else {
          elNavbarDropdownMenu.style.height = 'auto';
          elNavbarDropdownMenu.style.height = elNavbarDropdownMenu.clientHeight + 'px';

          setTimeout(() => {
            elNavbarDropdownMenu.style.height = '0';
          }, 0);

          setTimeout(() => {
            elNavbarDropdownMenu.classList.remove('show');
          }, 300);

          // elNavbarDropdownMenu.addEventListener('transitionend', () => {
          //   elNavbarDropdownMenu.classList.remove('show');
          // }, {once: true});
        }
      });
    });

    navbarToggle.addEventListener('click', (e) => {
      e.preventDefault();
      navbarCollapse.classList.toggle('show');

      if (navbarCollapse.classList.contains('show')) {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = 'auto';
      }
    });

    document.getElementById('navbar-close').addEventListener('click', () => {
      closeNavbar();
    });

    closeNavbar = function() {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('click', true, false);
      navbarToggle.dispatchEvent(event);
    };
  }
});


// --------------------------
// $map
// --------------------------

/* global ready, bootstrap */
ready(() => {
  'use strict';

  const elMap = document.getElementById('map');
  const elMapItem = document.querySelectorAll('.map-item');

  Array.prototype.forEach.call(elMapItem, (el) => {
    el.addEventListener('show.bs.dropdown', () => {
      setTimeout(() => {
        elMap.classList.add('active');
      }, 50);
    });

    el.addEventListener('hide.bs.dropdown', () => {
      elMap.classList.remove('active');
    });

    el.querySelector('.card-close').addEventListener('click', (e) => {
      e.preventDefault();
      elMap.classList.remove('active');
      bootstrap.Dropdown.getInstance(el.querySelector('.map-node')).hide();
    });
  });
});


// --------------------------
// image-compare-viewer
// --------------------------

/* global ready, interact */
ready(() => {
  'use strict';

  const compare = document.querySelector('.compare');

  if (compare) {
    const compareFront = compare.querySelector('.compare-front');
    let compareDistance;

    interact(compareFront).resizable({
      edges: {
        right: window.innerWidth >= 992 ? '.compare-control' : false,
        bottom: window.innerWidth < 992 ? '.compare-control' : false
      },
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`
          });

          Object.assign(event.target.dataset, { x, y });

          if (window.innerWidth >= 992) {
            compareDistance = Math.round(event.rect.width * 100 / compare.offsetWidth);
          } else {
            compareDistance = Math.round(event.rect.height * 100 / compare.offsetHeight);
          }

          if (compareDistance < 50) {
            compare.classList.add('active');
          } else {
            compare.classList.remove('active');
          }
        }
      }
    });
  }
});


// --------------------------
// headroom
// --------------------------

/* global ready, extend, Headroom */
ready(() => {
  'use strict';

  const elHeaderHeadroom = document.querySelector('.header-headroom');

  if (elHeaderHeadroom) {
    let defaults = {
      tolerance: 5,
      offset: 100
    };
    let options = extend({}, defaults, JSON.parse(elHeaderHeadroom.getAttribute('data-options')));

    const headroom = new Headroom(elHeaderHeadroom, options);
    headroom.init();
  }
});


// --------------------------
// swiper
// --------------------------

/* global ready, extend, Swiper */
ready(() => {
  'use strict';

  const elSwiper = document.querySelectorAll('[data-plugin="swiper"]');
  Array.prototype.forEach.call(elSwiper, (el) => {
    let defaults = {
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev')
      },
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true
      }
    };
    let options = extend({}, defaults, JSON.parse(el.getAttribute('data-options')));

    new Swiper(el, options);
  });
});


// --------------------------
// bs modal
// --------------------------

/* global ready */
ready(() => {
  'use strict';

  const modalVideo = document.getElementById('modal-video');
  const video = document.getElementById('video');
  if (modalVideo) {
    modalVideo.addEventListener('shown.bs.modal', function (event) {
      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      video.setAttribute('src',event.relatedTarget.dataset.src + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0' );
    });

    // stop playing the youtube video when I close the modal
    modalVideo.addEventListener('hidden.bs.modal', function () {
      video.setAttribute('src', '');
    });
  }
});


// --------------------------
// photoswipe
// --------------------------

/* global ready, extend, PhotoSwipe, PhotoSwipeLightbox */
ready(() => {
  'use strict';

  const elPhotoswipe = document.querySelectorAll('[data-plugin="photoswipe"]');
  Array.prototype.forEach.call(elPhotoswipe, (el) => {
    let defaults = {
      closeSVG: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pswp__icn"><path d="M18 6 6 18M6 6l12 12"/></svg>',
      zoomSVG: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pswp__icn"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',
      arrowPrevSVG: '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9L1 9M1 9L9.33333 0.999999M1 9L9.33333 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      arrowNextSVG: '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L21 9M21 9L12.6667 17M21 9L12.6667 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      gallery: el,
      children: 'a',
      showHideAnimationType: 'fade',
      zoomAnimationDuration: false,
      pswpModule: PhotoSwipe,
      thumbs: false // own option
    };
    let options = extend({}, defaults, JSON.parse(el.getAttribute('data-options')));

    const lightbox = new PhotoSwipeLightbox(options);

    // swiper slide to
    setTimeout(() => {
      const elSwiper = el.querySelector('.swiper:not(.swiper-thumbs)');
      if (elSwiper) {
        const swiper = elSwiper.swiper;
        lightbox.on('close', () => {
          swiper.slideTo(lightbox.pswp.currIndex, 0);
        });
      }
    }, 100);

    // add indicator
    if (options.thumbs) {
      lightbox.on('uiRegister', function() {
        lightbox.pswp.ui.registerElement({
          name: 'bulletsIndicator',
          className: 'pswp__bullets-indicator',
          appendTo: 'wrapper',
          onInit: (elBulletsIndicator, pswp) => {
            const bullets = [];
            let bullet;
            let prevIndex = -1;
            const lightboxitems = el.querySelectorAll(lightbox.options.children);

            for (let i = 0; i < pswp.getNumItems(); i++) {
              bullet = document.createElement('div');
              bullet.className = 'pswp__bullet';
              bullet.style.backgroundImage = `url('${lightboxitems[i].href}')`;
              bullet.onclick = (e) => {
                pswp.goTo(bullets.indexOf(e.target));
              };
              elBulletsIndicator.appendChild(bullet);
              bullets.push(bullet);
            }

            pswp.on('change', () => {
              if (prevIndex >= 0) {
                bullets[prevIndex].classList.remove('pswp__bullet--active');
              }
              bullets[pswp.currIndex].classList.add('pswp__bullet--active');
              prevIndex = pswp.currIndex;
            });
          }
        });
      });
    }

    // add caption
    lightbox.on('uiRegister', function() {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = '';
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
              }
            }
            el.innerHTML = `<div class="pswp__custom-caption-inner">${captionHTML}</div>` || '';
          });
        }
      });
    });

    lightbox.init();
  });
});


// --------------------------
// masonry
// --------------------------

/* global ready, extend, Masonry, imagesLoaded */
ready(() => {
  'use strict';

  const elMasonry = document.querySelectorAll('[data-plugin="masonry"]');
  Array.prototype.forEach.call(elMasonry, (el) => {
    let defaults = {
      itemSelector: '.masonry-item',
      hiddenStyle: {
        opacity: 0
      },
      visibleStyle: {
        opacity: 1
      },
      percentPosition: true
    };
    let options = extend({}, defaults, JSON.parse(el.getAttribute('data-options')));

    imagesLoaded(el, () => {

      var msnry = new Masonry( el, options);
      $(document).on("masonry-reload",function(){
        //msnry.reload();
        msnry = new Masonry( el, options);
      });
    });
  });
});


// --------------------------
// flatpickr
// --------------------------

/* global ready, extend, flatpickr */
ready(() => {
  'use strict';

  const elFlatpickr = document.querySelectorAll('[data-plugin="flatpickr"]');
  Array.prototype.forEach.call(elFlatpickr, (el) => {
    let defaults = {
      // altInput: true,
      // altFormat: "F j, Y",
      // altInputClass: 'form-control flatpickr-input-alt',
      dateFormat: 'd-m-Y',
      wrap: true,
      locale: 'vn',
      // onOpen: function(){
      //   document.querySelector('.mfp-wrap').removeAttribute('tabindex');
      // },
      // onClose: function(){
      //   document.querySelector('.mfp-wrap').setAttribute('tabindex', -1);
      // }
    };
    let options = extend({}, defaults, JSON.parse(el.getAttribute('data-options')));

    flatpickr(el, options);
  });
});


// --------------------------
// gsap
// --------------------------

/* global ready, gsap, ScrollTrigger, imagesLoaded */
ready(() => {
  'use strict';

  const pageHome = document.querySelector('.page-home');

  if (pageHome && window.innerWidth >= 992) {
    gsap.registerPlugin(ScrollTrigger);

    // section 1
    const loaderText = document.getElementById('loader-text');
    const updateProgress = (instance) => {
      loaderText.textContent = `${Math.round(instance.progressedCount * 100 / instance.images.length)}%`;
    };

    const showApp = () => {
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        document.scrollingElement.scrollTo(0, 0);
        gsap.to('#loader', { autoAlpha: 0});
      }, 300);

      const tlBanner = gsap.timeline();
      tlBanner.from('#section-hero .section-title', {autoAlpha: 0, y: '-2rem'}, '-=0.2');
      tlBanner.from('#section-hero .section-lead', {autoAlpha: 0, y: '-2rem'}, '-=0.2');
      tlBanner.from('#section-hero .play-circle', {autoAlpha: 0, y: '-1.2rem'}, '-=0.2');
      tlBanner.from('.header-cta', {autoAlpha: 0, y: '-2rem'}, '-=0.2');
      tlBanner.from('.btn-watch-sticky', {autoAlpha: 0, y: '2rem'}, '<');
      tlBanner.delay(.6);
    };

    imagesLoaded('body', {background: '.section'}).on('progress', updateProgress).on('always', showApp);

    // home scroll trigger
    ScrollTrigger.defaults({
      // toggleActions: 'play complete none reverse',
      start: 'top 80%',
      end: '80% bottom',
      scrub: 1,
      // markers: true
    });

    const tlPosition = '-=0.2';
    const tlDistance = '4rem';


    // section 1
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-1'}
    }).from('#section-1 .section-title', {y: tlDistance})
      .from('#section-1 .section-lead', {y: tlDistance}, tlPosition);


    // section 2
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-2'}
    }).from('#section-2 .blockquote', {y: tlDistance})
      // .from('#section-2 .section-content', {y: 100}, tlPosition)
      .from('#section-2 .section-title', {y: tlDistance}, tlPosition)
      .from('#section-2 .section-img-1', {xPercent: -100}, '<')
      .from('#section-2 .section-img-1 img', {xPercent: 100}, '<')
      .from('#section-2 .paragraph', {y: tlDistance}, '-=.4')
      .from('#section-2 .btn-cta', {y: tlDistance}, tlPosition)
      .from('#section-2 .section-img-3', {xPercent: -100}, '<')
      .from('#section-2 .section-img-3 img', {xPercent: 100}, '<')
      .from('#section-2 .section-img-2', {xPercent: -100}, '<')
      .from('#section-2 .section-img-2 img', {xPercent: 100}, '<');


    // section 3
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-3'}
    }).from('#section-3 .blockquote ', {y: tlDistance})
      .from('#section-3 .section-title', {y: tlDistance}, '-=0.3')
      .from('#section-3 .paragraph', {y: tlDistance}, tlPosition)
      .from('#section-3 .btn-cta', {y: tlDistance}, tlPosition)
      .from('#section-3 .swiper-container', {y: tlDistance}, tlPosition)
      .from('#section-3 .swiper-button-next', {x: -50})
      .from('#section-3 .swiper-button-prev', {x: 50}, '<');

    setTimeout(() => {
      gsap.set('#section-3 .section-top', {backgroundPosition: '50% 0%'});
      gsap.to('#section-3 .section-top', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '#section-3 .section-top',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true
        }
      });
    }, 300);


    // section 4
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-4'}
    }).from('#section-4 .blockquote', {y: tlDistance})
      .from('#section-4 .cuisine-1', {y: tlDistance}, tlPosition)
      .from('#section-4 .section-title', {y: tlDistance}, tlPosition)
      .from('#section-4 .paragraph', {y: tlDistance}, tlPosition)
      .from('#section-4 .cuisine-2', {y: tlDistance}, '<')
      .from('#section-4 .section-btn-more', {y: tlDistance}, tlPosition);


    // section 5
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-5'}
    }).from('#section-5 .blockquote', {y: tlDistance})
      .from('#section-5 .section-img-1', {xPercent: -100}, tlPosition)
      .from('#section-5 .section-img-1 img', {xPercent: 100}, '<')
      .from('#section-5 .section-title', {y: tlDistance}, tlPosition)
      .from('#section-5 .paragraph', {y: tlDistance}, tlPosition)
      .from('#section-5 .btn-cta', {y: tlDistance}, tlPosition)
      .from('#section-5 .section-img-2', {y: tlDistance}, tlPosition);


    // section 6
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-6'}
    }).from('#section-6 .blockquote', {y: tlDistance})
      .from('#section-6 .section-title', {y: tlDistance})
      .from('#section-6 .paragraph', {y: tlDistance}, tlPosition)
      .from('#section-6 .btn-cta', {y: tlDistance}, tlPosition);

    setTimeout(() => {
      gsap.set('#section-6 .section-nested', {backgroundPosition: '50% 0%'});
      gsap.to('#section-6 .section-nested', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '#section-6 .section-nested',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true
        }
      });
    }, 300);


    // section 7
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-7'}
    }).from('#section-7 .section-title', {y: tlDistance})
      .from('#section-7 .section-lead', {y: tlDistance}, tlPosition)
      .from('#section-7 .thumbnail', {y: 100, stagger: .1}, tlPosition);


    // section 8
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-8'}
    }).from('#section-8 .section-btn', {y: tlDistance}, 1.4);


    // section 9
    gsap.timeline({
      defaults: {autoAlpha: 0},
      scrollTrigger: {trigger: '#section-9'}
    }).from('#section-9 .thumbnail', {y: tlDistance, stagger: .1})
      .from('#section-9 .section-title', {y: tlDistance}, tlPosition)
      .from('#section-9 .paragraph', {y: tlDistance}, tlPosition)
      .from('#section-9 .btn-cta', {y: tlDistance}, tlPosition)
      .from('#section-9 .section-btn-vr', {y: tlDistance}, tlPosition);
  }
});

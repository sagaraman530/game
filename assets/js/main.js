!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".tg-preloader").delay(0).fadeOut(),
        e(".slider-active")
          .slick({
            autoplay: !1,
            autoplaySpeed: 1e4,
            dots: !1,
            fade: !0,
            arrows: !1,
            responsive: [
              { breakpoint: 767, settings: { dots: !1, arrows: !1 } },
            ],
          })
          .slickAnimation(),
        new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !1,
          live: !0,
        }).init(),
        e(".tg__animate-text").each(function () {
          var s = e(this),
            a = s.text().split(""),
            t = s.data("wait");
          t || (t = 0);
          var i = s.data("speed");
          i || (i = 4),
            (i /= 100),
            s.html("<em>321...</em>").addClass("ready"),
            s.waypoint({
              handler: function () {
                s.hasClass("stop") ||
                  (s.addClass("stop"),
                  setTimeout(function () {
                    s.text(""),
                      e.each(a, function (e, a) {
                        var t = document.createElement("span");
                        (t.textContent = a),
                          (t.style.animationDelay = e * i + "s"),
                          s.append(t);
                      });
                  }, t));
              },
              offset: "90%",
            });
        }),
        d();
    }),
    e(".tgmenu__wrap li.menu-item-has-children ul").length &&
      e(".tgmenu__wrap .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="plus-line"></span></div>'
      ),
    e(".tgmobile__menu").length)
  ) {
    var s,
      a,
      t,
      i,
      o,
      n = e(".tgmenu__wrap .tgmenu__main-menu").html();
    e(".tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer").append(n),
      e(".tgmobile__menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          e(this).toggleClass("open"), e(this).prev("ul").slideToggle(300);
        }
      ),
      e(".mobile-nav-toggler").on("click", function () {
        e("body").addClass("mobile-menu-visible");
      }),
      e(".tgmobile__menu-backdrop, .tgmobile__menu .close-btn").on(
        "click",
        function () {
          e("body").removeClass("mobile-menu-visible");
        }
      );
  }
  e("[data-background]").each(function () {
    e(this).css(
      "background-image",
      "url(" + e(this).attr("data-background") + ")"
    );
  }),
    e("[data-bg-color]").each(function () {
      e(this).css("background-color", e(this).attr("data-bg-color"));
    }),
    (s = e(window)),
    (a = 0),
    (i = (t = e("#sticky-header")).outerHeight() + 30),
    s.scroll(function () {
      var e = s.scrollTop();
      e >= i
        ? t.addClass("tg-sticky-menu")
        : (t.removeClass("tg-sticky-menu"), t.removeClass("sticky-menu__show")),
        t.hasClass("tg-sticky-menu") &&
          (e < a
            ? t.addClass("sticky-menu__show")
            : t.removeClass("sticky-menu__show")),
        (a = e);
    }),
    e(window).on("scroll", function () {
      245 > e(window).scrollTop()
        ? e(".scroll-to-target").removeClass("open")
        : e(".scroll-to-target").addClass("open");
    }),
    e(".scroll-to-target").length &&
      e(".scroll-to-target").on("click", function () {
        var s = e(this).attr("data-target");
        e("html, body").animate({ scrollTop: e(s).offset().top }, 0);
      }),
    e(".tgmenu__action .search").length &&
      (e(".tgmenu__action .search").on("click", function () {
        return e("body").addClass("search__active"), !1;
      }),
      e(".search__close").on("click", function () {
        e("body").removeClass("search__active");
      })),
    e(
      ".search a, .tg-btn-1, .side-toggle-icon, .mobile-nav-toggler, .dropdown-btn"
    ).on("click", () => new Audio("assets/audio/click.wav").play()),
    e(".search__close, .offCanvas__toggle, .offCanvas__overlay, .close-btn").on(
      "click",
      () => new Audio("assets/audio/remove.wav").play()
    ),
    e(".about__tab-wrap ul button").on("click", () =>
      new Audio("assets/audio/tab.mp3").play()
    ),
    e(".side-toggle-icon").on("click", function () {
      e("body").addClass("offCanvas__menu-visible");
    }),
    e(".offCanvas__overlay, .offCanvas__toggle").on("click", function () {
      e("body").removeClass("offCanvas__menu-visible");
    }),
    e("#another-element").on("click", function () {
      return e(".coupon__code-form").slideToggle(500), !1;
    });
  var l = e(".gallery-active");
  l.each(function (s) {
    var a = e(this);
    a.addClass("swiper-slider-" + s);
    var t = a.data("drag-size") ? a.data("drag-size") : 200,
      i = !!a.data("free-mode") && a.data("free-mode"),
      o = !a.data("loop") || a.data("loop"),
      n = a.data("slides-desktop") ? a.data("slides-desktop") : 1,
      l = a.data("slides-tablet") ? a.data("slides-tablet") : 1,
      r = a.data("slides-mobile") ? a.data("slides-mobile") : 1,
      d = a.data("space-between") ? a.data("space-between") : 1;
    new Swiper(".swiper-slider-" + s, {
      direction: "horizontal",
      loop: o,
      freeMode: i,
      centeredSlides: !0,
      spaceBetween: d,
      observer: !0,
      observeParents: !0,
      breakpoints: {
        1920: { slidesPerView: n },
        992: { slidesPerView: l },
        320: { slidesPerView: r },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: { el: ".swiper-scrollbar", draggable: !0, dragSize: t },
    });
  });
  var l = e(".project-active");
  l.each(function (s) {
    var a = e(this);
    a.addClass("swiper-slider-" + s);
    var t = a.data("drag-size") ? a.data("drag-size") : 24,
      i = !!a.data("free-mode") && a.data("free-mode"),
      o = !a.data("loop") || a.data("loop"),
      n = a.data("slides-desktop") ? a.data("slides-desktop") : 4,
      l = a.data("slides-laptop") ? a.data("slides-laptop") : 4,
      r = a.data("slides-tablet") ? a.data("slides-tablet") : 3,
      d = a.data("slides-small") ? a.data("slides-small") : 3,
      c = a.data("slides-mobile") ? a.data("slides-mobile") : 2,
      p = a.data("slides-xs") ? a.data("slides-xs") : 1.5,
      v = a.data("space-between") ? a.data("space-between") : 15;
    new Swiper(".swiper-slider-" + s, {
      direction: "horizontal",
      loop: o,
      freeMode: i,
      spaceBetween: v,
      observer: !0,
      observeParents: !0,
      breakpoints: {
        1920: { slidesPerView: n },
        1200: { slidesPerView: l },
        992: { slidesPerView: r },
        768: { slidesPerView: d },
        576: { slidesPerView: c, centeredSlides: !0, centeredSlidesBounds: !0 },
        0: { slidesPerView: p, centeredSlides: !0, centeredSlidesBounds: !0 },
      },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
      scrollbar: { el: ".swiper-scrollbar", draggable: !0, dragSize: t },
    });
  }),
    new Swiper(".trendingNft-active", {
      loop: !0,
      slidesPerView: 3,
      spaceBetween: 30,
      observer: !0,
      observeParents: !0,
      breakpoints: {
        1500: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    }),
    new Swiper(".streamers-active", {
      loop: !0,
      slidesPerView: 5,
      spaceBetween: 20,
      observer: !0,
      observeParents: !0,
      breakpoints: {
        1500: { slidesPerView: 5 },
        1200: { slidesPerView: 4 },
        992: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
        0: { slidesPerView: 1.5, centeredSlides: !0, centeredSlidesBounds: !0 },
      },
      pagination: { el: ".swiper-pagination", clickable: !0 },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    }),
    e(".brand-active").slick({
      dots: !1,
      infinite: !0,
      speed: 500,
      autoplay: !0,
      arrows: !1,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 5, slidesToScroll: 1, infinite: !0 },
        },
        { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        {
          breakpoint: 767,
          settings: { slidesToShow: 4, slidesToScroll: 1, arrows: !1 },
        },
        {
          breakpoint: 575,
          settings: { slidesToShow: 3, slidesToScroll: 1, arrows: !1 },
        },
      ],
    }),
    new Swiper(".testimonial-active", {
      loop: !0,
      slidesPerView: 1,
      spaceBetween: 20,
      observer: !0,
      observeParents: !0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    });
  var l = e(".deal-active");
  if (
    (l.each(function (s) {
      var a = e(this);
      a.addClass("swiper-slider-" + s);
      var t = a.data("drag-size") ? a.data("drag-size") : 200,
        i = !!a.data("free-mode") && a.data("free-mode"),
        o = !a.data("loop") || a.data("loop"),
        n = a.data("slides-desktop") ? a.data("slides-desktop") : 1,
        l = a.data("slides-tablet") ? a.data("slides-tablet") : 1,
        r = a.data("slides-mobile") ? a.data("slides-mobile") : 1,
        d = a.data("space-between") ? a.data("space-between") : 1;
      new Swiper(".swiper-slider-" + s, {
        direction: "horizontal",
        loop: o,
        freeMode: i,
        centeredSlides: !0,
        spaceBetween: d,
        observer: !0,
        observeParents: !0,
        breakpoints: {
          1920: { slidesPerView: n },
          992: { slidesPerView: l },
          320: { slidesPerView: r },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: { el: ".swiper-scrollbar", draggable: !0, dragSize: t },
      });
    }),
    window.IntersectionObserver)
  ) {
    let r = new IntersectionObserver(
      (e, s) => {
        e.forEach((e) => {
          e.isIntersecting &&
            (e.target.classList.add("active-footer"), s.unobserve(e.target));
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    document.querySelectorAll(".has-footer-animation").forEach((e) => {
      r.observe(e);
    });
  } else
    document.querySelectorAll(".has-footer-animation").forEach((e) => {
      e.classList.remove("has-footer-animation");
    });
  function d() {
    if (!jQuery(".tg__heading-wrapper").length) return;
    let e = document.querySelectorAll(".tg__heading-wrapper .tg-element-title");
    e.forEach((e) => {
      e.animation && (e.animation.progress(1).kill(), e.split.revert());
      var s = e.closest(".tg__heading-wrapper").className.split("animation-");
      "style4" != s[1] &&
        ((e.split = new SplitText(e, {
          type: "lines,words,chars",
          linesClass: "split-line",
        })),
        gsap.set(e, { perspective: 400 }),
        "style1" == s[1] &&
          gsap.set(e.split.chars, { opacity: 0, y: "90%", rotateX: "-40deg" }),
        "style2" == s[1] && gsap.set(e.split.chars, { opacity: 0, x: "50" }),
        "style3" == s[1] && gsap.set(e.split.chars, { opacity: 0 }),
        (e.animation = gsap.to(e.split.chars, {
          scrollTrigger: { trigger: e, start: "top 90%" },
          x: "0",
          y: "0",
          rotateX: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeOut,
          stagger: 0.02,
        })));
    });
  }
  e(".brand-active .col, .slider__brand-list li").on({
    mouseenter: function () {
      e(this).siblings().stop().fadeTo(300, 0.3);
    },
    mouseleave: function () {
      e(this).siblings().stop().fadeTo(300, 1);
    },
  }),
    e(".tg-svg").each(function () {
      var s = e(this),
        a = s.find(".svg-icon"),
        t = a.attr("id"),
        i = a.data("svg-icon"),
        o = new Vivus(t, { duration: 180, file: i });
      s.on("mouseenter", function () {
        o.reset().play();
      });
    }),
    !(function s() {
      if (e(".parallax").length)
        for (
          var a = document.querySelectorAll(".parallax"), t = 0;
          t < a.length;
          t++
        )
          new Parallax(a[t], {
            relativeInput: !0,
            hoverOnly: !0,
            selector: ".tg-layer",
            pointerEvents: !0,
          });
    })(),
    e(".odometer").appear(function (s) {
      e(".odometer").each(function () {
        var s = e(this).attr("data-count");
        e(this).html(s);
      });
    }),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
      zoom: {
        enabled: !1,
        duration: 300,
        opener: function (e) {
          return e.find("img");
        },
      },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".tg-jarallax").jarallax({ speed: 0.2 }),
    e("[data-countdown]").each(function () {
      var s = e(this),
        a = e(this).data("countdown");
      s.countdown(a, function (e) {
        s.html(
          e.strftime(
            '<div class="time-count day"><span>%D</span>Day</div><div class="time-count hour"><span>%H</span>hour</div><div class="time-count min"><span>%M</span>min</div><div class="time-count sec"><span>%S</span>sec</div>'
          )
        );
      });
    }),
    (o = e(".tg-parallax")).length &&
      o.each(function () {
        var s = e(this),
          a = s.data("scale"),
          t = s.data("orientation");
        new simpleParallax(s[0], {
          scale: a,
          orientation: t,
          delay: 1,
          overflow: !0,
          transition: "cubic-bezier(0,0,0,1)",
        });
      }),
    e("#slider-range").slider({
      range: !0,
      min: 10,
      max: 500,
      values: [80, 380],
      slide: function (s, a) {
        e("#amount").val("$" + a.values[0] + " - $" + a.values[1]);
      },
    }),
    e("#amount").val(
      "$" +
        e("#slider-range").slider("values", 0) +
        " - $" +
        e("#slider-range").slider("values", 1)
    ),
    e(".qtybutton-box span").on("click", function () {
      var s = e(this).parents(".num-block").find("input.in-num");
      if (e(this).hasClass("minus")) {
        var a = parseFloat(s.val()) - 1;
        (a = a < 1 ? 1 : a) < 2
          ? e(this).addClass("dis")
          : e(this).removeClass("dis"),
          s.val(a);
      } else {
        var a = parseFloat(s.val()) + 1;
        s.val(a),
          a > 1 &&
            e(this).parents(".num-block").find(".minus").removeClass("dis");
      }
      return s.change(), !1;
    }),
    e(".shop__details-model li").on("click", function (s) {
      e(this).siblings(".active").removeClass("active"),
        e(this).addClass("active"),
        s.preventDefault();
    }),
    e(".services__wrapper .services__item")
      .on("mouseover", function () {
        var s = e(this),
          a = s.parent(),
          t = e(".services__images", s.closest(".row")),
          i = s.index();
        a.find(".services__item").removeClass("active"),
          s.addClass("active"),
          t
            .find(".services__images-item")
            .removeClass("active")
            .eq(i)
            .addClass("active");
      })
      .on("mouseout", function () {
        var s = e(this),
          s = e(this),
          a = s.parent(),
          t = e(".services__images", s.closest(".row")),
          i = s.index();
        a.find(".active").length > 1 && s.removeClass("active"),
          t.find(".tab-pan.active").length > 1 &&
            t.find(".services__images-item").eq(i).removeClass("active");
      }),
    e(".faq__wrapper .accordion-item")
      .on("click", function () {
        var s = e(this),
          a = s.parent(),
          t = e(".services__images", s.closest(".row")),
          i = s.index();
        a.find(".services__item").removeClass("active"),
          s.addClass("active"),
          t
            .find(".services__images-item")
            .removeClass("active")
            .eq(i)
            .addClass("active");
      })
      .on("mouseout", function () {
        var s = e(this),
          s = e(this),
          a = s.parent(),
          t = e(".services__images", s.closest(".row")),
          i = s.index();
        a.find(".active").length > 1 && s.removeClass("active"),
          t.find(".tab-pan.active").length > 1 &&
            t.find(".services__images-item").eq(i).removeClass("active");
      }),
    768 > e(window).width() &&
      e(".roadMap__list li")
        .addClass("mobileView")
        .removeClass("tg__animate-text"),
    gsap.registerPlugin(ScrollTrigger, SplitText),
    gsap.config({ nullTargetWarn: !1, trialWarn: !1 }),
    ScrollTrigger.addEventListener("refresh", d);
})(jQuery);

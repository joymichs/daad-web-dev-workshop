$(document).ready(function() {

  /* trigger nav underline as I scroll */
    $(".js-home").waypoint(
      function(direction) {
        if (direction == "down") {
          $(".js-scroll-to-hero").addClass("js-underline");
          $(".js-scroll-to-about").removeClass("js-underline");
          $(".js-scroll-to-work").removeClass("js-underline");
          $(".js-scroll-to-contact").removeClass("js-underline");
        } else {
          $(".js-scroll-to-hero").addClass("js-underline");
          $(".js-scroll-to-about").removeClass("js-underline");
          $(".js-scroll-to-work").removeClass("js-underline");
          $(".js-scroll-to-contact").removeClass("js-underline");
        }
      },
      {
          offset: "-10px"
      }
    );

    $(".js-about").waypoint(
      function(direction) {
        if (direction == "down") {
          $(".js-scroll-to-about").addClass("js-underline");
          $(".js-scroll-to-hero").removeClass("js-underline");
          $(".js-scroll-to-work").removeClass("js-underline");
          $(".js-scroll-to-contact").removeClass("js-underline");
        } else {
          $(".js-scroll-to-about").addClass("js-underline");
          $(".js-scroll-to-hero").removeClass("js-underline");
          $(".js-scroll-to-work").removeClass("js-underline");
          $(".js-scroll-to-contact").removeClass("js-underline");
        }
      },
    );

    $(".js-works").waypoint(
      function(direction) {
        if (direction == "down") {
          $(".js-scroll-to-work").addClass("js-underline");
          $(".js-scroll-to-hero").removeClass("js-underline");
          $(".js-scroll-to-about").removeClass("js-underline");
          $(".js-scroll-to-contact").removeClass("js-underline");
        } else {
          $(".js-scroll-to-work").addClass("js-underline");
          $(".js-scroll-to-hero").removeClass("js-underline");
          $(".js-scroll-to-about").removeClass("js-underline");
          $(".js-scroll-to-contact").removeClass("js-underline");
        }
      },
    );

    $(".js-me").waypoint(
      function(direction) {
        if (direction == "down") {
          $(".js-scroll-to-contact").addClass("js-underline");
          $(".js-scroll-to-hero").removeClass("js-underline");
          $(".js-scroll-to-about").removeClass("js-underline");
          $(".js-scroll-to-work").removeClass("js-underline");
        } else {
          $(".js-scroll-to-contact").addClass("js-underline");
          $(".js-scroll-to-hero").removeClass("js-underline");
          $(".js-scroll-to-about").removeClass("js-underline");
          $(".js-scroll-to-work").removeClass("js-underline");
        }
      },
      {
          offset: "10px"
      }
    );

  /* scroll to navigation */

  $(".js-scroll-to-hero").click(function() {
    $("html, body").animate({ scrollTop: $(".js-home").offset().top }, 1000);
  });

  $(".js-scroll-to-about").click(function() {
    $("html, body").animate({ scrollTop: $(".js-about").offset().top }, 1000);
  });

  $(".js-scroll-to-work").click(function() {
    $("html, body").animate({ scrollTop: $(".js-works").offset().top }, 1000);
  });

  $(".js-scroll-to-contact").click(function() {
    $("html, body").animate({ scrollTop: $(".js-me").offset().top }, 1000);
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //age autoupdate
  $(".ager").ager({
    years_text: "Years Old",

    output: "%a %Y",

    day_first_suffixes: ["st", "nd", "rd"],

    day_global_suffixes: "th",

    text_months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    output_type: "html",
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Software Developer", "Support Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Software Developer", "Support Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

function date() {
  var year = new Date().getFullYear();
  return year;
}

document.getElementById("currentYear").textContent = date();

//contact form validation
function validate() {
  var name = document.contactfrm.name.value;
  var sub = document.contactfrm.sub.value;

  if (!isNaN(name)) {
    alert("Put only characters..");
  } else if (name.length >= 2 && name.length <= 20) {
    alert("'Valid Name'");
  } else {
    alert("Put 2 or more than 2 characters and less than 20 characters...");
  }

  if (!isNaN(sub)) {
    alert("Put only characters..");
  } else if (sub.length >= 3 && sub.length <= 10) {
    alert("'Valid Subject'");
  } else {
    alert("Put 3 or more than 3 characters and less than 10 characters...");
  }
}
//age autoupdate
(function ($) {
  function calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  $.fn.ager = function (params) {
    let defaults = {
      birth: null,
      day_first_suffixes: null,
      day_global_suffix: null,
      text_months: null,
      years_text: "",
      output: "%a %Y (%d/%m/%y)",
      output_type: "text",
    };
    let param = $.extend(defaults, params);

    this.each(function () {
      let birth = param.birth == null ? $(this).text() : param.birth;
      let age = calculateAge(new Date(birth));
      let d = birth.split("-")[2];
      let m = birth.split("-")[1];
      let y = birth.split("-")[0];

      if (
        (param.day_first_suffixes &&
          param.day_first_suffixes instanceof Array) ||
        param.day_global_suffix != null
      ) {
        let day = "";
        if (param.day_first_suffixes[d - 1])
          day = param.day_first_suffixes[d - 1];
        else if (param.day_global_suffix != null) day = param.day_global_suffix;
        param.output = param.output.replace(/%s/g, day);
      } else param.output = param.output.replace(/%s/g, "");
      if (
        param.text_months &&
        param.text_months instanceof Array &&
        param.text_months[m - 1]
      )
        param.output = param.output.replace(/%N/g, param.text_months[m - 1]);
      param.output = param.output
        .replace(/%D/g, d < 10 ? d % 10 : d)
        .replace(/%d/g, d)
        .replace(/%a/g, age)
        .replace(/%y/g, y)
        .replace(/%Y/g, param.years_text)
        .replace(/%m/g, m)
        .replace(/%M/g, m < 10 ? m % 10 : m);
      if (param.output_type == "html") $(this).html(param.output);
      else if (param.output_type == "text") $(this).text(param.output);
    });
    return this;
  };
})(jQuery);

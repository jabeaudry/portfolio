$(document).ready(function () {
  //
  //
  // VARIABLES
  //
  //

  //nav
  var menuIcon = document.getElementsByClassName("icon--menu");

  //colours
  var black = "#06080f";
  var white = "#f5f5f5";

  //sections
  var section1 = document.getElementById("section1");
  var section2 = document.getElementById("section2");
  var section3 = document.getElementById("section3");
  var section4 = document.getElementById("section4");
  var section5 = document.getElementById("section5");

  //section 1 components
  var picBackground = document.getElementsByClassName("picture-background");
  var myPic = document.getElementsByClassName("my-picture");
  var myShortDescription = document.getElementsByClassName("s1-intro");
  var myShortRightDescription =
    document.getElementsByClassName("s1-intro-right");
  var myShortSubDescription = document.getElementsByClassName("s1-sub-intro");
  var picDescription = document.getElementsByClassName("picture-txt");

  //section 2 components
  var s2p2 = document.getElementsByClassName("s2-p2");
  var intro2 = document.getElementsByClassName("intro-2");
  var intro2pt2 = document.getElementsByClassName("s2-intro-right");

  //section 3 components
  var s3p1 = document.getElementsByClassName("s3-p1");
  var s3p2 = document.getElementsByClassName("s3-p2");

  //section 4
  var section4Project = document.getElementsByClassName("s4-project1");
  var section4ProjectTop = document.getElementsByClassName("s4-project1-top");
  var githubButton = document.getElementsByClassName("github");
  var behanceButton = document.getElementsByClassName("behance");

  //
  //
  // VARIABLES (END)
  //
  //

  AOS.init(); //js scroll animation library

  //closes the navbar when you click on a link
  $(".nav-link").on("click", function () {
    var check = $(".main-navigation-toggle");
    check.prop("checked", !check.prop("checked"));
  });

  //animate()
  //animates the different sections
  function animate(selection) {
    if (selection == "section1") {
      //section 1 animation

      //nav animation

      //time variables
      s1_t1 = new TimelineMax();
      s1_t2 = new TimelineMax();
      s1_t3 = new TimelineMax();
      s1_t4 = new TimelineMax();
      s1_t5 = new TimelineMax();
      s1_t6 = new TimelineMax();
      s1_t7 = new TimelineMax();
      s1_t20 = new TimelineMax();

      //animation of rectangles

      s1_t7
        .fromTo(
          picBackground,
          0.4,
          { width: "0vw", top: "100vh", opacity: "0" },
          { opacity: "0.2", width: "1vw", top: "50vh", ease: Power2.EaseInOut }
        )
        .fromTo(
          picBackground,
          0.4,
          { opacity: "0.2", width: "1vw" },
          { opacity: "1", width: "21vw", ease: Power2.EaseInOut }
        )
        .fromTo(myPic, 0.81, { opacity: "0" }, { opacity: "1" });
      s1_t20.fromTo(menuIcon, 0.5, { stroke: white }, { stroke: black });
      s1_t3.fromTo(s2p2, 1.9, { opacity: "1" }, { opacity: "1" });
      console.log("1");

      //section 2 animation
    }
    else if (selection == "section2") {
      //time variables

      s1_t8 = new TimelineMax();
      s1_t9 = new TimelineMax();
      s1_t10 = new TimelineMax();
      s1_t11 = new TimelineMax();
      s1_t12 = new TimelineMax();
      s1_t13 = new TimelineMax();
      s1_t14 = new TimelineMax();
      s2_t20 = new TimelineMax();

      s1_t10.fromTo(
        s3p1,
        1,
        { left: "6vw", opacity: "1" },
        { left: "2vw", opacity: "0" }
      );
      s1_t11.fromTo(
        s3p2,
        1,
        { right: "6vw", opacity: "1" },
        { right: "2vw", opacity: "0" }
      );
      s1_t14.fromTo(
        intro2,
        1,
        { opacity: "0", top: "29vh" },
        { opacity: "1", top: "37vh" }
      );
      s1_t13.fromTo(
        intro2pt2,
        1,
        { opacity: "0", top: "13vh" },
        { opacity: "1", top: "8vh" }
      );
      s1_t8.fromTo(s2p2, 0.9, { opacity: "1" }, { opacity: "1" });
      console.log("2");
      s2_t20
        .fromTo(menuIcon, 0.5, { stroke: black }, { stroke: white })
        .fromTo(picBackground, 0.3, { opacity: "1" }, { opacity: "0" });
    }

    else if (selection == "section3") {
      s3_t1 = new TimelineMax();
      s3_t2 = new TimelineMax();
      s3_t3 = new TimelineMax();

      s3_t1.fromTo(
        s3p1,
        1,
        { left: "2vw", opacity: "0" },
        { left: "6vw", opacity: "1" }
      );
      s3_t2.fromTo(
        s3p2,
        1,
        { right: "2vw", opacity: "0" },
        { right: "6vw", opacity: "1" }
      );
      s3_t3.fromTo(section4Project, 1, { top: "0" }, { top: "-5vh" });
    }

    if (selection == "section4") {
      s4_t1 = new TimelineMax();
      s4_t2 = new TimelineMax();
      s4_t5 = new TimelineMax();
      s4_t6 = new TimelineMax();

      s4_t1.fromTo(
        s3p1,
        1,
        { left: "6vw", opacity: "1" },
        { left: "2vw", opacity: "0" }
      );
      s4_t2.fromTo(
        s3p2,
        1,
        { right: "6vw", opacity: "1" },
        { right: "2vw", opacity: "0" }
      );
      s4_t5.fromTo(section4Project, 0.8, { top:"-5vh", height: "50%" }, { top:"0",height: "100%" });
      s4_t6.fromTo(section4ProjectTop, 0.5, { opacity: "0" }, { opacity: "0" })
      .fromTo(section4ProjectTop, 0.8, { opacity: "0" }, { opacity: "1" });
    }
  }


  //section 4 clickable div links
  $(".github").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

  $(".behance").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

  //Observer API
  //runs the Animate() fn when section is being viewed
  const sectionViewed = document.querySelectorAll(".dot");
  var previous;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.intersectionRatio > 0 &&
          previous !== entry.target.parentElement.getAttribute("id")
        ) {
          animate(entry.target.parentElement.getAttribute("id"));
          console.log("entry");
          previous = entry.target.parentElement.getAttribute("id");
        } else {
          console.log("exit");
        }
      });
    },
    { threshold: 1 }
  );

  //runs through the array of sections
  sectionViewed.forEach((image) => {
    observer.observe(image);
  });
});

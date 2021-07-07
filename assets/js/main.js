


$(document).ready(function() {

//
//
// VARIABLES
//
//

//rectangles
var redBar = document.getElementById("r1");
var blueBar = document.getElementById("b1");
var yellowBar = document.getElementById("y1");
var whiteBarOne = document.getElementById("w1");
var whiteBarTwo = document.getElementById("w2");
var whiteBarThree = document.getElementById("w3");

var redBar2 = document.getElementById("r1-s2");
var blueBar2 = document.getElementById("b1-s2");
var yellowBar2 = document.getElementById("y1-s2");
var whiteBarOne2 = document.getElementById("w1-s2");
var whiteBarTwo2 = document.getElementById("w2-s2");
var whiteBarThree2 = document.getElementById("w3-s2");


//nav
var menuIcon = document.getElementsByClassName("icon--menu");

//colours
var black= "#06080f";
var white= "#f5f5f5";
var red= "#cc2936";
var yellow= "#ffb800";
var blue= "#2364aa";

//picture
var picBackground = document.getElementsByClassName("picture-background");
var myPic = document.getElementsByClassName("my-picture");
var myShortDescription = document.getElementsByClassName("s1-intro");
var myShortSubDescription = document.getElementsByClassName("s1-sub-intro");
var picDescription = document.getElementsByClassName("picture-txt");
var intro2 = document.getElementsByClassName("intro-2");

//sections 
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var section5 = document.getElementById("section5");



//
//
// VARIABLES (END)
//
//


 AOS.init();  //js scroll animation 


//fit text
textFit(document.getElementsByClassName("s1-intro"));
textFit(document.getElementsByClassName("s1-sub-intro"));


//animate()
//animates the different sections
function animate(selection){
if(selection == "section1"){

   //section 1 animation

      //nav animation
      

      //time variables
      s1_t1 = new TimelineMax;
      s1_t2 = new TimelineMax;
      s1_t3 = new TimelineMax;
      s1_t4 = new TimelineMax;
      s1_t5 = new TimelineMax;
      s1_t6 = new TimelineMax;
      s1_t7 = new TimelineMax;
      s1_t20 = new TimelineMax;

      //animation of rectangles
      
      s1_t6.fromTo(whiteBarThree, 1, {bottom: "-50vw", opacity: "0", top: "",backgroundColor: white},{bottom: "0", opacity: "1",top: "",backgroundColor: white});
      s1_t5.fromTo(whiteBarTwo, 0.8, {bottom: "-50vw", opacity: "0", top: "",backgroundColor: white},{bottom: "0", opacity: "1",top: "",backgroundColor: white});
      s1_t4.fromTo(whiteBarOne, 0.7, {bottom: "-50vw", opacity: "0", top: "",backgroundColor: white},{bottom: "0", opacity: "1",top: "",backgroundColor: white})
      .fromTo(picDescription, 1, {opacity: "0"}, {opacity: "1"});
      s1_t3.fromTo(redBar, 0.6, {bottom: "-50vw", opacity: "0", top: ""},{bottom: "0", opacity: "1",top: ""});
      s1_t2.fromTo(yellowBar, 0.5, {bottom: "-50vw", opacity: "0", top: ""},{bottom: "0", opacity: "1",top: ""})
      .fromTo(myShortDescription, 1.0, {opacity: "0"}, {opacity: "1"})
      s1_t2.fromTo(myShortSubDescription, 0.6, {opacity: "0"}, {opacity: "1"});
      s1_t1.fromTo(blueBar, 0.5, {bottom: "-50vw", opacity: "0", top: ""},{bottom: "0", opacity: "1",top: ""})
      s1_t7.fromTo(picBackground, 0.4,{width: "3vw", top: "100vh"},{width: "4vw", top: "50vh", ease: Power2.EaseInOut})
      .fromTo(picBackground,0.4, {width: "3vw"}, {width: "21vw", ease: Power2.EaseInOut})
      .fromTo(myPic, 0.81, {opacity: "0"}, {opacity: "1"});
      s1_t20.fromTo(menuIcon, 0.5, {stroke: black}, {stroke: white});
      console.log("1");
  
    
//section 2 animation

}
if(selection == "section2"){
      //time variables
      
      s1_t8 = new TimelineMax;
      s1_t9 = new TimelineMax;
      s1_t10 = new TimelineMax;
      s1_t11 = new TimelineMax;
      s1_t12= new TimelineMax;
      s1_t13 = new TimelineMax;
      s1_t14 = new TimelineMax;
      s2_t20 = new TimelineMax;

	    s1_t13.fromTo(whiteBarThree2, 1, {opacity: "1", top: "0"},{top: "0vh", opacity: "1", backgroundColor: black});
      s1_t12.fromTo(whiteBarTwo2, 0.8, {opacity: "1", top: "0"},{top: "0vh", opacity: "1", backgroundColor: black});
      s1_t11.fromTo(whiteBarOne2, 0.7, {opacity: "1", top: "0"},{top: "0vh", opacity: "1", backgroundColor: black});
      s1_t10.fromTo(redBar2, 0.6, {opacity: "1", top: "-30vh"},{top: "0vh", opacity: "1"});
      s1_t9.fromTo(yellowBar2, 0.5, {opacity: "1", top: "-30vh"},{top: "0vh", opacity: "1"});
      s1_t8.fromTo(blueBar2, 0.5, {opacity: "1",top: "-30vh",},{top: "0vh", opacity: "1.0"});
      s1_t14.fromTo(intro2, 1.2, {opacity: "0", top: "1vh"},{opacity: "1", top: "14vh"} );
     console.log("2");
     s1_t20.fromTo(menuIcon, 0.5, {stroke: white}, {stroke: black});
   }
   
}

//Observer API
//runs the Animate() fn when section is being viewed
 const sectionViewed = document.querySelectorAll(".dot");
 var previous; 
 
 observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
  
     if (entry.intersectionRatio > 0 && (previous !== entry.target.parentElement.getAttribute( 'id' ))) {
       
      animate(entry.target.parentElement.getAttribute( 'id' ));
      console.log("entry");
      previous = entry.target.parentElement.getAttribute( 'id' );
     } else   {
       
       console.log("exit"); 
        
     }
     
   });
 }, {threshold: 1}); 
 
 //runs through the array of sections
 sectionViewed.forEach(image => {
   observer.observe(image);
 });
 
})




   




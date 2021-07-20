


$(document).ready(function() {

//
//
// VARIABLES
//
//


//nav
var menuIcon = document.getElementsByClassName("icon--menu");

//colours
var black= "#06080f";
var white= "#f5f5f5";


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
var myShortRightDescription = document.getElementsByClassName("s1-intro-right");
var myShortSubDescription = document.getElementsByClassName("s1-sub-intro");
var picDescription = document.getElementsByClassName("picture-txt");


//section 2 components
var s2p2 = document.getElementsByClassName("s2-p2");
var intro2 = document.getElementsByClassName("intro-2");
var intro2pt2 = document.getElementsByClassName("s2-intro-right");

//
//
// VARIABLES (END)
//
//


 AOS.init();  //js scroll animation library


//closes the navbar when you click on a link
$('.nav-link').on('click', function(){
 var check = $(".main-navigation-toggle");
  check.prop("checked", !check.prop("checked"));
}); 




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
      
      
      
     
      s1_t7.fromTo(picBackground, 0.4,{width: "0vw", top: "100vh", opacity: "0"},{opacity: "0.2", width: "1vw", top: "50vh", ease: Power2.EaseInOut})
      .fromTo(picBackground,0.4, {opacity: "0.2", width: "1vw"}, {opacity: "1", width: "21vw", ease: Power2.EaseInOut})
      .fromTo(myPic, 0.81, {opacity: "0"}, {opacity: "1"});
      s1_t20.fromTo(menuIcon, 0.5, {stroke: white}, {stroke: black});
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

    s1_t14.fromTo(intro2, 1.2, {opacity: "0", top: "2vh"},{opacity: "1", top: "37vh"} );
    s1_t13.fromTo(intro2pt2, 1.2, {opacity: "0", top: "15vh"},{opacity: "1", top: "8vh"} );
    s1_t8.fromTo(s2p2, 1.2, {opacity: "0"}, {opacity:"1"});
     console.log("2");
     s2_t20.fromTo(menuIcon, 0.5, {stroke: black}, {stroke: white})
     .fromTo(picBackground, 0.3, {opacity: "1"}, {opacity: "0"});
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




   




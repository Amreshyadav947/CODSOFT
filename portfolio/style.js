var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -5 + "px"
    crsr.style.top = dets.y -29+ "px"
    blur.style.left = dets.x -100 +"px"
    blur.style.top = dets.y -100 +"px"
})

var h4all = document.querySelectorAll("#na2 h3 ");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 1.5;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #1111";
    crsr.style.backgroundColor = "transparent";
  });
});

var tl = gsap.timeline()

tl.from("#nav h3",{
  y:-20,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.3
})

tl.from("#nav h2",{
  y:-20,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.1
})

tl.from("#nav h1",{
  y:-20,
  opacity:0,
  duration:1,
  delay:0.5,
  
})


  var options = {
  strings: ['Amresh Yadav', 'UI/UX Desiner', 'Web Devloper', 'Full Stack Developer','GSAP Animation','Fronten Developer','Backend Developer'],
  typeSpeed: 150,
  backSpeed:100,
  loop:true
};

var typed = new Typed('.typing', options)
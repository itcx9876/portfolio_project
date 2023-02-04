AOS.init({
    duration:1000,
    easing:'ease-in-out',
    once:true,
    mirror:false
});
// Added Slider for testimonials
const config={
    speed:2000,
    loop:true,
    autoplay:{
        delay:500,
        disabledOnIteraction:false
    },
    pagination:{
        el: ".swiper-pagination",
    }
}
new Swiper('.testimonials-slider',config)

new Typed('.typed',{
    strings: ['adcsacas,acac','asdsad','zzz'],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:2000
})

new PureCounter();
function add_progress_width(el){

}
function handle_waypoint(){
    const progress_bars=document.getElementsByClassName('progress-bar')
    // console.log(progress_bars[3].getAttribute("aria-valuenow"))
    for (var i=0;i<progress_bars.length;i++){
        const value=progress_bars[i].getAttribute("aria-valuenow")
        console.log(value,"this is value")
        progress_bars[i].style.width=value+"%"
    }
   
}
const skills_element=document.getElementsByClassName("skills-content")[0]
if(skills_element){
    new Waypoint({
        element:skills_element,
        handler:handle_waypoint
    })
}


window.addEventListener("load",()=>{
    const portfolio=document.querySelector('.portfolio-container')
console.log(portfolio)
var iso = new Isotope( portfolio, {
    // options
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  const filter_btn=document.querySelectorAll('.portfolio-filters li')
  console.log(filter_btn)
  filter_btn.forEach(el=>{
    el.addEventListener('click',function(e){
        e.preventDefault();
            iso.arrange({
                filter:el.getAttribute('data-filter')
            })
            // iso.on
          })
  })
  
})
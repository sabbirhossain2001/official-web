const openBtn = document.querySelector('.open-btn');
const navlist = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click',()=>{
    navlist.classList.add('show-nav');
    
   
});
closeBtn.addEventListener('click',()=>{
    navlist.classList.remove('show-nav');
    
   
});
const navBar = document.querySelector('.nav');
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight  > navBarHeight + 200){
        navBar.classList.add('fixed-nav');
    }
    else{
        navBar.classList.remove('fixed-nav');
    };
});
// slick slider control
$(document).ready(function () {
  $('.hero-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
//hero section animation

//-----------scroll animations-----------
window.addEventListener('scroll',animations);
function animations(){
//==================our soluatins animations============
const singleSoluation = document.querySelectorAll(".single-solution");
singleSoluation.forEach(function(item){
    const singleSoluationItem = item.getBoundingClientRect().top;
    const soluationScreen = window.innerHeight /1.2;
    if(singleSoluationItem < soluationScreen){
        item.classList.add('soluatins-item-active');
    }
    else{
        item.classList.remove('soluatins-item-active');
    }
})
//hero section animation
const heroAnimation = document.querySelectorAll(".hero-item");
heroAnimation.forEach(function(item){
    const featureItem = item.getBoundingClientRect().top;
    const featurenScreen = window.innerHeight;
    if(featureItem < featurenScreen){
        item.classList.add('hero-item-active');
    }
    else{
        item.classList.remove('hero-item-active');
    }
})
//==================Feature section animations============
const featureAnimation = document.querySelectorAll(".feature-animation");
featureAnimation.forEach(function(item){
    const featureItem = item.getBoundingClientRect().top;
    const featurenScreen = window.innerHeight /1.2;
    if(featureItem < featurenScreen){
        item.classList.add('feature-animation-active');
    }
    else{
        item.classList.remove('feature-animation-active');
    }
})
//===============servics section animation==============
const services = document.querySelectorAll(".single-service");
services.forEach(function(item){
    const singleServicesItem = item.getBoundingClientRect().top;
    const ServicesScreen = window.innerHeight /1.2;
    if(singleServicesItem < ServicesScreen){
        item.classList.add('services-item-active');
    }
    else{
        item.classList.remove('services-item-active');
    }
})
//===============servics section animation==============
const recentProject = document.querySelectorAll(".single-project");
recentProject.forEach(function(item){
    const recentProjectItem = item.getBoundingClientRect().top;
    const recentProjectScreen = window.innerHeight /1.2;
    if(recentProjectItem < recentProjectScreen){
        item.classList.add('single-project-active');
    }
    else{
        item.classList.remove('single-project-active');
    }
})
//===============EC Member section animation==============
const ecMembers = document.querySelectorAll(".testimonials-single-item");
ecMembers.forEach(function(item){
    const recentProjectItem = item.getBoundingClientRect().top;
    const recentProjectScreen = window.innerHeight /1.2;
    if(recentProjectItem < recentProjectScreen){
        item.classList.add('testimonials-single-item-active');
    }
    else{
        item.classList.remove('testimonials-single-item-active');
    }
})
//===============Footer Animations================
const footerSingleItem = document.querySelectorAll(".footer-single-item");
footerSingleItem.forEach(function(box){
    const projectBoxPossion = box.getBoundingClientRect().top;
    
    const projectscreenPossition = window.innerHeight / 1.2;
    
    if(projectBoxPossion < projectscreenPossition){
        box.classList.add("footer-single-item-active");
    }
    else{
        box.classList.remove("footer-single-item-active");
    }
});
}
//tab-section 
 const tabButtons = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          tabButtons.forEach((btn) => btn.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          button.classList.add("active");
          document.getElementById(button.dataset.tab).classList.add("active");
        });
      });
var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<button class="bottomToTop" ><i class="far fa-arrow-up"></i></button>',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();

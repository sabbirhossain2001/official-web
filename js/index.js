const notices = [
        {
          img: "../images/software.gif",
          title: "Notice 1 - School Closure",
          short: "School will be closed on July 16.",
          full: "Due to a national holiday, the school will remain closed on July 16. Classes will resume the next day.",
        },
        {
          img: "../images/girl_3.gif",
          title: "Notice 2 - Exam Routine",
          short: "Exam schedule has been published.",
          full: "The exam routine for mid-terms has been published. Please collect it from the notice board or download it from the website.",
        },
        {
          img: "../images/ecommerce (1).gif",
          title: "Notice 3 - Admission Open",
          short: "Admission for 2025 is now open.",
          full: "We are accepting applications for the new academic year 2025. Visit the school office or website to apply.",
        },
        
      ];
const openBtn = document.querySelector('.open-btn');
const navlist = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click',()=>{
    navlist.classList.add('show-nav');
    
   
});
closeBtn.addEventListener('click',()=>{
    navlist.classList.remove('show-nav');
    
   
});

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("ul.nav-list > li").forEach(li => {
    const parentLink = li.querySelector(".nav-link.desktop-item") || li.querySelector(".nav-link");
    const submenuLinks = li.querySelectorAll("ul li a");

    let isMatched = false;

    submenuLinks.forEach(sub => {
      const subHref = sub.getAttribute("href");
      if (subHref && subHref === currentPage) {
        isMatched = true;
      }
    });

    // Highlight parent if any sublink matches
    if (isMatched && parentLink) {
      parentLink.classList.add("active");
    }

    // Also highlight if this is a regular top-level link
    if (!isMatched && parentLink && parentLink.getAttribute("href") === currentPage) {
      parentLink.classList.add("active");
    }
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
   const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show button after scrolling down 200px
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    // Scroll smoothly to top on button click
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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
// policy tab section 
const policytabButtons = document.querySelectorAll(".policy-tab-btn");
const policytabPanels = document.querySelectorAll(".policy-tab-panel");

      policytabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active from all
          policytabButtons.forEach((btn) => btn.classList.remove("active-tab"));
          policytabPanels.forEach((panel) => panel.classList.remove("active-panel"));

          // Add active to selected
          button.classList.add("active-tab");
          const targetId = button.getAttribute("data-target");
          document.getElementById(targetId).classList.add("active-panel");
        });
      });

// Load Notice Cards
      const noticeList = document.getElementById("noticeList");
      notices.forEach((notice, index) => {
        const card = document.createElement("div");
        card.className = "notice-item";
        card.innerHTML = `
        <div class="notice-img">
          <img src="${notice.img}" alt="noticeImg" />
        </div>
        <div class="notice-content">
          <p>${notice.short}</p>
          <button class="notice-btn" onclick="openModal(${index})">Read More</button>
        </div>
      `;
        noticeList.appendChild(card);
      });

      // Modal Functions
      function openModal(index) {
        const notice = notices[index];
        document.getElementById("modalImage").src = notice.img;
        document.getElementById("modalTitle").textContent = notice.title;
        document.getElementById("modalText").textContent = notice.full;
        document.getElementById("modal").style.display = "flex";
      }

      function closeModal() {
        document.getElementById("modal").style.display = "none";
      }

      // Close modal on outside click
      window.onclick = function (event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
          closeModal();
        }
      };
    

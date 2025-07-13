const reviews = [
    {
        id:1,
        name:"Md Sabbir Hossain",
        job:"javascript developer",
        img:"./images/dummy-user.png",
        text:"I highly recommend Cellsweb IT Solutions Ltd for any kind of IT service.Because The provided me a service which I think one of the best on the market.I really appreciate their work."
        
    },
    {
        id:2,
        name:"saluddin",
        job:"web developer",
        img:"./images/dummy-user.png",
        text:"I highly recommend Cellsweb IT Solutions Ltd for any kind of IT service.Because The provided me a service which I think one of the best on the market.I really appreciate their work."
        
    },
    {
        id:3,
        name:"ashik seak",
        job:"php developer",
        img:"./images/dummy-user.png",
        text:"I highly recommend Cellsweb IT Solutions Ltd for any kind of IT service.Because The provided me a service which I think one of the best on the market.I really appreciate their work. "
         
    },
    {
        id:4,
        name:"Arian reaid",
        job:"ui/ux designer",
        img:"./images/dummy-user.png",
        text:"I highly recommend Cellsweb IT Solutions Ltd for any kind of IT service.Because The provided me a service which I think one of the best on the market.I really appreciate their work. "
        
    },
    {
        id:5,
        name:"Al-reaid ",
        job:"software developer",
        img:"./images/dummy-user.png",
        text:"I highly recommend Cellsweb IT Solutions Ltd for any kind of IT service.Because The provided me a service which I think one of the best on the market.I really appreciate their work."
    }
];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentItem = 0;
window.addEventListener('DOMContentLoaded',function(){
    showPerson();
    
});
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

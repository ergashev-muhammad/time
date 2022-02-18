const elCoupleFirst = document.querySelector(".couple__board__icon--first")
const elCoupleSecond = document.querySelector(".couple__board__icon--second")

console.log(elCoupleFirst.style);



setInterval(() => {
    setTimeout(() => {
        elCoupleFirst.style.marginLeft = "30"
        elCoupleSecond.style.marginRight = "30"
        
    }, 1000);
    
    setTimeout(() => {
        elCoupleFirst.style.marginLeft = "70"
        elCoupleSecond.style.marginRight = "70"
        
    }, 2000);
    
    setTimeout(() => {
        elCoupleFirst.style.marginLeft = "120"
        elCoupleSecond.style.marginRight = "120"
        
    }, 3000);
    
    setTimeout(() => {
        elCoupleFirst.style.marginLeft = "170"
        elCoupleSecond.style.marginRight = "170"
        
    }, 4000);
    
    setTimeout(() => {
        elCoupleFirst.style.marginLeft = "auto"
        elCoupleSecond.style.marginRight = "auto"    
    }, 5000);  
}, 5000);








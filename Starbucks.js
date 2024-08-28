let scrollContainer = document.querySelector(".gallery-container");
let backBtn = document.querySelector("#backbtn");
let nextBtn = document.querySelector("#nextbtn");
let backBtni = document.querySelector("#backbtn i");
let nextBtni = document.querySelector("#nextbtn i");


nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1260;
    if(scrollContainer.scrollLeft >= 1260){
        nextBtn.classList.add("active");
        nextBtn.style.backgroundColor = "rgba(255, 255, 255, 0.651)"
        nextBtn.style.cursor = "default"
        nextBtn.style.color = "#00754a80"
        nextBtni.style.marginLeft = "0px"
    }else {
        nextBtn.classList.remove("active");
        backBtn.style.backgroundColor = "rgba(255, 255, 255)"
        backBtn.style.color = "#00754a"
        backBtn.style.cursor = "pointer"
    }
    console.log("next", scrollContainer.scrollLeft)
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1260;
    if(scrollContainer.scrollLeft <= 1260){
        backBtn.classList.add("active");
        backBtn.style.backgroundColor = "rgba(255, 255, 255, 0.651)"
        backBtn.style.cursor = "default"
        backBtn.style.color = "#00754a80"
        backBtni.style.marginRight = "0px"
    }else {
        nextBtn.classList.remove("active");
        nextBtn.style.backgroundColor = "rgba(255, 255, 255)"
        nextBtn.style.color = "#00754a"
        nextBtn.style.cursor = "pointer"
    }
    console.log("back", scrollContainer.scrollLeft)
});



// ------------------------------- BTN 2 ----------------------------


let scrollContainer2 = document.querySelector("#second-line");
let backBtn2 = document.querySelector("#backbtn-2");
let nextBtn2 = document.querySelector("#nextbtn-2");
let backBtni2 = document.querySelector("#backbtn-2 i");
let nextBtni2 = document.querySelector("#nextbtn-2 i");


nextBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 450;
    if(scrollContainer2.scrollLeft >= 450){
        nextBtn2.classList.add("active");
        nextBtn2.style.backgroundColor = "rgba(255, 255, 255, 0.651)"
        nextBtn2.style.cursor = "default"
        nextBtn2.style.color = "#00754a80"
        nextBtni2.style.marginLeft = "0px"
    }else {
        nextBtn2.classList.remove("active");
        backBtn2.style.backgroundColor = "rgba(255, 255, 255)"
        backBtn2.style.color = "#00754a"
        backBtn2.style.cursor = "pointer"
    }
    console.log("next", scrollContainer2.scrollLeft)
});

backBtn2.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 450;
    if(scrollContainer2.scrollLeft <= 450){
        backBtn2.classList.add("active");
        backBtn2.style.backgroundColor = "rgba(255, 255, 255, 0.651)"
        backBtn2.style.cursor = "default"
        backBtn2.style.color = "#00754a80"
        backBtni2.style.marginRight = "0px"
    }else {
        nextBtn2.classList.remove("active");
        nextBtn2.style.backgroundColor = "rgba(255, 255, 255)"
        nextBtn2.style.color = "#00754a"
        nextBtn2.style.cursor = "pointer"
    }
    console.log("back", scrollContainer2.scrollLeft)
});
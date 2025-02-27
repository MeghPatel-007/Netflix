let btns = document.querySelectorAll(".button");


btns.forEach((btn) => {
    let box = "close";
    btn.addEventListener("click",() => {
        let faqbox = btn.closest(".faqbox");
        let cross = faqbox.querySelector(".que > svg");
        let ans = faqbox.querySelector(".ans");
            if(box === "close"){
                ans.classList.add("open");
                ans.classList.remove("close");
                cross.classList.add("rotate");
                cross.classList.remove("unrotate");
                box = "open";
            }else{
                ans.classList.add("close");
                ans.classList.remove("open")
                cross.classList.add("unrotate");
                cross.classList.remove("rotate");
                box = "close";
            }
    });
    
});

let scrollController = document.querySelector(".gallery");
            let backBtn = document.getElementById("backBtn");
            let frontBtn = document.getElementById("frontBtn");
            let index = 0;
    
            scrollController.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollController.scrollLeft += evt.deltaY;
            })

            frontBtn.addEventListener("click", () => {
                scrollController.style.scrollBehavior = "smooth";
                scrollController.scrollLeft += 300
            })
            backBtn.addEventListener("click", () => {
                scrollController.style.scrollBehavior = "smooth";
                scrollController.scrollLeft -= 300
            })

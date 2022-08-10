const anchors = document.querySelectorAll('a[href*= "#"]')


for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const block_id = anchor.getAttribute('href')
        document.querySelector('' + block_id).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}
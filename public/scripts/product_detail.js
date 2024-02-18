document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".product-thumbnails img");
    const mainImage = document.getElementById("main-image");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("mouseover", function() {
            const newSrc = this.getAttribute("data-src");
            mainImage.setAttribute("src", newSrc);
        });
    });
});

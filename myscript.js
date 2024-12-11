document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("nav ul li a");
    const texts = document.querySelectorAll(".language-text");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const id = item.id + "-text";

            texts.forEach((text) => {
                if (text.id === id) {
                    text.style.display = "block";
                } else {
                    text.style.display = "none";
                }
            });
        });
    });
});

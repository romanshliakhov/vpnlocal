// Select
let selects = document.querySelectorAll('.select');

let selectScript = function (select) {
    select.forEach((item) => {
        const selectCurrent = item.querySelector(".select__current");
        item.addEventListener("click", (event) => {
            const el = event.target.dataset.choice;
            const text = event.target.innerText;
            if (el === "choosen" && selectCurrent.innerHTML !== text) {
                selectCurrent.innerText = text;
            }
            item.classList.toggle("is-active");
        });
        document.addEventListener("click", function (event) {
            if (!item.contains(event.target)) {
                item.classList.remove("is-active");
            }
        });
    });
}

selectScript(selects);

window.addEventListener("DOMContentLoaded", () => {
});

window.addEventListener("resize", () => {

});

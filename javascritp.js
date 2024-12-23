document.addEventListener("DOMContentLoaded", () => {
    const switchInput = document.querySelector(".switch input");

    switchInput.addEventListener("change", () => {
        if (switchInput.checked) {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "#fff";
        }
         else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
        }
    });
});

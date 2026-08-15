let button = document.getElementById("btn");
let counter = 0;

button.addEventListener("click", function() {
    counter++;
    button.innerHTML = `${counter}`;
})


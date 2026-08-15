let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function () {
    RotateButtons();
})

function RotateButtons() {
    let btnsOrder = [1, 2, 3, 6, 9, 8, 7, 4];
    let values = btnsOrder.map(i => document.getElementById("btn" + i).innerHTML);
    
    values.unshift(values.pop());
    
    btnsOrder.forEach((i, index) => {
        document.getElementById("btn" + i).innerHTML = values[index];
    });
}
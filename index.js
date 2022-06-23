let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el");
console.log(saveEl);

function save() {
    let countStr = count + "  "
    console.log(count)
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}

const inputBox = document.getElementById("input-text");
const list = document.querySelector(".list");

function AddTask(){
    if(inputBox.value === '') {
        alert("Task field is empty, please fill it to add tasks!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for "×" symbol
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save data after removing an item
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data") || ""; // Set to empty string if no data is present
}

showTask();

const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-Container");

function addTask(){
    if(inputBox.value === ''){
        alert("You need to enter some task before adding!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dataSave();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        dataSave();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        dataSave();
    }
}, false);

function dataSave(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
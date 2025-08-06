const Input = document.querySelector("#input");
const listContainer = document.querySelector(".list-container");

let Addtask = () => {
    if(Input.value === ""){
        document.querySelector(".para").style.display = "block"
         setTimeout(() => {
            document.querySelector(".para").style.display = "none"
        } , 2000)
           }
    else{
        let li = document.createElement('li');
        li.innerHTML = Input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
       
    }
    Input.value = "";
    saveData();
}

document.addEventListener('keydown' , function (e) {
    if(e.key === "Enter"){
         Addtask();
    }
})

listContainer.addEventListener('click' , function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
} , false);


function saveData () {
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask () {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




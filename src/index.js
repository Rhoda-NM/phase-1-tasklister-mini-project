document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("new-task-description");
    const submit = document.getElementById("submit");
    const listContainer = document.getElementById("tasks");

    submit.addEventListener('click', addTask);

    function addTask() {
        if(inputBox.value == "") {
            alert("Add task!");
        }
        else{
            let li = document.createElement("li")
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li)
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span)
        }
        inputBox.value = "";
    }
    listContainer.addEventListener('click', function(event) {
        //console.log(event.target.tagName);
    if(event.target.tagName=== "LI") {
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    })

});



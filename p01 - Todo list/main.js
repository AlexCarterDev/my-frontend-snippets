var taskList = document.querySelector(".todo .task-container");

var CLS_MATERIAL_ICONS = "material-icons";
var CLS_DESCRIPTION = "description";
var CLS_BTN_REMOVE = "btn-remove";
var CLS_TASK = "task";

function createNewTask(text) {
    var task = document.createElement("li");
    task.className = CLS_TASK;

    var dragBtn = document.createElement("i");
    dragBtn.className = CLS_MATERIAL_ICONS;
    dragBtn.innerHTML = "drag_indicator";

    var checkBox = document.createElement("i");
    checkBox.className = CLS_MATERIAL_ICONS;
    checkBox.innerHTML = "check_box_outline_blank";

    var descr = document.createElement("span");
    descr.className = CLS_DESCRIPTION;
    descr.innerHTML = text;

    var removeBtn = document.createElement("i");
    removeBtn.className = CLS_MATERIAL_ICONS + " " + CLS_BTN_REMOVE;
    removeBtn.innerHTML = "remove_circle";

    task.appendChild(dragBtn);
    task.appendChild(checkBox);
    task.appendChild(descr);
    task.appendChild(removeBtn);
    
    taskList.appendChild(task);
}

createNewTask("Feed my cat");
createNewTask("Learn english");



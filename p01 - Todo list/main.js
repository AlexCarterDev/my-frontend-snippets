var CLS_MATERIAL_ICONS = "material-icons";
var CLS_DESCRIPTION = "description";
var CLS_BTN_REMOVE = "btn-remove";
var CLS_TASK = "task";
var CLS_UNSELECTABLE = "unselectable";
var CLS_CHECKBOX = "checkbox";

var taskList = document.querySelector(".todo .task-container");
var percentage = document.querySelector(".todo .percentage");

function updatePercentage() {
    var nChilds = taskList.childElementCount;
    var nCheck = 0;
    var checkBoxes = taskList.getElementsByClassName(CLS_CHECKBOX);
    
    for (let i = 0; i < checkBoxes.length; i++) {
        var cb = checkBoxes[i];
        nCheck += cb.state;
    }
    
    if (nChilds == 0) {
        percentage.innerHTML = "";
    } else {
        percentage.innerHTML = Math.round((nCheck/nChilds)*100) + "%";
    }
}

function updateCheckBoxUI(checkBox) {
    if (checkBox.state == 1) {
        checkBox.innerHTML = "check_box";
    } else {
        checkBox.innerHTML = "check_box_outline_blank";
    }
}

function createNewTask(text) {
    var task = document.createElement("li");
    task.className = CLS_TASK;

    var dragBtn = document.createElement("i");
    dragBtn.className = CLS_MATERIAL_ICONS + " " + CLS_UNSELECTABLE;
    dragBtn.innerHTML = "drag_indicator";

    var checkBox = document.createElement("i");
    checkBox.state = 0; // add new feature: checkbox checked or not
    updateCheckBoxUI(checkBox);
    checkBox.className = CLS_MATERIAL_ICONS + " " + CLS_UNSELECTABLE + " " + CLS_CHECKBOX;
    checkBox.onclick = function() {
        checkBox.state = checkBox.state ? 0 : 1;
        updateCheckBoxUI(checkBox);
        updatePercentage();
    };

    var descr = document.createElement("span");
    descr.className = CLS_DESCRIPTION;
    descr.innerHTML = text;
    descr.setAttribute("contenteditable", "true");

    var removeBtn = document.createElement("i");
    removeBtn.className = CLS_MATERIAL_ICONS + " " + CLS_BTN_REMOVE + " " + CLS_UNSELECTABLE;
    removeBtn.innerHTML = "remove_circle";
    removeBtn.onclick = function() {
        task.parentElement.removeChild(task);
        updatePercentage();
    };

    task.appendChild(dragBtn);
    task.appendChild(checkBox);
    task.appendChild(descr);
    task.appendChild(removeBtn);
    
    taskList.appendChild(task);
}

createNewTask("Feed my cat");
createNewTask("Learn english");
createNewTask("Clean room");

updatePercentage();

const CLS_MATERIAL_ICONS = "material-icons";
const CLS_DESCRIPTION = "description";
const CLS_BTN_REMOVE = "btn-remove";
const CLS_TASK = "task";
const CLS_UNSELECTABLE = "unselectable";
const CLS_CHECKBOX = "checkbox";
const CLS_BTN_DRAG = "btn-drag";

// KC - KeyCode
const KC_BACKSPACE = 8;
const KC_ENTER = 13;

const DESCR_POS = 2;

var taskList = document.querySelector(".todo .task-container");
var percentage = document.querySelector(".todo .percentage");
var newTask = document.querySelector(".todo .new-task");

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

function removeTask(task) {
    task.parentElement.removeChild(task);
    updatePercentage();
}

/* Function from stackoverflow */
function moveCursorToEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

function focusOnLastDescr(taskList) {
    if (taskList.childElementCount > 0) {
        var lastDescr = taskList.lastChild.getElementsByClassName(CLS_DESCRIPTION)[0];
        moveCursorToEnd(lastDescr);
    } else {
        newTask.focus();
    }            
}

function focusOnPrevDescr(taskList) {

}

function createNewTask(text) {
    var task = document.createElement("li");
    task.className = CLS_TASK;

    var dragBtn = document.createElement("i");
    dragBtn.className = CLS_MATERIAL_ICONS + " " + CLS_UNSELECTABLE + " " + CLS_BTN_DRAG;
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
    descr.onkeydown = function(e) {
        if ((e.keyCode === KC_BACKSPACE) && (e.target.textContent === "")) {
            console.log(task.previousSibling)
            if (task.previousSibling !== null) {
                var prev = task.previousSibling.getElementsByClassName(CLS_DESCRIPTION)[0];                
                moveCursorToEnd(prev);
                removeTask(task);
            }
            
            /* Do not delete last character from selected task */
            return false;
        }

        if ((e.keyCode === KC_ENTER) & (e.shiftKey === false)) {
            let task = createNewTask("");
            e.target.parentElement.after(task);
            task.getElementsByClassName(CLS_DESCRIPTION)[0].focus();
        }
    }

    var removeBtn = document.createElement("i");
    removeBtn.className = CLS_MATERIAL_ICONS + " " + CLS_BTN_REMOVE + " " + CLS_UNSELECTABLE;
    removeBtn.innerHTML = "remove_circle";
    removeBtn.onclick = function() {
        removeTask(task);
    };

    task.appendChild(dragBtn);
    task.appendChild(checkBox);
    task.appendChild(descr);
    task.appendChild(removeBtn);
    
    return task;
}


newTask.onkeydown = function(e) {
    var keyCodeIsSpecial = e.keyCode <= 47 | e.keyCode === 91 | e.keyCode === 144 | e.keyCode === 145;

    if ((e.keyCode === KC_BACKSPACE) && (e.target.value === "")) {
        focusOnLastDescr(taskList);
        return false;
    } else if (!keyCodeIsSpecial){
        let task = createNewTask("");
        if (taskList.childElementCount === 0) {
            taskList.appendChild(task);
        } else {
            taskList.lastChild.after(task);
        }
        task.getElementsByClassName(CLS_DESCRIPTION)[0].focus();
    }
}

var task1 = createNewTask("Feed my cat");
var task2 = createNewTask("Learn english");
var task3 = createNewTask("Clean room");

taskList.appendChild(task1);
taskList.appendChild(task2);
taskList.appendChild(task3);

updatePercentage();
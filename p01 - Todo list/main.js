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

const POS_DESCR = 2;
const POS_CHECKBOX = 1;

var taskList = document.querySelector(".todo .task-container");
var percentage = document.querySelector(".todo .percentage");
var newTask = document.querySelector(".todo .new-task");

function updatePercentage() {
    var taskCount = taskList.children.length;
    var completedTaskCount = 0;

    for (let i = 0; i < taskCount; i++) {
        var cb = taskList.children[i].children[POS_CHECKBOX];
        completedTaskCount += cb.state;
    }
    
    if (taskCount == 0) {
        percentage.innerHTML = "";
    } else {
        percentage.innerHTML = Math.round((completedTaskCount/taskCount)*100) + "%";
    }
}

function setCheckBoxState(checkBox, isDone) {
    checkBox.state = isDone;
    if (isDone) {
        checkBox.innerHTML = "check_box";
    } else {
        checkBox.innerHTML = "check_box_outline_blank";
    }
}

function getCheckBoxState(checkBox) {
    return checkBox.state;
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
    if (taskList.children.length > 0) {
        var lastDescr = taskList.lastChild.children[POS_DESCR];
        moveCursorToEnd(lastDescr);
    }    
}

function focusOnPrevDescr(task) {
    if (task.previousSibling !== null) {
        var prev = task.previousSibling.children[POS_DESCR];
        moveCursorToEnd(prev);
    }
}

function createNewTask(text) {
    var task = document.createElement("li");
    task.className = CLS_TASK;

    var dragBtn = document.createElement("i");
    dragBtn.className = CLS_MATERIAL_ICONS + " " + CLS_UNSELECTABLE + " " + CLS_BTN_DRAG;
    dragBtn.innerHTML = "drag_indicator";

    var checkBox = document.createElement("i");
    setCheckBoxState(checkBox, false);
    checkBox.className = CLS_MATERIAL_ICONS + " " + CLS_UNSELECTABLE + " " + CLS_CHECKBOX;
    checkBox.onclick = function() {
        setCheckBoxState(checkBox, !getCheckBoxState(checkBox));
        updatePercentage();
    };

    var descr = document.createElement("span");
    descr.className = CLS_DESCRIPTION;
    descr.innerHTML = text;
    descr.setAttribute("contenteditable", "true");
    descr.onkeydown = function(e) {
        if ((e.keyCode === KC_BACKSPACE) && (e.target.textContent === "")) {
            if (task.previousSibling !== null) {
                focusOnPrevDescr(task);
                removeTask(task);
            }
            /* Do not delete last character from selected task */
            return false;
        }

        if ((e.keyCode === KC_ENTER) & (e.shiftKey === false)) {
            let t = createNewTask("");
            task.after(t);
            t.getElementsByClassName(CLS_DESCRIPTION)[0].focus();
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
        if (taskList.children.length === 0) {
            taskList.appendChild(task);
        } else {
            taskList.lastChild.after(task);
        }
        task.children[POS_DESCR].focus();
    }
}

var task1 = createNewTask("Feed my cat");
var task2 = createNewTask("Learn english");
var task3 = createNewTask("Clean room");

taskList.appendChild(task1);
taskList.appendChild(task2);
taskList.appendChild(task3);

updatePercentage();
var startPosition = document.getElementsByClassName("start")[0].id;
var position = startPosition.split("-");

var currentRow = position[0];
var currentBlock = position[1];
var currentLocation = currentRow + "-" + currentBlock;

var getElement = document.getElementById(currentLocation);
var classNames = getElement.className;

var path = [currentLocation];

checkOptions();
function checkOptions() {
    goRight();
    goDown();
    goLeft();
    goUp();
    goBack();
}

function updateValues() {
    currentLocation = currentRow + "-" + currentBlock;

    getElement = document.getElementById(currentLocation);
    classNames = getElement.className;
}

function checkPoint() {
    getElement.classList.add("explored");
    path.push(currentLocation);
    checkOptions();
}

function checkStep() {
    if (classNames.includes("finish")) {
        return true;
    } else if (classNames.includes("explored")) {
        return false;
    } else if (classNames.includes("wall")) {
        return false;
    } else if (classNames.includes("open")) {
        return true;
    }
}

function goBack() {
    getElement.classList.remove("explored");
    getElement.classList.add("noExit");
    path.pop();
    currentPosition = path[path.length - 1];
    currentLocation = currentPosition.split("-");
    currentRow = currentLocation[0];
    currentBlock = currentLocation[1];
    updateValues();
}

function goDown() {
    currentRow++;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentRow--;
        updateValues();
    }
}

function goLeft() {
    currentBlock--;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentBlock++;
        updateValues();
    }
}

function goUp() {
    currentRow--;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentRow++;
        updateValues();
    }
}

function goRight() {
    currentBlock++;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentBlock--;
        updateValues();
    }
}

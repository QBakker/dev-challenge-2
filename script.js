var startPosition = document.getElementsByClassName("start")[0].id;
var position = startPosition.split("-");
var status = false;

var currentRow = position[0];
var currentBlock = position[1];
var currentLocation = currentRow + "-" + currentBlock;
var currentExits = 4;

var getElement = document.getElementById(currentLocation);
var div = getElement.className;
var classNames = getElement.classList;

var path = [currentLocation];

checkOptions();
function checkOptions()
{
    goRight();
    goDown();
    goLeft();
    goUp();
    goBack();
}

function updateValues()
{
    currentLocation = currentRow + "-" + currentBlock;
    currentElement = document.getElementById(currentLocation);
    classNames = currentElement.className;
}

function checkPoint()
{
    currentElement.classList.add('explored');
    path.push(currentLocation);
    if (status === true) {

    } else {
        checkOptions();
    }
}

function checkStep()
{   
    if (classNames.includes('finish')) {
        status = true;
        return true;
    } else if (classNames.includes('explored')) {
        return false;
    } else if (classNames.includes('wall')) {
        return false;
    } else if (classNames.includes('open')) {
        return true;
    }
}

function goBack()
{
    currentElement.classList.remove('explored');
    currentElement.classList.add('noExit');
    path.pop();
    currentPosition = path[path.length -1];
    currentLocation = currentPosition.split('-');
    currentRow = currentLocation[0];
    currentBlock = currentLocation[1];
    updateValues();
}

function goDown()
{
    currentRow++;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentRow--;
        currentExits--;
        updateValues();
    }
}

function goLeft()
{
    currentBlock--;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentBlock++;
        currentExits--;
        updateValues();
    }
}

function goUp()
{
    currentRow--;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentRow++;
        currentExits--;
        updateValues();
    }
}

function goRight()
{
    currentBlock++;
    updateValues();
    if (checkStep()) {
        checkPoint();
    } else {
        currentBlock--;
        currentExits--;
        updateValues();
    }
}


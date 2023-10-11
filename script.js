const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let btn = document.getElementById("btn");

function addTask(){
    if (inputBox.value === ''){ //this is if the value of the input is empty it will print the alert
        alert('You must write something!');
    }else{
        let li = document.createElement("li"); //if the value of inputBox is some text this will create an li in the html
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);//this is saying where the li should be placed and in this case is in the ul with class list-container
        let span = document.createElement("span"); //this creates the element span
        span.innerHTML = "\u00d7"; //this assigns the x sign to span 
        li.appendChild(span); //adds the span to the li and it appears at the end of what you typed
    }

    inputBox.value = ""; //after typing in the inbox and adding the input the input will become empty
    saveData(); //we call it here as this is where what is written is executed
}

//click button with enter

document.getElementById("input-box").addEventListener('keyup', function(enter){
    enter.preventDefault();
    if (enter.keyCode === 13) {
        document.getElementById("btn").click();
    }
});

listContainer.addEventListener('click', function(e){ //creates an event when clicked
    if (e.target.tagName === "LI"){ //if it is clicked on li it will add the check class 
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName === "SPAN"){ //this is if the click target element is span 
        e.target.parentElement.remove(); //deletes the parent element which is the li
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //it will save the content in the browser
}

//make so the saved data from above is displayed when we exit and then reenter the browser

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
//to add css on input field
const boxElement = document.getElementById('hoverBox');

function addBoxShadow() {
  boxElement.style.boxShadow = '-2px 3px 46px 0px rgba(78,8,95,0.46)';
  boxElement.style.webkitBoxShadow = '-2px 3px 46px 0px rgba(78,8,95,0.46)';
  boxElement.style.mozBoxShadow = '-2px 3px 46px 0px rgba(78,8,95,0.46)';
}

// Function to remove box shadow on mouse leave
function removeBoxShadow() {
  boxElement.style.boxShadow = '';
  boxElement.style.webkitBoxShadow = '';
  boxElement.style.mozBoxShadow = '';
}

// Attach event listeners
boxElement.addEventListener('mouseenter', addBoxShadow);
boxElement.addEventListener('mouseleave', removeBoxShadow);

const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
function addTask() {
    
    
    if (inputBox.value.trim() === '') {
        showCustomAlert();
    } else {
       let li=document.createElement("li");
       li.innerHTML=inputBox.value;
       listContainer.appendChild(li);
       let sp=document.createElement("span");
       sp.innerHTML="\u00d7"
       li.appendChild(sp);

    }
    inputBox.value = '';
    saveData();
}
//custom alert box 
function showCustomAlert() {
    const customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'flex';
}

function hideCustomAlert() {
    const customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'none';
}
//list items

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//save data in local lstorage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//get data from local storage
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()
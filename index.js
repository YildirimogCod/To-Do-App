const formDOM = document.getElementById("form-user");
const todoList = [];

formDOM.addEventListener("submit", formHandler);

function formHandler(e) {
    e.preventDefault();
    addDOM();
    resetHandler();
    
}

const addDOM = () => {   
    const inputDOM = document.getElementById("gorev");
    const formListDOM = document.getElementById("form-list");

    if(inputDOM.value !== ""){
        todoList.push(inputDOM.value);

        const liDOM = document.createElement("li");
        const todoText = document.createTextNode(inputDOM.value);

        // liDOM.innerHTML=`${inputDOM.value}`;
        liDOM.appendChild(todoText);
        formListDOM.appendChild(liDOM);
        
        inputDOM.value="";
    }  
}

const resetHandler = function(){
    const inputDOM = document.getElementById("gorev");
    const formListDOM = document.getElementById("form-list");
    const todoText = document.createTextNode(inputDOM.value);

    todoList.pop(inputDOM.value);
    console.log(inputDOM.value); 
        
        inputDOM.value="";
};
//Getting all my elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button ");

inputBox.onKeyup = ()=>
{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() != 0)
    { //if user values aren't only spaces
        addBtn.classList.add("active"); //active the add button
    }
    else
    {
        addBtn.classList.remove("active"); //unactive the add button

    }
}

//if user click on the add button
addBtn.onclick = ()=>{
    let userData=inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("Add your new task") //getting local storage
    if(getLocalStorage == null)  //if local storage is null
    {
        listArr = [];  //creating blank array
    }
    else{
        listArr = JSON.parse(getLocalStorage); //transforming js string into a js object
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("Add your new task",JSON.stringify(listArr)); //transforming js object into a json string
}

var userinput9 = document.querySelector("#userplans9");
var userinput10 = document.querySelector("#userplans10");
var userinput11 = document.querySelector("#userplans11");
var userinput12 = document.querySelector("#userplans12");
var userinput1 = document.querySelector("#userplans1");
var userinput2 = document.querySelector("#userplans2");
var userinput3 = document.querySelector("#userplans3");
var userinput4 = document.querySelector("#userplans4");
var userinput5 = document.querySelector("#userplans5");
//variables to hook into each hour's input form.

userinput.innerHTML = "";
//clears userinput element


var plans = [];
//our empty array which we want the users' input to be appended to.

function update {
    for (var i = 0; i < plans.length; i++) {
        var customized = plans[i];
        //rethingk above
    }
}
//for each index populated in the array, we have a variable called 'customized'[i]
//this is what each entry of user input will become.

userinput.textContent = customized;
//the text content of the user-input fields is going to become the content of the array.

storeNewPlans();

function storeNewPlans() {

  localStorage.setItem("userplans", JSON.stringify(plans));

  customized.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    // code for enter
    if (key === 13) { }
    // 13 is enter 
  })
}

//I want to build something that:
//Upon the user's typing something in a field and hitting "enter",
//The stuff they've entered is committed to the local memory. Most likely through an array.
var userinput = document.querySelector("#userplans");

userinput.innerHTML = "";
//clears userinput element


var plans = [];

for (var i = 0; i < plans.length; i++) {
    var customized = plans[i];
}
//for each index populated in the array, we have a variable called 'customized'[i]

userinput.textContent = customized;
//the text content of the user-input fields is going to become the content of the array.

storeNewPlans();

function storeNewPlans() {

  localStorage.setItem("userplans", JSON.stringify(plans));

  plans.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    // code for enter
    if (key === 13) { }
    // 13 is enter 
  })
}

//I want to build something that:
//Upon the user's typing something in a field and hitting "enter",
//The stuff they've entered is committed to the local memory. Most likely through an array.
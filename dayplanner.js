//variables to hook into each hour's input form.
var userinput9 = document.querySelector("#userplans9");
var userinput10 = document.querySelector("#userplans10");
var userinput11 = document.querySelector("#userplans11");
var userinput12 = document.querySelector("#userplans12");
var userinput1 = document.querySelector("#userplans1");
var userinput2 = document.querySelector("#userplans2");
var userinput3 = document.querySelector("#userplans3");
var userinput4 = document.querySelector("#userplans4");
var userinput5 = document.querySelector("#userplans5");

//clears userinput element. (Do we need this???)
userinput.innerHTML = "";

//our empty array, which we want the users' input to be appended to.
//Do we really need to do this though???
//Isn't possible to code this so that the user input is saved to local storage for that form area, and we don't need an array???
var plans = [];

//calling the function we write out next.
storenine();

  function storenine() {
    localStorage.setItem("userplans9", JSON.stringify(???));
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
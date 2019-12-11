// Aaaaalll our JQuery code is going to go beneath this one line. Closing bracket+parenthesis should be very last things.
$("document").ready(function(){

  (function()
  // instantiate a moment object
  {var NowMoment = moment();
  // display value of moments.js object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment.format('MMMM Do YYYY, h:mm:ss a');
  // instantiate a JavaScript Date object
  var NowDate = new Date();
})();

//NOW ON TO THE LOCAL STORAGE CODE.

  //This is what updates the page with the values from local storage!
  $(".description9").val(localStorage.getItem("hour9"));

  //When the user clicks the save button,
  $("#savebutton9").on("click", function () {
    //The thing with the class "description9" is the value (represented by variable itemText),
    var itemText= $(".description9").val();

    //As well as the attribute of the thing called "data item", represented by variable itemName.
    var itemName = $(".description9").attr("data-item");

    //We log this out, so that we can inspect the page and see whether or not it works.
    console.log("Item: ", itemText);

    //this sets itemText (the variable for the input content) and itemName to local storage.
    localStorage.setItem(itemName,itemText);
})

//DELETE THE CODE BELOW IN A BIT, BECUASE I'M PRETTY SURE WE DON'TNEED IT 
$("#savebutton9").on("click", function () {

  //trying to get the closest input
  var item = $(".description9").val();
  //log out the item value
  console.log("Item: ", item);

})

//make buttons for each hour.
// make click-handlers for each of them
//save the item for each one to local storage.
//then, get the item from local storage.
//then, update the page with teh local storage value.

//THEN

//moment.js -- think about getting a clock on the page, the previous hours, future hours, and current hour.

})
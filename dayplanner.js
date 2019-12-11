$("document").ready(function(){
  //update the page with the values from local storage
  $(".description9").val(localStorage.getItem("hour9"));

(function()
{
  // instantiate a moment object
  var NowMoment = moment();
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment.format('MMMM Do YYYY, h:mm:ss a');
  
  // instantiate a JavaScript Date object
  var NowDate = new Date();
  
})();


//when we click the button, we need to get the value from the day input field.
$("#savebutton9").on("click", function () {
  //get the value of the corresponding input.
  var itemText= $(".description9").val();
  var itemName = $(".description9").attr("data-item");
  //log out the item value
  console.log("Item: ", itemText );
  //get the id for the name to get it back to put it on the page
  //get the value of the textarea to set as the value
  //save to local storage
  localStorage.setItem(itemName,itemText);
})

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
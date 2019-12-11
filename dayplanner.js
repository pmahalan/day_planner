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


  $(".description10").val(localStorage.getItem("hour10"));
  $("#savebutton10").on("click", function () {
    var itemText= $(".description10").val();
    var itemName = $(".description10").attr("data-item");
    console.log("Item: ", itemText);
    localStorage.setItem(itemName,itemText);
})

$(".description11").val(localStorage.getItem("hour11"));
$("#savebutton11").on("click", function () {
  var itemText= $(".description11").val();
  var itemName = $(".description11").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

$(".description12").val(localStorage.getItem("hour12"));
$("#savebutton12").on("click", function () {
  var itemText= $(".description12").val();
  var itemName = $(".description12").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

$(".description1").val(localStorage.getItem("hour1"));
$("#savebutton1").on("click", function () {
  var itemText= $(".description1").val();
  var itemName = $(".description1").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

$(".description2").val(localStorage.getItem("hour2"));
$("#savebutton2").on("click", function () {
  var itemText= $(".description2").val();
  var itemName = $(".description2").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

$(".description3").val(localStorage.getItem("hour3"));
$("#savebutton3").on("click", function () {
  var itemText= $(".description3").val();
  var itemName = $(".description3").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

$(".description4").val(localStorage.getItem("hour4"));
$("#savebutton4").on("click", function () {
  var itemText= $(".description4").val();
  var itemName = $(".description4").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

$(".description5").val(localStorage.getItem("hour5"));
$("#savebutton5").on("click", function () {
  var itemText= $(".description5").val();
  var itemName = $(".description5").attr("data-item");
  console.log("Item: ", itemText);
  localStorage.setItem(itemName,itemText);
})

//next steps (hour-coloring):
//moment.js -- think about getting a clock on the page, the previous hours, future hours, and current hour.

})
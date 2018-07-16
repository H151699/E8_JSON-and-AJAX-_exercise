
// JSON : Object array
//
// var myCat = {  // Object : property
//   "name": "Meow",
//   "species": "cat",
//   "favFood":"tuna"
// }


/********************** JSON: Java Script Object Notation**********************/
/******************************************************************************/

/*
// array

var myFavColor = ["blue", "green", "purple"];

var thePets = [
  {  "name": "Meow",
    "species": "cat",
    "favFood":"tuna"},

  {  "name": "Barky",
    "species": "dog",
    "favFood":"carrots"
  }

]

thePets[1].favFood  // get carrots

*/

/********************** AJAX: Asynchronous JavaScript and XML******************/
/******************************************************************************/
var pageCounter = 1; // for dynamic URL



var animalContainer = document.getElementById("animal-info");

// Add event listener
var btn = document.getElementById('btn');

// button gets clicked
btn.addEventListener("click", function(){
// what will happen after b is clicked

  //  XMLHttpRequest //////////////////////////////////////////////////////
  // 1,  Tell Browser to go to the URL and get the JSON data from the URL
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json'); // not hard code

  // 2, define
  ourRequest.onload = function(){ // onload : download data

  //  console.log(ourRequest.responseText); // access data we downloaded
    var data = JSON.parse(ourRequest.responseText); // interpreter to JSON page
    // console.log(data[1]);

    renderHTML(data);

  };

  ourRequest.send();
  pageCounter++;

  if(pageCounter > 3){ // to make the button dispear after 3 clicks from Html
    btn.classList.add("hide-me"); // hidden
  }

});





// create and add HTML to load the new page when click the button

  function renderHTML(data) {
    var htmlString = "";

    //1forLoop
    for (i = 0; i < data.length; i++) {
      htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
      //in1forLoop_1
      for (k = 0; k < data[i].foods.likes.length; k++) {
        if (k == 0) {
          htmlString += data[i].foods.likes[k];
        } else {
          htmlString += " and " + data[i].foods.likes[k];
        }
      }//in1forLoop_1



        htmlString += ' and dislikes ';
        //in1forLoop_2
         for (j = 0; j < data[i].foods.dislikes.length; j++) {
           if (j == 0) {
             htmlString += data[i].foods.dislikes[j];
           } else {
             htmlString += " and " + data[i].foods.dislikes[j];
           }
         }//in1forLoop_2

         htmlString += '.</p>';

       }// 1forLoop

  animalContainer.insertAdjacentHTML('beforeend', htmlString); // before end : add HTML right before the end of this element

}

















//

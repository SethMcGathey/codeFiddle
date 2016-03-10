/*
var obj; 
var current = 1;
var showThisMany = 3;
var numOfPages = 0;
$.getJSON( "js/blogEntries.json", function(data) {

  obj = data;
  //document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;
  var numOfEntries = 0;
  $(".paginationButtons").append("<div class='centerText pagination whiteBackground' id='prev'><a onClick='unhideGroupPrev()' href='#''>Previous</a></div>");
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".blogPosts").append("<h5 class='centerText group" + numOfEntries + "'>" + value.date + "</h5>");//.hide();
    $(".blogPosts").append("<h5 class='centerText group" + numOfEntries + "'>" + value.title + "</h5>");//.hide();
    $(".blogPosts").append("<p class='centerText group" + numOfEntries + "'>" + value.text + "</p>");//.hide();
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })
  numOfPages = Math.ceil(numOfEntries/showThisMany);
  for(var i = 1; i <= numOfPages; i++)
  {
    $(".paginationButtons").append("<div class='centerText pagination whiteBackground'><a onClick='unhideGroup(" + i + ")' href='#''>" + i + "</a></div>");
  }
  $(".paginationButtons").append("<div class='centerText pagination whiteBackground' id='next'><a onClick='unhideGroupNext()' href='#''>Next</a></div>");
  unhideGroup(1);

})

function hidePrevButton()
{
  $("#prev").hide();
}
function hideNextButton()
{
  $("#next").hide();
}
function showPrevButton()
{
  $("#prev").show();
}
function showNextButton()
{
  $("#next").show();
}

function checkHideShowPrevNext(currentNumber)
{
    if(currentNumber <= 1)
    {
      hidePrevButton();
    }else
    {
      showPrevButton();
    }

    if(currentNumber >= numOfPages)
    {
      hideNextButton();
    }else
    {
      showNextButton();
    }
}

function unhideGroup(number)
{
  current = number;
  var numOfEntries = 0;
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".group" + numOfEntries).hide();
  })

  var groupNumber = showThisMany * number-2;
  for(var i = 1; i <= showThisMany; i++){
    $(".group" + groupNumber).show();
    groupNumber++;
  }
  checkHideShowPrevNext(current);
}

function unhideGroupPrev()
{
  var number = current - 1;
  if(number > 0)
  {
    var numOfEntries = 0;
    $.each(obj.entries, function(index, value)
    {
      numOfEntries++;
      $(".group" + numOfEntries).hide();
    })

    var groupNumber = showThisMany * number-2;
    for(var i = 1; i <= showThisMany; i++){
      $(".group" + groupNumber).show();
      groupNumber++;
    }
    current = number;
  }
  checkHideShowPrevNext(current);
}
function unhideGroupNext()
{
  var number = current + 1;
  if(number <= numOfPages)
  {
    var numOfEntries = 0;
    $.each(obj.entries, function(index, value)
    {
      numOfEntries++;
      $(".group" + numOfEntries).hide();
    })

    var groupNumber = showThisMany * number-2;
    for(var i = 1; i <= showThisMany; i++){
      $(".group" + groupNumber).show();
      groupNumber++;
    }
    current = number;
  }
  checkHideShowPrevNext(current);
}

//search for words in blog page
function searchFunction()
{
  var word = document.getElementById('t1').value
  var str = document.getElementById("everything").innerHTML; 
  var res = str.replace(RegExp(word, "gi"), "<mark>" + word + "</mark>");
  document.getElementById("everything").innerHTML = res;
  showPostsWhenWordFound(word);
}


function showPostsWhenWordFound(word)
{
  var num = 0;
  $.each(obj.entries, function(index, value)
  {
    num++;
    $(".group" + num).hide();
  })
  console.log("made it");
  var num = 0;
  var totalCount = 0;
  $.each(obj.entries, function(index, value)
  {
    var str = value.date; 
    var str1 = value.title;
    var str2 = value.text;
    
    console.log(str.indexOf("cat"));
    num++;
    if((str.indexOf(word) != -1 || str1.indexOf(word) != -1 || str2.indexOf(word) != -1) && totalCount < showThisMany)
    {
      $(".group" + num).show();
      totalCount++;
    }
  })
}


$("#TeamProfile").click(function() {
  $("#target")
});
*/




$( document ).ready( function() { 
  $( "#wordpressHomePage" ).show(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).hide();
} );

$('#wordpressHomeButton').click( function() { 
  $( "#wordpressHomePage" ).show(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).hide();
} );

$('#wordpressContactPageButton').click( function() { 
  $( "#wordpressHomePage" ).hide(); 
  $( "#wordpressContactPage" ).show();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).hide();
} );

$('#wordpressProductPageButton').click( function() { 
  $( "#wordpressHomePage" ).hide(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).show();
  $( "#wordpressTeamPage" ).hide();
} );

$('#wordpressMeetTheTeamPageButton').click( function() { 
  $( "#wordpressHomePage" ).hide(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).show();
} );

//********** toggle menu *************
$("#menuIcon").click(function(e){
  $("#mobileButtons").slideToggle();
  e.stopPropagation(); 
});

$(document).click(function(){                   
  $("#mobileButtons").slideUp();
});

function getRandomColor() {
    var letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVZW";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function hearcolor() {
    $(".hear").css("background-color", getRandomColor());
  }
  function eyelidcolor() {
    $(".eyelid").css("background-color", getRandomColor());
  }
  function eyelidcolor2() {
    $(".eyelid2").css("background-color", getRandomColor());
  }
  function eyecolor() {
    $(".eye").css("background-color", getRandomColor());
  }
  function eyecolor2() {
    $(".eye2").css("background-color", getRandomColor());
  }
  function whiteeyecolor() {
    $(".whiteeye").css("background-color", getRandomColor());
  }
  function whiteeyecolor2(){
    $(".whiteeye2").css("background-color", getRandomColor());
  }
  function mousecolor() {
    $(".mouse").css("background-color", getRandomColor());
  }
  function bodycolor() {
    $(".body").css("background-color", getRandomColor());
  }
  function arm1color() {
    $(".arm1").css("background-color", getRandomColor());
  }
  function arm2color(){
    $(".arm2").css("background-color", getRandomColor());
  }
  function armcolor1() {
    $(".arm11").css("background-color", getRandomColor());
  }
  function armcolor2(){
    $(".arm21").css("background-color", getRandomColor());
  }
  function legcolor() {
    $(".leg").css("background-color", getRandomColor());
  }
  
  function legcolor2() {
    $(".leg2").css("background-color", getRandomColor());
  }
  
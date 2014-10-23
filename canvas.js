//var canvas = document.getElementById('my-canvas');
//var ctx = canvas.getContext('2d');

//ctx.lineWidth = 10;
//ctx.strokeStyle = "#ff0000";
//ctx.lineCap = 'round';
//
//ctx.beginPath();
//ctx.moveTo(0, 0);
//ctx.lineTo(250, 400);
//ctx.stroke();
//
//ctx.strokeStyle = '0000ff';
//ctx.beginPath();
//ctx.moveTo(250, 400);
//ctx.lineTo(500, 0);
//ctx.stroke();
//
//ctx.strokeStyle = '00ff00';
//ctx.beginPath();
//ctx.moveTo(150,150);
//ctx.lineTo(250,50);
//ctx.lineTo(350, 150);
//ctx.lineJoin = 'miter';
//ctx.stroke();
//
//var x = canvas.width / 2;
//var y = canvas.height / 2;
//var radius = 75;
//var startAngle = 0;
//var endAngle = 2 * Math.PI;
//var counterClockwise = true;
//ctx.lineWidth = 25;
//ctx.strokeStyle = "red";
//ctx.lineCap = "round";
//ctx.beginPath();
//ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
//ctx.stroke();
//
//var contextX = 140;
//var contextY = 40;
//var controlX = 275;
//var controlX2 = 375;
//var controlY = 520;
//var controlY2 = 420;
//var endX = 340;
//var endX2 = 440;
//var endY = 40;
//var endY2 = 80;
//
//ctx.beginPath();
//ctx.moveTo(contextX, contextY);
//ctx.quadraticCurveTo(controlX, controlY, endX, endY);
//ctx.quadraticCurveTo(controlX2, controlY2, endX2, endY2);
//ctx.lineWidth = 25;
//ctx.strokeStyle = 'purple';
//ctx.lineCap = 'round';
//ctx.stroke();

//var contextX = 240;
//var contextY = 50;
//var controlOneX = 75;
//var controlOneY = 420;
//var controlTwoX = 475;
//var controlTwoY = 420;
//var endX = 310;
//var endY = 45;
//
//ctx.beginPath();
//ctx.moveTo(contextX, contextY);
//ctx.bezierCurveTo(controlOneX, controlOneY, controlTwoX, controlTwoY, endX, endY);
//ctx.lineWidth = 25;
//ctx.strokeStyle = '#cccccc';
//ctx.lineCap = 'round';
//ctx.stroke();

//var x = 100;
//var y = 100;
//var radius = 70;
//var startAngle = Math.PI/2.5;
//
//ctx.lineWidth = 5;
//ctx.fillStyle = 'pink';
//ctx.strokeStyle = '#550000';
//
//ctx.beginPath();
//ctx.arc(x, y, radius, startAngle, startAngle + Math.PI, false);
//ctx.closePath();
//ctx.fill();
//ctx.stroke();

//ctx.lineWidth = 30;
//ctx.lineCap = 'round';
//ctx.lineJoin = 'round';
//ctx.strokeStyle = 'blue';
//ctx.fillStyle = 'lightblue';
//
//ctx.beginPath();
//ctx.moveTo(50,50);
//ctx.bezierCurveTo(400,200,150,150,460,30);
//ctx.quadraticCurveTo(250,450,50,75);
//ctx.closePath();
//ctx.stroke();
//ctx.fill();

//ctx.rect(50, 50, 400, 400);
//
//var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//grd.addColorStop(0, 'yellow');
//grd.addColorStop(1, 'red');
//ctx.fillStyle = grd;
//ctx.fill();

//var imageObject = new Image();
//imageObject.onload = function() {
//  var pattern = ctx.createPattern(imageObject, 'repeat');
//
//  ctx.rect(0, 0, canvas.width, canvas.height);
//  ctx.fillStyle = pattern;
//  ctx.fill();
//};
//imageObject.src = 'http://1.bp.blogspot.com/-10uYQ232GmA/VB2cCRa0pDI/AAAAAAAAGgw/m9nRdE1d-Rg/s1600/checkerboard-tile-pattern.jpg';


var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.strokeStyle = "#ff00ff";
ctx.lineCap = 'round';

var startX = 50;
var startY = 50;

var endX = 50;
var endY = 150;

var dx = 2;

var drawCanvas = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  startX += dx;
  endX += dx;
};

var init = function(){
  setInterval(drawCanvas, 20)
};

init();



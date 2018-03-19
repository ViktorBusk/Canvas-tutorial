var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(200, 200, 200, 200);
c.fillStyle = 'rgba(255, 200, 0, 0.5)';
c.fillRect(300, 300, 300, 300);
//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(600,300);
c.lineTo(50, 300);
c.strokeStyle = "red";
c.stroke();
// Arc
c.beginPath();
c.arc(600, 300, 200, 0, Math.PI * 2, false);
c.strokeStyle = 'darkblue';
c.stroke();
for (var i = 0; i < 10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var z = Math.random() * 250;
  c.beginPath();
  c.arc(x, y, 200, 0, Math.PI * 2, false);
  c.strokeStyle= 'blue';
  c.stroke();
}
var x = 200;
var dx = 20;
var y = 200;
var dy = 20;
var radie = 30;
*/

/*function Rectangle(x, y, dx, dy, längd, color){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.längd = längd;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.fillRect(this.x, this.y, this.längd, this.längd)M
    c.fillStyle = color;
  }
}*/


function Circle(x, y, dx, dy, radie, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radie = radie;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radie, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {
    if (this.x + radie > innerWidth || this.x - radie < 0) {
      this.dx = -this.dx;
    }
    if (this.y + radie > innerHeight || this.y - radie < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function RandomfillCircle(){
  var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + (r()+ 0.5).toFixed(1) + ')';
}


var circleArray = [];

for (var i = 0; i < 100; i++) {
  var color = RandomfillCircle();
  var radie = (Math.random() *50) + 25;
  var x = Math.random() * (innerWidth - radie * 2) + radie;
  var y = Math.random() * (innerHeight - radie * 2) + radie;
  var dx = (Math.random() - 0.5) * 20;
  var dy = (Math.random() - 0.5) * 10;
  circleArray.push(new Circle(x, y, dx, dy, radie, color));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
   }
}

animate();

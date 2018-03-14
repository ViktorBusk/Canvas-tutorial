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
} */


var x = 200;
var dx = 20;
var y = 200;
var dy = 20;
var radie = 30;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radie, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();

  if (x + radie > innerWidth || x - radie < 0){
    dx = -dx;
  }
  if (y + radie > innerHeight || y -radie < 0){
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animate();

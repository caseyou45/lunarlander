// Rocket
ctx.fillRect(x, y, 5, 30);

// Cone
ctx.beginPath();
ctx.arc(x + 2.5, y, 1, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// Base

ctx.moveTo(x - 5, y + 35); // start at top left corner of canvas
ctx.lineTo(x + 10, y + 35); // go 200px to right (x), straight line from 0 to 0
ctx.lineTo(x + 2.5, y + 25); // go to horizontal 100 (x) and vertical 200 (y)
ctx.fill(); // connect and fill

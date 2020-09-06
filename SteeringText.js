var font;
var vehicles = [];

function preload(){
 font = loadFont('AvenirNextLTPro-Demi.otf'); 
}

function setup() {
  createCanvas(600,300);
  background(51);
  
  var points = font.textToPoints('m_mobile', 20, 200, 124);
  
  for (var i = 0; i < points.length; i++){
     var pt = points[i];
     var vehicle = new Vehicle(pt.x, pt.y);
     vehicles.push(vehicle);
  };
}

function draw() {
  background(51);
  for(var i = 0; i < vehicles.length; i++){
      var v = vehicles[i];
      v.behaviors();
      v.update();
      v.show();
  };
}
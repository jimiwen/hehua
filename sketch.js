let seasonpicker= Xrandom(0.9,1);
let boxStyle=Xrandom(0,1);
let handStyle=Xrandom(0,1);
let windowNum=Xrandom(0,1);

function Xrandom(x,y){
  return (y-x)*fxrand()+x;
}

window.$fxhashFeatures = {
  "Guardian Beast": getSeasonStyle(seasonpicker),
  "State of the scroll": getBoxStyle(boxStyle),
  "Left or right?": getHandStyle(handStyle),
    "Out of window:": getwindowNum(windowNum)
}

// console.log(getBoxStyle(boxStyle))
// console.log(getSeasonStyle(seasonpicker))
// console.log(getHandStyle(handStyle))
// console.log(getwindowNum(windowNum))

function getwindowNum(value){
  if (value<0.2) return 'Jia';
  else if (value<0.4) return 'Yi'
  else if (value<0.6) return 'Bing'
  else if (value<0.8) return 'Ding'
  else if (value<0.9) return 'Wu'
  else return 'Ji'
}

function getSeasonStyle(value){
  if (value<0.5) return 'Qinglong';
  else if (value<0.70) return 'Zhuque'
  else if (value<0.90) return 'Baihu'
  else return 'Xuanwu'
}

function getBoxStyle(value){
 if (value<0.09) return 'Opps I paint out of the frame'
  else return 'Pristine'
}

function getHandStyle(value){
  if (value<0.5) return 'Right Handed';
  else if (value<0.85) return 'Left Handed'
  else return 'Ambidextrous'
}


const coloring={
	color1: '#bfb8c2',
	color2: '#d0dbd8',
	color3: '#c2740c',
}

if (seasonpicker<0.5){
   colors = {
    main: "#f1f1f1",
    bg: "#02040a",
    sea1: '#0892c4',
    sea2: '#02c0d9',
    sand1:'#a18360',
    sand2:'#52483c',
  body2:'#069c94',
  body1:'#64faf3'
  };
}else if (seasonpicker<0.7){
  //summer 20%
   colors = {
    main: "#e3d5d5",
    bg: "#692545",
    sea1: '#bd112b',
    sea2: '#de4573',
    sand1:'#3c4d3d',
    sand2:'#2d4038',
  body2:'#f07832',
  body1:'#edaf3b'
  };
}else if (seasonpicker<0.9){
  // golden tiger 20%
   colors = {
    main: "#fa7c1b",
    bg: "#f5eec6",
    sea1: '#ffd608',
    sea2: '#f5c207',
    sand1:'#9e3a00',
    sand2:'#d15b00',
  body2:'#ffdc2b',
  body1:'#ffbe0d'
  };
}else{
  //10% winter
   colors = {
    main: "#02040a",
    bg: "#f1f1f1",
    sea1: '#0892c4',
    sea2: '#02c0d9',
    sand1:'#02040a',
    sand2:'#52483c',
    body2:'#069c94',
    body1:'#64faf3'
  };
}





let rc;

function setup() {
randomSeed(int(fxrand()*100000000))
  const canvas = createCanvas(3001, 3001);
//angleMode(DEGREES)
  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();

}

function draw() {



let	x = 100+random(500,2300)
let y = 100+random(500,2300)
let shapesize=random(330,500);
let stepsize=random(0.01,0.03);

vertpos1=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]
vertpos2=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]
vertpos3=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]
vertpos4=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]



for (let k=0;k<18;k++){
  x1 = 200+random(100,2300)
  y1= 200+random(100,2300)
push()
//translate(random(0,300),random(300,600))
		carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
     carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
     carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      // carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      // // carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      // carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      //
      // carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      //
      // carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      //
      // carve2(x1,y1,shapesize,0,vertpos1,vertpos2,vertpos3,vertpos4)
      //


    //  carve2(x1,y1,shapesize,0)
      pop()
    //	carve2(x1,y1,shapesize,0)

	//print(k)
	}
  drawFrames(random([colors.sand2]),1)
drawFrames(random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand2]),1)
drawFrames(random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand1]),1)
drawFrames(random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand1]),1)



  pos=[x,y]
  for (let k=0;k<36;k++){
  push()
//  translate(random(0,600),random(0,600))
 pos=carve(3000-pos[x],3000-pos[y],vertpos1,vertpos2,vertpos3,vertpos4)
    pop()

    // push()
    // translate(random(200,200),random(200,400))
    // rotate(PI/3)
    // translate(random(0,200),random(-160,-300))
    //   carve(x,y)
    //   pop()


   //print(k)
   }


drawFlower(colors.sand1,1,y1+600)


// drawFrames(random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand1]),1)
//drawFrames(random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand1]),1)
//drawFrames(random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand2]),1)

 // drawFrames(random([colors.sand1,colors.sand2]),1)
 // drawFrames(random([colors.sand1,colors.sand2]),1)
 // drawFrames(random([colors.sand1,colors.sand2]),1)
 //
 //
 // drawFrames(random([colors.sand1,colors.sand2]),1)
 // drawFrames(random([colors.sand1,colors.sand2]),1)

}

function exportImage() {
  save(`hehua_${fxhash}.png`)
}



function keyReleased() {
  "1" == key && exportImage()
}

function drawFlower(coloring,thick,y1){
console.log(y1)
offset=random(50,100);
  framepoints=[
    [0,0],
    [0,3000],
    [3000,3000],
    // [3000,y1+offset],
    // [0,y1+offset],
    // [0,y1],
    // [3000,y1],
    [3000,0],
    [0,0]
  ];
  rc.polygon(framepoints, {
    fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepoints, {
    fill: random([colors.sand1,colors.sand1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });


  // rc.polygon(framepoints, {
  //   fill: random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand2]),
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.3),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
  // rc.polygon(framepoints, {
  //   fill: random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand2]),
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.3),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });

}
//
function drawFrames(coloring,thick){


  framepointRandom=[
    [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
  vertpos1,
  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],

  vertpos2,
  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
  vertpos3,
  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
  vertpos4,
  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
  ];

  rc.polygon(framepointRandom, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepointRandom, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepointRandom, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  // rc.polygon(framepointRandom, {
  //   fill: coloring,
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.3),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
  // rc.polygon(framepointRandom, {
  //   fill: coloring,
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.3),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
}

function carve(x,y,vertpos){

  let width =2500
  	let height = 2500

  	left_x = int(width * -0.5)
  	right_x = int(width * 1.5)
  	top_y = int(height * -0.5)
  	bottom_y = int(height * 1.5)
  	resolution = int(width * 0.01)


  	num_columns = 3*int((right_x - left_x) / resolution)
  	num_rows = 3*int((bottom_y - top_y) / resolution)
  	//	print('num_columns'+ num_columns)
  	//	print('num_rows'+ num_rows)


	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)

	gain=int(random(-3.1,3.1));
	bend=random(0.12,0.13);
	offset=random(0,num_rows)
	if (random(0,1)<0.99) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(2,3);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

		x = 100+random(500,1900)
	 y = 100+random(500,1900)
	let num_steps=100

	strokeWeight(0.1)
	dice=random(0,1)
	if (dice<0.95){
		noFill()
		stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	}
	else if (dice>0.999995){
		//fill(random([coloring.color1,coloring.color2,coloring.color3]))
		noStroke();
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))

    noFill()
	}
	else {
		//fill(random([coloring.color1,coloring.color2,coloring.color3]))
		stroke(random([coloring.color1,coloring.color2,coloring.color3]))
    noFill()
	}

	//vertex(100,100)
	//vertex(1100,1300)
	beginShape()
	let dice2=random(0,1)
	 shapesize=random(330,500);
	 stepsize=random(0.1,0.3);
   curvelegnth=50+random(250,400);
	stroke(random([coloring.color1,coloring.color2,coloring.color3]))
	for (k=0;k<curvelegnth;k+=1+random(0,3)) {
		strokeWeight(0.1+random(0,0.5))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<3100 && y_offset< 3100 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)
strokeWeight(0.1)
			//draw shapes
			if (dice2>0.50){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				noFill()
			//rect(x,y,shapesize,shapesize)
				vertex(x, y)
  //      strokeWeight(0.1/k+0.1/(curvelegnth-k))
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])
        line(x,y,vertpos3[0],vertpos3[1])
			}
			else if (dice2<0.20 && dice2>0.1){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//fill(random([coloring.color1,coloring.color2,coloring.color3]))
				//	ellipse(x,y,shapesize,shapesize)
			//	rect(x,y,shapesize,shapesize)
				vertex(x, y)
  //      strokeWeight(0.1/k+0.1/(curvelegnth-k))
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])


			}
			else if (dice2<0.30 && dice2>0.2){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//	fill(255)
			//	fill(random([coloring.color1,coloring.color2,coloring.color3]))
				//	ellipse(x,y,shapesize,shapesize)
        noFill()
				rect(x,y,shapesize,random(1,1)*shapesize)
    	vertex(x, y)
//      strokeWeight(0.1/k+0.1/(curvelegnth-k))
      line(x,y,vertpos1[0],vertpos1[1])
      line(x,y,vertpos2[0],vertpos2[1])
      line(x,y,vertpos3[0],vertpos3[1])
			}
			else if (dice2<0.9){
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//				fill(0)
				noFill()
//strokeWeight(0.1/k+0.1/(curvelegnth-k))
				vertex(x, y)
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])
        line(x,y,vertpos3[0],vertpos3[1])

			}
			else {
				//	noFill()
				stroke(random([coloring.color1,coloring.color2,coloring.color3]))
				//fill(0)
				noFill()
        strokeWeight(0.2)
				rect(x,y,random(1,1)*shapesize,shapesize)
        // line(x,y,vertpos1[0],vertpos1[1])
        // line(x,y,vertpos2[0],vertpos2[1])
				//	vertex(x, y)

			}
			//
			//pop()

			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))


			circle(x,y,3)
		}
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))
noFill()
strokeWeight(0.1)
		endShape()
	}
posi=[x,y];
return posi
}

function carve2(x,y,shapesize,wiggle,vertpos1,vertpos2,vertpos3,vertpos4){

  let width =2500
    let height = 2500

    left_x = int(width * -0.5)
    right_x = int(width * 1.5)
    top_y = int(height * -0.5)
    bottom_y = int(height * 1.5)
    resolution = int(width * 0.01)


    num_columns = 3*int((right_x - left_x) / resolution)
    num_rows = 3*int((bottom_y - top_y) / resolution)

	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)
	if (random(0,1)>0.5){
		gain=int(random(1.1,3.1));
	}
	else{
		gain=int(random(-3.1,-1.1));
	}

	bend=random(0.1,0.2);
	offset=random(0,num_rows)
	if (random(0,1)<0.2) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(12,13);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

	// let	x = 100+random(-100,1000)
	// let y = 100+random(-100,1000)
	let num_steps=100

	// strokeWeight(0.1)
	// dice=random(0,1)
	// if (dice<0.95){
	// 	noFill()
	// 	stroke(255)
	// }
	// else if (dice>0.995){
	// 	fill(255)
	// noStroke();
	// }
	// else {
	// 	 fill(0)
	// 	stroke(255)
	// }

	//vertex(100,100)
	//vertex(1100,1300)

//	let dice2=random(0,1)
	// let stepsize=random(1.1,1.2);
  let stepsize=random(0.5,0.6);

//	print("dice2=  "+dice2)
	let curvelength=random(215,400);
	//stroke(255)
 //measure balance


// print(shiftX,shiftY)
// print(x,y)
x=x
y=y


	//draw
	for (k=0;k<50+curvelength;k+=1+random(0,3)) {
    strokeWeight(0.1+random(0,0.5))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<3100 && y_offset< 3100 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			// NOTE: normally you want to check the bounds here
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)


			//main curve
			stroke(random([coloring.color1,coloring.color2,coloring.color3])
)
// 			fill(random([coloring2.color1,coloring2.color2,coloring2.color3])
// )
noFill()
			//	ellipse(x,y,shapesize,shapesize)
     strokeWeight(0.1)
			rect(x,y,shapesize,random(1,1)*shapesize)
    //   strokeWeight(1.5*sqrt(1/(k+2)+1/(50+curvelength-k+2)))
     strokeWeight(0.1)
      line(x,y,vertpos1[0],vertpos1[1])
      line(x+shapesize,y,vertpos2[0],vertpos2[1])
        line(x+shapesize,y+shapesize,vertpos3[0],vertpos3[1])
        line(x,y+shapesize,vertpos3[0],vertpos3[1])
strokeWeight(0.1)
			//
			//pop()
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))

//print(x,y)

			circle(x,y,300)
		}


	}
	return x,y,shapesize;
}
//     License : Copyright (C) 2022 Jimi Y. C. Wen . All rights reserved.\n
//     Licensed under CC BY-NC-SA 4.0
//    https://github.com/jimiwen

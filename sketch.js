let seasonpicker= Xrandom(0.9,1);
let boxStyle=Xrandom(0,1);
let handStyle=Xrandom(0,1);
let windowNum=Xrandom(0,1);
let rc;
let yao=[0,0,0,0,0,0];
let yaoone=Xrandom(0,1);
let yaotwo=Xrandom(0,1);
let yaothree=Xrandom(0,1);
let yaofour=Xrandom(0,1);
let yaofive=Xrandom(0,1);
let yaosix=Xrandom(0,1);

function Xrandom(x,y){
  return (y-x)*fxrand()+x;
}

if (yaoone<0.5){
  yao[0]=0;
}else{
  yao[1]=1;
};

if (yaotwo<0.5){
  yao[1]=0;
}else{
  yao[0]=1;
}

if (yaothree<0.5){
  yao[2]=0;
}else{
  yao[2]=1;
}

if (yaofour<0.5){
  yao[3]=0;
}else{
  yao[3]=1;
}

if (yaofive<0.5){
  yao[4]=0;
}else{
  yao[4]=1;
}
if (yaosix<0.5){
  yao[5]=0;
}else{
  yao[5]=1;
}


console.log(yao)

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







function setup() {
  randomSeed(int(fxrand()*100000000))
  const canvas = createCanvas(3001, 3001);
  //angleMode(DEGREES)
  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();






  //  console.log(dishichengtu)
}

function draw() {
//  drawhetu()

  let	x = 100+random(500,2800)
  let y = 100+random(500,2800)
  let shapesize=random([300,300,300,300,280,250,300,350]);
  let stepsize=random(0.01,0.03);

  raddd=600;
  dishichengtu=[
    [1500+raddd*cos(1*2*PI/10),1500+raddd*sin(1*2*PI/10)],
    [1500+raddd*cos(2*2*PI/10),1500+raddd*sin(2*2*PI/10)],
    [1500+raddd*cos(3*2*PI/10),1500+raddd*sin(3*2*PI/10)],
    [1500+raddd*cos(4*2*PI/10),1500+raddd*sin(4*2*PI/10)],
    [1500+raddd*cos(5*2*PI/10),1500+raddd*sin(5*2*PI/10)],
    [1500+raddd*cos(6*2*PI/10),1500+raddd*sin(6*2*PI/10)],
    [1500+raddd*cos(7*2*PI/10),1500+raddd*sin(7*2*PI/10)],
    [1500+raddd*cos(8*2*PI/10),1500+raddd*sin(8*2*PI/10)],
    [1500+raddd*cos(9*2*PI/10),1500+raddd*sin(9*2*PI/10)],
    [1500+raddd*cos(10*2*PI/10),1500+raddd*sin(10*2*PI/10)],
  ];

  tianwushengtu=[
    [1200,1500],
    [1500,1200],
    [1500,1500],
    [1800,1500],
    [1500,1800],
  ];

  tianyishengshui=[
    [1500,2500]
  ];

  widsix=350

  diliuchengshui=[
    [1500-2.5*widsix,3000],
    [1500-1.5*widsix,3000],
    [1500-0.5*widsix,3000],
    [1500+0.5*widsix,3000],
    [1500+1.5*widsix,3000],
    [1500+2.5*widsix,3000],
  ];

  dibachengmu=[
    [1,400],
    [1,700],
    [1,1000],
    [1,1350],
    [1,1650],
    [1,1950],
    [1,2250],
    [1,2650],
  ];

  tiansanshengmu=[
    [501,1200],
    [501,1500],
    [501,1800],
  ];

  tianqichenghuo=[
    [600,1],
    [900,1],
    [1200,1],
    [1500,1],
    [1800,1],
    [2100,1],
    [2400,1],
  ];

  diershenghuo=[
    [1500-250,501],
    [1500+250,501]
  ];
  widnine=280
  tianjiuchengjin=[
    [3000,1500-4*widnine],
    [3000,1500-3*widnine],
    [3000,1500-2*widnine],
    [3000,1500-1*widnine],
    [3000,1500],
    [3000,1500+1*widnine],
    [3000,1500+2*widnine],
    [3000,1500+3*widnine],
    [3000,1500+4*widnine],
  ];

  disishengjin=[
    [2500,1050],
    [2500,1350],
    [2500,1650],
    [2500,1950],
  ];

  fullgua=[
    tianyishengshui,
    diershenghuo,
    tiansanshengmu,
    disishengjin,
    tianwushengtu,
    diliuchengshui,
    tianqichenghuo,
    dibachengmu,
    tianjiuchengjin,
    dishichengtu
  ];

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos1=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos2=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;

  tiandiY=ceil(random(0,1)*10)-1;
  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos3=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos4=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]





  for (let k=0;k<random(4,16);k++){

    tiandi=ceil(random(0,1)*10)-1;
    shengchengX=ceil(random(0,tiandi+0.00001))-1;


    shengchengY=ceil(random(0,tiandi+0.00001))-1;

    x1 = fullgua[tiandi][shengchengX][0]
    y1= fullgua[tiandi][shengchengY][1]
// console.log(tiandi,shengchengX,shengchengY)
//     x1=100
//     y1=100
    push()
    //translate(random(0,300),random(300,600))



    //console.log(vertpos4)
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


console.log(x,y)
  pos=[x,y]
  for (let k=0;k<random(4,16);k++){
    shengchengX=ceil(random(0,tiandi+0.00001))-1;


    shengchengY=ceil(random(0,tiandi+0.00001))-1;

    x1 = fullgua[tiandi][shengchengX][0]
    y1= fullgua[tiandi][shengchengY][1]
    push()
    pos=carve(x1,y1,vertpos1,vertpos2,vertpos3,vertpos4)
    //console.log(pos)
    pop()
  }
  posgras=[random(100,1900),random(100,1900)]
  for (let k=0;k<1;k++){
    push()
    rotate(random(0,PI/12))
    // translate(random(1330,1500),random(530,800))
    posgras=carve3(posgras[0],posgras[1])
    pop()
  }


  // vertpos1=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]
  // vertpos2=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]
  // vertpos3=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]
  // vertpos4=[random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])]


  // vertpos1=[tianyishengshui[0][0],tianyishengshui[0][1]]
  // vertpos2=[diershenghuo[0][0],diershenghuo[0][1]]
  // vertpos3=[dishichengtu[0][0],dishichengtu[0][1]]
  // vertpos4=[dibachengmu[6][0],dibachengmu[6][1]]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos1=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos2=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;

  tiandiY=ceil(random(0,1)*10)-1;
  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos3=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos4=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

console.log(pos[x],pos[y])

shengchengX=ceil(random(0,tiandi+0.00001))-1;


shengchengY=ceil(random(0,tiandi+0.00001))-1;

x1 = fullgua[tiandi][shengchengX][0]
y1= fullgua[tiandi][shengchengY][1]

  for (let k=0;k<random(4,16);k++){

    push()
    //translate(random(0,600),random(0,600))
    pos=carve(x1,y1,vertpos1,vertpos2,vertpos3,vertpos4)
    pop()


    //print(k)
  }


  //drawFlower(colors.sand1,1,y1+600)


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
  //console.log(y1)
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

  //
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


  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos1a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos2a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;

  tiandiY=ceil(random(0,1)*10)-1;
  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos3a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos4a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]


  framepointRandom=[
    //  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
    // vertpos1=[tianyishengshui[0][0],tianyishengshui[0][1]],
    // vertpos2=[diershenghuo[0][0],diershenghuo[0][1]],
    // vertpos3=[dishichengtu[0][0],dishichengtu[0][1]],
    // vertpos4=[dibachengmu[6][0],dibachengmu[6][1]],

    vertpos1,
    vertpos2,
    vertpos3,
    vertpos4,
    vertpos1a,
    vertpos2a,
    vertpos3a,
    vertpos4a,
    //  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
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

function carve(x,y,vertpos1,vertpos2,vertpos3,vertpos4){

  let width =2800
  let height = 2800

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
    if (x_offset<4500 && y_offset< 4500 && x_offset>0 && y_offset>0  ) {
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
        line(x,y,vertpos4[0],vertpos4[1])
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
        line(x,y,vertpos3[0],vertpos3[1])
        line(x,y,vertpos4[0],vertpos4[1])




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
        line(x,y,vertpos4[0],vertpos4[1])

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
        line(x,y,vertpos4[0],vertpos4[1])


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




function carve3(x,y){
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
  bend=random(0.012,0.013);
  offset=random(0,num_rows)
  if (random(0,1)<0.9) {
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
  stroke(random([coloring.color1,coloring.color2,coloring.color3]))
  for (k=0;k<50+random(250,400);k+=1+random(0,3)) {
    strokeWeight(0.8+random(0,0.5))
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
      //draw shapes
      if (dice2>0.50){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        noFill()
        //		rect(x,y,shapesize,shapesize)
        //rect(x,y,shapesize,shapesize)
        vertex(x, y)
      }
      else if (dice2<0.20 && dice2>0.1){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //fill(random([coloring.color1,coloring.color2,coloring.color3]))
        //	ellipse(x,y,shapesize,shapesize)
        //	rect(x,y,shapesize,shapesize)
        //			rect(x,y,shapesize,shapesize)
        vertex(x, y)

      }
      else if (dice2<0.30 && dice2>0.2){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //	fill(255)
        //	fill(random([coloring.color1,coloring.color2,coloring.color3]))
        //	ellipse(x,y,shapesize,shapesize)
        noFill()
        //	rect(x,y,shapesize,random(1,1)*shapesize)
        vertex(x, y)
      }
      else if (dice2<0.92){
        //	else if (dice2<0.7){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //				fill(0)
        noFill()
        vertex(x, y)
      }
      else {
        //	noFill()
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //fill(0)
        noFill()
        rect(x,y,random(1,1)*shapesize,shapesize)
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
    endShape()
  }

  posi=[x,y];
  return posi
}

function drawhetu(){
  raddd=600;
  dishichengtu=[
    [1500+raddd*cos(1*2*PI/10),1500+raddd*sin(1*2*PI/10)],
    [1500+raddd*cos(2*2*PI/10),1500+raddd*sin(2*2*PI/10)],
    [1500+raddd*cos(3*2*PI/10),1500+raddd*sin(3*2*PI/10)],
    [1500+raddd*cos(4*2*PI/10),1500+raddd*sin(4*2*PI/10)],
    [1500+raddd*cos(5*2*PI/10),1500+raddd*sin(5*2*PI/10)],
    [1500+raddd*cos(6*2*PI/10),1500+raddd*sin(6*2*PI/10)],
    [1500+raddd*cos(7*2*PI/10),1500+raddd*sin(7*2*PI/10)],
    [1500+raddd*cos(8*2*PI/10),1500+raddd*sin(8*2*PI/10)],
    [1500+raddd*cos(9*2*PI/10),1500+raddd*sin(9*2*PI/10)],
    [1500+raddd*cos(10*2*PI/10),1500+raddd*sin(10*2*PI/10)],
  ];

  tianwushengtu=[
    [1200,1500],
    [1500,1200],
    [1500,1500],
    [1800,1500],
    [1500,1800],
  ];

  tianyishengshui=[
    [1500,2500]
  ];

  widsix=350

  diliuchengshui=[
    [1500-2.5*widsix,3000],
    [1500-1.5*widsix,3000],
    [1500-0.5*widsix,3000],
    [1500+0.5*widsix,3000],
    [1500+1.5*widsix,3000],
    [1500+2.5*widsix,3000],
  ];

  dibachengmu=[
    [1,400],
    [1,700],
    [1,1000],
    [1,1350],
    [1,1650],
    [1,1950],
    [1,2250],
    [1,2650],
  ];

  tiansanshengmu=[
    [501,1200],
    [501,1500],
    [501,1800],
  ];

  tianqichenghuo=[
    [600,1],
    [900,1],
    [1200,1],
    [1500,1],
    [1800,1],
    [2100,1],
    [2400,1],
  ];

  diershenghuo=[
    [1500-250,501],
    [1500+250,501]
  ];
  widnine=280
  tianjiuchengjin=[
    [3000,1500-4*widnine],
    [3000,1500-3*widnine],
    [3000,1500-2*widnine],
    [3000,1500-1*widnine],
    [3000,1500],
    [3000,1500+1*widnine],
    [3000,1500+2*widnine],
    [3000,1500+3*widnine],
    [3000,1500+4*widnine],
  ];

  disishengjin=[
    [2500,1050],
    [2500,1350],
    [2500,1650],
    [2500,1950],
  ];

  rc.polygon(dishichengtu,{
    fill: coloring.color1,
    fillStyle: random(["hachure"]),
    fillWeight: 100*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  }
)

fill(colors.sand1)
for (k=0;k<5;k++){
  circle(tianwushengtu[k][0],tianwushengtu[k][1],50)
}

fill(coloring.color1)
for (k=0;k<1;k++){
  circle(tianyishengshui[k][0],tianyishengshui[k][1],100)
}
fill(colors.sand1)
for (k=0;k<1;k++){
  circle(tianyishengshui[k][0],tianyishengshui[k][1],50)
}

fill(coloring.color1)
for (k=0;k<6;k++){
  circle(diliuchengshui[k][0],diliuchengshui[k][1],50)
}


fill(coloring.color1)
for (k=0;k<8;k++){
  circle(dibachengmu[k][0],dibachengmu[k][1],50)
}


fill(coloring.color1)
for (k=0;k<3;k++){
  circle(tiansanshengmu[k][0],tiansanshengmu[k][1],100)
}

fill(colors.sand1)
for (k=0;k<3;k++){
  circle(tiansanshengmu[k][0],tiansanshengmu[k][1],50)
}

fill(coloring.color1)
for (k=0;k<2;k++){
  circle(diershenghuo[k][0],diershenghuo[k][1],50)
}


fill(coloring.color1)
for (k=0;k<7;k++){
  circle(tianqichenghuo[k][0],tianqichenghuo[k][1],100)
}

fill(colors.sand1)
for (k=0;k<7;k++){
  circle(tianqichenghuo[k][0],tianqichenghuo[k][1],50)
}


fill(coloring.color1)
for (k=0;k<4;k++){
  circle(disishengjin[k][0],disishengjin[k][1],50)
}


fill(coloring.color1)
for (k=0;k<9;k++){
  circle(tianjiuchengjin[k][0],tianjiuchengjin[k][1],100)
}

fill(colors.sand1)
for (k=0;k<9;k++){
  circle(tianjiuchengjin[k][0],tianjiuchengjin[k][1],50)
}

// console.log(tianyishengshui)
}
//     License : Copyright (C) 2022 Jimi Y. C. Wen . All rights reserved.\n
//     Licensed under CC BY-NC-SA 4.0
//    https://github.com/jimiwen

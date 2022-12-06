noseX=0;
noseY=0;
Img="";
marioX=325;
marioY=200;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	poseNet=ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
	console.log("ModelLoaded!!");
}

function gotPoses(results)
{
	if(results.length>0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
	background("#D3D3D3");
	if(noseX<325)
	{
		marioX=marioX-1;
	}

	if(noseX>325)
	{
		marioX=marioX+1;
	}

	if(noseY<200)
	{
		marioY=marioY-1;
	}
    image(img,marioX,marioY,40,70);
}







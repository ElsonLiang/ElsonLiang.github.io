console.log('loaded svg.js'); 
       
let draw = SVG('drawing').size(1400,690);
// let rect = draw.rect(200, 200).attr({ fill: 'purple' });
// let rectwidth = 200;
// let rectheight = 200;
// rect.center(100,100);


function flower(x,y){
    let petal1 = draw.ellipse(100,100).attr({ fill: 'beige'}).move(x,y);
    let circle1 = draw.ellipse(70,70).attr({ fill:'orange'}).move(x+15,y+15);
}

flower(0,0)
flower(100,0)
flower(200,0)
flower(300,0)
flower(400,0)
flower(0,100)
flower(0,200)
flower(0,300)
flower(0,400)


function bee(x,y){
    let beebody = draw.ellipse(40,30).attr({fill:'yellow'}).move(x,y);
    let beestripe1 = draw.rect(5,20).attr({fill:'black'}).move(x+5,y+5);
    let beestripe2 = draw.rect(5,30).attr({fill:'black'}).move(x+15,y);
    let eye = draw.ellipse(10,10).attr({fill:'black'}).move(x+25,y+5);
    let wing = draw.ellipse
    console.log('bee');
}

bee(100,0)


function brick() {
    let block = draw.rect(50,30).attr({fill:'sienna'});
    block.stroke('black');
    return block;
}
x = 900
y = 630
for (let i =0; i<4; i++){
    let b = brick();
    b.move(x, y);
    x = x + 50;
}

a=925
c=600
for (let i =0; i<3; i++){
    let b = brick();
    b.move(a,c);
    a = a + 50;
}

d = 950
e = 570
for (let i=0; i<2; i++){
    let b = brick();
    b.move(d,e);
    d = d+50;
}

//brick(1000,630)
//brick(950,630)
//brick(900,630)

//brick(925,600)
//brick(975,600)

//brick(950,570)
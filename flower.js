console.log('loaded svg.js'); 
       
let draw = SVG('drawing').size(500,500);
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
    let wing = draw.ellipse()
    console.log('bee');
}

bee(100,0)
console.log('loaded svg.js'); 
       
let draw = SVG('drawing').size(500, 500);
// let rect = draw.rect(200, 200).attr({ fill: 'purple' });
// let rectwidth = 200;
// let rectheight = 200;
// rect.center(100,100);


let pedal1 = draw.ellipse(100,100).attr({ fill: 'beige'}).move(0,0);
let pedal2 = draw.ellipse(40,40).attr({ fill: 'green'}).move(01,10);
let pedal3 = draw.ellipse(40,40).attr({ fill: 'green'}).move(20,20);
let pedal4 = draw.ellipse(40,40).attr({ fill: 'green'});
let pedal5 = draw.ellipse(40,40).attr({ fill: 'green'});
let pedal6 = draw.ellipse(40,40).attr({ fill: 'green'});
let pedal7 = draw.ellipse(40,40).attr({ fill: 'green'});
let pedal8 = draw.ellipse(40,40).attr({ fill: 'green'});
let circle = draw.ellipse(70,70).attr({ fill:'orange'}).move(15,15);
        

        
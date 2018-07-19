click_on = 0
scream = "gray"
punch = "gray"
kick = "gray"
thr0w = "gray"
health = 100;
turn = 0;

function setup(){
    createCanvas(1320,800);
    background("#66ccff");
    fill("white")
    rect(600,400,100,50)
    fill("black")
    textSize(20)
    text("PLAY!",625,430)
    fill("black")
    textSize(25)
    text(100,200,200)

}

function draw(){
    attackboxes()
    spiderdude()
}

const attackboxes = () => {
    switch(click_on){
        case 1: scream = attack_reset(); scream = "red"; hp_changer(15); break;
        case 2: punch = attack_reset(); punch = "red"; hp_changer(20); break;
        case 3: kick = attack_reset(); kick = "red"; hp_changer(35); break;
        case 4: thr0w = attack_reset(); thr0w = "red"; hp_changer(50); break;
    }
    if(click_on == 0){scream ="grey";punch="grey";kick="grey";thr0w="grey"} //attack color boxes restart
    stroke("white")
    fill(scream);
    rect(550,100,100,100)
    fill(punch)
    rect(650,100,100,100)
    fill(kick)
    rect(550,200,100,100)
    fill(thr0w)
    rect(650,200,100,100)
    fill("white")
    textSize(18)
    text("$cream",575,150)
    text("9unch",675,150)
    text("K1ck",575,260)
    text("Thr0w",675,260)
}

const adject = () => {
    textStyle(BOLD)
    text("THR0WED", random()*1000, random()*1000)
}

const attack_reset = () => {
    scream = "gray"
    punch = "gray"
    kick = "gray"
    thr0w = "gray"
}

const next_button = () =>{
    if (click_on == 1){health = health - 15}
    if (click_on == 2){health = health - 20}
    if (click_on == 3){health = health - 35}
    if (click_on == 4){health = health - 50}
    click_on = 0;
    hp_display()
    noStroke()
    fill("#66ccff")
    rect(200,80,50,40)
    adject();

}

const hp_display = () =>{
    noStroke()
    fill("#66ccff")
    rect(200,180,50,40)
    fill("black")
    textSize(25)
    text(health,200,200)
}

const hp_changer = (damage) => {
    noStroke()
    fill("#66ccff")
    rect(200,80,50,40)
    fill("red")
    text(damage, 200,100);
}

const spiderdude = () => {
    strokeWeight(.7)
    stroke("black")
    fill("Red")
    ellipse(100,75,50,50)
    ellipse(100,170,75,125)
    rect(60,210,40,100)
    rect(100,210,40,100)
    rect(15,150,50,40)
    rect(135,150,50,40)
    strokeWeight("1.2")
    stroke("white")
    line(75,120,100,170)
    line(70,140,100,170)
    line(70,160,100,170)
    line(120,120,100,170)
    line(130,140,100,170)
    line(130,160,100,170)
}

function mouseClicked () {
    if (mouseX > 550 && mouseX < 650 && mouseY > 100 && mouseY < 200){click_on = 1; }
    if (mouseX > 650 && mouseX < 750 && mouseY > 100 && mouseY < 200){click_on = 2; }
    if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 300){click_on = 3; }
    if (mouseX > 650 && mouseX < 750 && mouseY > 200 && mouseY < 300){click_on = 4; }
    if (mouseX > 600 && mouseX < 700 && mouseY > 400 && mouseY < 450){next_button();}
}




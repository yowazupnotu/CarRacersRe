canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

car1width = 40;
car1height = 40;

car2width = 40;
car2height = 40;

backgroundimg = "track.png";
console.log("backgroundimg =" + backgroundimg);
car1img = "car1.png";
car2img = "car2.png";

car1x = 400;
car1y = 10;

car2x = 400;
car2y = 60;

function add() {
    background_img = new Image();
    background_img.onload = background_image;
    background_img.src = backgroundimg;

    car1_img = new Image();
    car1_img.onload = car1_image;
    car1_img.src = car1img;

    car2_img = new Image();
    car2_img.onload = car2_image;
    car2_img.src = car2img;
}

function background_image() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function car1_image() {
    ctx.drawImage(car1_img, car1x, car1y, car1width, car1height);
}

function car2_image() {
    ctx.drawImage(car2_img, car2x, car2y, car2width, car2height);
}

window.addEventListener("keydown", my_keydown1)

function my_keydown1(e) {
    keycode = e.keyCode;
    console.log(keycode);

    if (keycode == 37) {
        left1();
    }

    if (keycode == 38) {
        up1();
    }

    if (keycode == 39) {
        right1();
    }

    if (keycode == 40) {
        down1();
    }
}

window.addEventListener("keydown", my_keydown2)

function my_keydown2(e) {
    keycode = e.keyCode;
    console.log(keycode);

    if (keycode == 65) {
        left2();
    }

    if (keycode == 87) {
        up2();
    }

    if (keycode == 68) {
        right2();
    }

    if (keycode == 83) {
        down2();
    }

    if (car1x >= 350 && car1x <= 370 && car1y <150 ) {
        console.log("Car 1 is the Winner");
    }

    if (car2x >=350 && car2x <=370 && car2y <150) {
        console.log("Car 2 is the Winner");
    }
}

function left1() {

    if (car1x >= 0) {
        car1x = car1x - 5;
        console.log("X Position of Car 1 is - ", car1x);
        background_image();
        car1_image();
        car2_image();
    }
}

function left2() {

    if (car2x >= 0) {
        car2x = car2x - 5;
        console.log("X Position of Car 2 is - ", car2x);
        background_image();
        car1_image();
        car2_image();
    }
}

function right1() {

    if (car1x <= 710) {
        car1x = car1x + 5;
        console.log("X Position of Car 1 is - ", car1x);
        background_image();
        car1_image();
        car2_image();
    }
}

function right2() {

    if (car2x <= 710) {
        car2x = car2x + 5;
        console.log("X Position of Car 2 is - ", car2x);
        background_image();
        car1_image();
        car2_image();
    }
}

function up1() {

    if (car1y >= 0) {
        car1y = car1y - 5;
        console.log("Y Position of Car 1 is - ", car1y);
        background_image();
        car1_image();
        car2_image();
    }
}

function up2() {

    if (car2y >= 0) {
        car2y = car2y - 5;
        console.log("Y Position of Car 2 is - ", car2y);
        background_image();
        car1_image();
        car2_image();
    }
}

function down1() {

    if (car1y <= 500) {
        car1y = car1y + 5;
        console.log("Y Position of Car 1 is - ", car1y);
        background_image();
        car1_image();
        car2_image();
    }
}

function down2() {

    if (car2y <= 510) {
        car2y = car2y + 5;
        console.log("Y Position of Car 2 is - ", car2y);
        background_image();
        car1_image();
        car2_image();
    }
}
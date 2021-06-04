var cavas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, left:player_x
        });
        cavas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        cavas.add(block_image_object);
    });
}

window.addEventListener("keydown", Mykeydown);

function Mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        block_image_height += 10;
        block_image_width += 10;
        console.log("Shift+P");
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        block_image_height -= 10;
        block_image_width -= 10;
        console.log("Shift+M");
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='38'){
        up();
        console.log("Up");
    }
    if(keypressed=='39'){
        right();
        console.log("Right");
    }
    if(keypressed=='40'){
        down();
        console.log("Down");
    }
    if(keypressed=='87'){
        new_image('wall.png');
        console.log("Wall");
    }
    if(keypressed=='71'){
        new_image('stool.png');
        console.log("Stool");
    }
    if(keypressed=='76'){
        new_image('table.gif');
        console.log("Table");
    }
    if(keypressed=='84'){
        new_image('tv.jpg');
        console.log("TV");
    }
    if(keypressed=='82'){
        new_image('bed.png');
        console.log("BED");
    }
}
function up(){
    if(player_y >= 0){
        player_y=player_y - block_image_height;
        console.log("When up arrow key is pressed X= "+ player_x + "Y= "+ player_y);
        cavas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 500){
        player_y=player_y + block_image_height;
        console.log("When down arrow key is pressed X= "+ player_x + "Y= "+ player_y);
        cavas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x=player_x - block_image_width;
        console.log("When left arrow key is pressed X= "+ player_x + "Y= "+ player_y);
        cavas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 1300){
        player_x=player_x + block_image_width;
        console.log("When right arrow key is pressed X= "+ player_x + "Y= "+ player_y);
        cavas.remove(player_object);
        player_update();
    }
}

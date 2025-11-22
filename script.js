let photocounter;
const numberOfPhotos = 5;

function startphotoshow(number) {
    photocounter = number;
    document.getElementById("photoshow").style.display = "grid";
    document.getElementById("shownphoto").src = `./images/${photocounter}.jpg`;
}

function changephoto(x) {
    photocounter += x;
    if (photocounter < 1) {
        photocounter = numberOfPhotos;
    } else if (photocounter > numberOfPhotos) {
        photocounter = 1;
    }
    document.getElementById("shownphoto").src = `./images/${photocounter}.jpg`;
}

document.getElementById("closebutton").onclick = function() {
    document.getElementById("photoshow").style.display = "none";
}

document.getElementById("previousphoto").onclick = function() {
    changephoto(-1);
}
document.getElementById("nextphoto").onclick = function() {
    changephoto(1);
}
    
for (i=1; i<= numberOfPhotos; i++) {
    let number = i;
    document.getElementById(`photo${i}`).onclick = function() {
        startphotoshow(number);
    }
};

/* Slide Function */
var image = 1;
var slideImage = document.getElementById("Images")


function plusSlide(num) {
    if (image == 1 && num != -1){
        image++;
        slideImage.src = "./Images/Slide/slide_"+ image + ".png"
        ChangeInfo(image)
    }
    if (image == 2 && num != 1) {
        image--;
        slideImage.src = "./Images/Slide/slide_"+ image + ".png"
        ChangeInfo(image)

    }
}

function ChangeInfo(imageNum) {
    if(imageNum == 1 ) {
        document.getElementById("GitHub_Info").style.display = "block"
        document.getElementById("Experience_Info").style.display = "none"


    }else if (imageNum == 2 ) {
        document.getElementById("Experience_Info").style.display = "block"
        document.getElementById("GitHub_Info").style.display = "none"

    }

}


function OpenContact() {
    document.getElementById("Contact").style.transform = "translateX(-75%)";
}
function CloseContact() {
    document.getElementById("Contact").style.transform = "translateX(75%)";
}
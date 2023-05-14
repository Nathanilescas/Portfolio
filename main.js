
/* Slide Function */
var image = 1;
var slideImage = document.getElementById("Images")


function plusSlide(num) {
    if ((image == 1 || image == 2 || image == 3) && num != -1){
        image++;
        slideImage.src = "./Images/Slide/slide_"+ image + ".png"
        ChangeInfo(image)
    }
    if ((image == 4 || image ==3 || image == 2) && num != 1) {
        image--;
        slideImage.src = "./Images/Slide/slide_"+ image + ".png"
        ChangeInfo(image)

    }
}

function ChangeInfo(imageNum) {
    if(imageNum == 1 ) {
        document.getElementById("GitHub_Info").style.display = "block"
        document.getElementById("CandUnity_Info").style.display = "none"
        document.getElementById("CandUnreal_Info").style.display = "none"
        document.getElementById("Experience_Info").style.display = "none"


    }else if (imageNum == 2 ) {
        document.getElementById("Experience_Info").style.display = "block"
        document.getElementById("CandUnity_Info").style.display = "none"
        document.getElementById("CandUnreal_Info").style.display = "none"
        document.getElementById("GitHub_Info").style.display = "none"

    }else if (imageNum == 3){
        document.getElementById("Experience_Info").style.display = "none"
        document.getElementById("CandUnity_Info").style.display = "block"
        document.getElementById("CandUnreal_Info").style.display = "none"
        document.getElementById("GitHub_Info").style.display = "none"
    }
    else if (imageNum ==4 ){
        document.getElementById("Experience_Info").style.display = "none"
        document.getElementById("CandUnity_Info").style.display = "none"
        document.getElementById("CandUnreal_Info").style.display = "block"
        document.getElementById("GitHub_Info").style.display = "none"
    }

}


function OpenContact() {
    document.getElementById("Contact").style.transform = "translateX(-75%)";
}
function CloseContact() {
    document.getElementById("Contact").style.transform = "translateX(75%)";
}
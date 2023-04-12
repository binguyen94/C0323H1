
let isLight = false;

function onPress(){
    if(isLight){
        document.getElementById("den").src="https://www.w3schools.com/js/pic_bulboff.gif";
        document.getElementById("nut").src="/JavaScript/Baitapbosung/images/congtacmo.png";
        isLight = false;
    }else{
        document.getElementById("den").src="/JavaScript/Baitapbosung/images/pic_bulbon.gif";
        document.getElementById("nut").src="/JavaScript/Baitapbosung/images/congtacdong.png";
        isLight = true;
    }
}
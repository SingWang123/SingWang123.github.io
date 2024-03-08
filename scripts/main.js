var myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/imgpsh_fullsize_anim 2.png"){
        myImage.setAttribute("src","images/imgpsh_fullsize_anim 1.png");    
    } else{
      myImage.setAttribute("src","images/imgpsh_fullsize_anim 2.png") ;
    }
};
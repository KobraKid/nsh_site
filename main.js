var currImg = 0;

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("main_slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[n].style.display = "inline";
	document.getElementById(currImg).style.backgroundColor = "#999999";
	document.getElementById(currImg).style.border = "2px solid #999999";
	currImg = n;
	document.getElementById(currImg).style.backgroundColor = "#FFFFFF";
	document.getElementById(currImg).style.border = "2px solid #000000";
	newImg = currImg + 1;
	if (newImg > x.length - 1){
		newImg = 0;
	}
	setTimeout(showSlide, 5000, newImg);
}
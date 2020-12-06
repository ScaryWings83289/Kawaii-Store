function ChangeColor() {
  document.getElementById("shopNow").style.backgroundColor = "Red";
  setTimeout("ChangeColor2()", 2000);
}

function ChangeColor2() {
  document.getElementById("shopNow").style.backgroundColor = "Pink";
  setTimeout("ChangeColor3()", 2000);
}

function ChangeColor3() {
  document.getElementById("shopNow").style.backgroundColor = "Green";
  setTimeout("ChangeColor4()", 2000);
}

function ChangeColor4() {
  document.getElementById("shopNow").style.backgroundColor = "Red";
}

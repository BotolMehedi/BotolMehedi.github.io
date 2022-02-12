var btn = document.getElementById("click");
window.onscroll = function (){
  clicked()
};

function clicked(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollUp(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

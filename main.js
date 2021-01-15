// Animation du titre

const name = document.getElementById('name');
const portfolio = document.getElementById('portfolio');

let value = 0 ;
function animLogo(){
  if(value < "600"){
    value++;
    console.log(value);
    name.style.fontSize = 0.1 * value + "px";
    portfolio.style.fontSize = 0.15 * value + "px";
  }
}

setInterval(animLogo, 10);

// Animation icône lien

function balanceScale() {
    let balanceIcon = document.getElementById("balanceIcon");
    balanceIcon.innerHTML = "&#xf0c1;";

    setTimeout(function () {
        balanceIcon.innerHTML = "&#xf127;";
      }, 1000);    

  }

  balanceScale();

  setInterval(balanceScale, 2000);


// Bouton scroll top
var scrollTop = document.getElementById("scrollTop") ;

window.onscroll = function() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};

scrollTop.addEventListener('click', function(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
});

var addCart= document.getElementsByClassName("atc");
var cartNum= document.getElementById("cart-num");
for (var i= 0; i<addCart.length; i++){
 addCart[i].onclick = function(){
   var orgVal=cartNum.innerHTML;
   cartNum.innerHTML = parseInt(orgVal) +1;
   document.getElementById("cart-total-hide").setAttribute('style','visibility:visible');
   document.getElementById("price-total-hide").setAttribute('style','visibility:visible');
	}
}

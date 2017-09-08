(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var addCart = document.getElementsByClassName("atc");
var cartNum = document.getElementById("cart-num");
for (var i = 0; i < addCart.length; i++) {
  addCart[i].onclick = function () {
    var orgVal = cartNum.innerHTML;
    cartNum.innerHTML = parseInt(orgVal) + 1;
    document.getElementById("cart-total-hide").setAttribute('style', 'visibility:visible');
    document.getElementById("price-total-hide").setAttribute('style', 'visibility:visible');
  };
}

},{}]},{},[1]);

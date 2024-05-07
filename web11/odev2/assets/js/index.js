var myButton1 = document.getElementById('btn1');
var myButton2 = document.getElementById('btn2');
var myButtonContent1 = document.getElementById('locationSelect');
var myIcon = document.getElementById('btn1-icon');
var overlay = document.getElementById('overlay');
var search = document.getElementById('search');
var searchBox = document.getElementById('searchBox');
var searchButton = document.getElementById('searchButton');
var myButtonContent2 = document.getElementById('btn2-dd');
var isToggled = false;
var menu = document.getElementById('menu');
var lines = document.getElementById('lines');
var menuItem1 = document.getElementById('menu-item-1');
var menuItem2 = document.getElementById('menu-item-2');
var menuItem3 = document.getElementById('menu-item-3');
var menuItem4 = document.getElementById('menu-item-4');
var menuItem5 = document.getElementById('menu-item-5');
var menuItem6 = document.getElementById('menu-item-6');
var menuItem7 = document.getElementById('menu-item-7');
var menuItem8 = document.getElementById('menu-item-8');
var menuItem9 = document.getElementById('menu-item-9');
var subMenu1 = document.getElementById('submenu-1');
var subMenu2 = document.getElementById('submenu-2');
var subMenu3 = document.getElementById('submenu-3');
var subMenu4 = document.getElementById('submenu-4');
var subMenu5 = document.getElementById('submenu-5');
var subMenu6 = document.getElementById('submenu-6');
var subMenu7 = document.getElementById('submenu-7');
var subMenu8 = document.getElementById('submenu-8');
var subMenu9 = document.getElementById('submenu-9');
var menuItem1a = document.getElementById('menu-item-1a');
var menuItem2a = document.getElementById('menu-item-2a');
var menuItem3a = document.getElementById('menu-item-3a');
var menuItem4a = document.getElementById('menu-item-4a');
var menuItem5a = document.getElementById('menu-item-5a');
var menuItem6a = document.getElementById('menu-item-6a');
var menuItem7a = document.getElementById('menu-item-7a');
var menuItem8a = document.getElementById('menu-item-8a');
var menuItem9a = document.getElementById('menu-item-9a');
var cardImage1 = document.getElementById('cardImage1');
var cardImage2 = document.getElementById('cardImage2');
var cardImage3 = document.getElementById('cardImage3');
var ci1 = document.getElementById('ci1');
var ci2 = document.getElementById('ci2');
var ci3 = document.getElementById('ci3');
var ci4 = document.getElementById('ci4');
var ci5 = document.getElementById('ci5');
var ci6 = document.getElementById('ci6');
var dotSlider = document.getElementById('dotSlider');
var dotSlider2 = document.getElementById('dotSlider2');
var dotSlider3 = document.getElementById('dotSlider3');
var d1 = document.getElementById('dot1');
var d2 = document.getElementById('dot2');
var d3 = document.getElementById('dot3');
var d4 = document.getElementById('dot4');
var d5 = document.getElementById('dot5');
var d6 = document.getElementById('dot6');
var prdCard1 = document.getElementById('prdCard1');
var prdCard2 = document.getElementById('prdCard2');
var btnSepet1 = document.getElementById('btnSepet1');
var btnSepet2 = document.getElementById('btnSepet2');
var btnSepet3 = document.getElementById('btnSepet3');


function btn1Click(){
    if(isToggled){
        myIcon.className = 'bi bi-chevron-down'
        myButton1.style.backgroundColor="white";
        myButtonContent1.style.display="none";
        myButtonContent1.style.zIndex="0";
    }
    else{
        myButton1.style.backgroundColor="rgb(240,240,240)";
        myIcon.className =  'bi bi-chevron-up';
        myButtonContent1.style.display="block";
        myButtonContent1.style.backgroundColor="white";
        myButtonContent1.style.zIndex="5";
    }
    isToggled = !isToggled;
}
myButton2.onmouseover = function(){
    overlay.style.display="block";
    myButtonContent2.style.display="block";
    myButton2.style.zIndex="6";
}
myButton2.onmouseout = function(){
    overlay.style.display="none";
    myButtonContent2.style.display="none";
    myButton2.style.zIndex="0";
}
search.onclick = function(){
    searchBox.style.outlineColor='#ff6000';
    searchButton.style.backgroundColor='#ff6000';
}
search.onblur = function(){
    searchBox.style.outlineColor='grey';
    searchButton.style.backgroundColor='grey';
}
menuItem1.onmouseover = function(){
    menuItem1.style.backgroundColor="white";
    menuItem1a.style.color="#ff6000";
    subMenu1.style.display="block";
    overlay.style.display="block";
    subMenu1.style.zIndex="2";
}
menuItem1.onmouseout = function(){
    menuItem1.style.backgroundColor="#f5f5f5";
    menuItem1a.style.color="#484848";
    subMenu1.style.display="none";
    overlay.style.display="none";
    subMenu1.style.zIndex="0";
}
menuItem2.onmouseover = function(){
    menuItem2.style.backgroundColor="white";
    menuItem2a.style.color="#ff6000";
    subMenu2.style.display="flex";
    overlay.style.display="block";
    subMenu2.style.zIndex="2";
}
menuItem2.onmouseout = function(){
    menuItem2.style.backgroundColor="#f5f5f5";
    menuItem2a.style.color="#484848";
    subMenu2.style.display="none";
    overlay.style.display="none";
    subMenu2.style.zIndex="0";
}
menuItem3.onmouseover = function(){
    menuItem3.style.backgroundColor="white";
    menuItem3a.style.color="#ff6000";
    subMenu3.style.display="flex";
    overlay.style.display="block";
    subMenu3.style.zIndex="2";
}
menuItem3.onmouseout = function(){
    menuItem3.style.backgroundColor="#f5f5f5";
    menuItem3a.style.color="#484848";
    subMenu3.style.display="none";
    overlay.style.display="none";
    subMenu3.style.zIndex="0";
}
menuItem4.onmouseover = function(){
    menuItem4.style.backgroundColor="white";
    menuItem4a.style.color="#ff6000";
    subMenu4.style.display="flex";
    overlay.style.display="block";
    subMenu4.style.zIndex="2";
}
menuItem4.onmouseout = function(){
    menuItem4.style.backgroundColor="#f5f5f5";
    menuItem4a.style.color="#484848";
    subMenu4.style.display="none";
    overlay.style.display="none";
    subMenu4.style.zIndex="0";
}
menuItem5.onmouseover = function(){
    menuItem5.style.backgroundColor="white";
    menuItem5a.style.color="#ff6000";
    subMenu5.style.display="flex";
    overlay.style.display="block";
    subMenu5.style.zIndex="2";
}
menuItem5.onmouseout = function(){
    menuItem5.style.backgroundColor="#f5f5f5";
    menuItem5a.style.color="#484848";
    subMenu5.style.display="none";
    overlay.style.display="none";
    subMenu5.style.zIndex="0";
}
menuItem6.onmouseover = function(){
    menuItem6.style.backgroundColor="white";
    menuItem6a.style.color="#ff6000";
    subMenu6.style.display="flex";
    overlay.style.display="block";
    subMenu6.style.zIndex="2";
}
menuItem6.onmouseout = function(){
    menuItem6.style.backgroundColor="#f5f5f5";
    menuItem6a.style.color="#484848";
    subMenu6.style.display="none";
    overlay.style.display="none";
    subMenu6.style.zIndex="0";
}
menuItem7.onmouseover = function(){
    menuItem7.style.backgroundColor="white";
    menuItem7a.style.color="#ff6000";
    subMenu7.style.display="flex";
    overlay.style.display="block";
    subMenu7.style.zIndex="2";
}
menuItem7.onmouseout = function(){
    menuItem7.style.backgroundColor="#f5f5f5";
    menuItem7a.style.color="#484848";
    subMenu7.style.display="none";
    overlay.style.display="none";
    subMenu7.style.zIndex="0";
}
menuItem8.onmouseover = function(){
    menuItem8.style.backgroundColor="white";
    menuItem8a.style.color="#ff6000";
    subMenu8.style.display="flex";
    overlay.style.display="block";
    subMenu8.style.zIndex="2";
}
menuItem8.onmouseout = function(){
    menuItem8.style.backgroundColor="#f5f5f5";
    menuItem8a.style.color="#484848";
    subMenu8.style.display="none";
    overlay.style.display="none";
    subMenu8.style.zIndex="0";
}
menuItem9.onmouseover = function(){
    menuItem9.style.backgroundColor="white";
    menuItem9a.style.color="#ff6000";
    subMenu9.style.display="flex";
    overlay.style.display="block";
    subMenu9.style.zIndex="2";
}
menuItem9.onmouseout = function(){
    menuItem9.style.backgroundColor="#f5f5f5";
    menuItem9a.style.color="#484848";
    subMenu9.style.display="none";
    overlay.style.display="none";
    subMenu9.style.zIndex="0";
}
var mainimg = document.getElementById('mainimg');
var images =['assets/img/format_webp.jpeg','assets/img/format_webp (1).jpeg','assets/img/format_webp (2).jpeg','assets/img/format_webp (3).jpeg'];
mainimg.src = images[0]
var currentIndex = 0;
        setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            mainimg.src = images[currentIndex];
        }, 5000);
ci2.onmouseover = function() {
    cardImage1.style.backgroundImage = "url('assets/img/format_webp (7).jpeg')";
    dotSlider.style.display="flex";
    d1.style.backgroundColor="grey";
    d2.style.backgroundColor="#ff7000";
};
ci2.onmouseout = function() {
    cardImage1.style.backgroundImage = "url('assets/img/format_webp (6).jpeg')";
    dotSlider.style.display="none";
    d2.style.backgroundColor="grey";
    d1.style.backgroundColor="#ff7000";
};
prdCard1.onmouseover = function() {
    dotSlider.style.display="flex";
    btnSepet1.style.display="block";
}
prdCard1.onmouseout = function() {
    dotSlider.style.display="none";
    btnSepet1.style.display="none";
}

ci4.onmouseover = function() {
    cardImage2.style.backgroundImage = "url('assets/img/format_webp (9).jpeg')";
    dotSlider2.style.display="flex";
    d3.style.backgroundColor="grey";
    d4.style.backgroundColor="#ff7000";
};
ci4.onmouseout = function() {
    cardImage2.style.backgroundImage = "url('assets/img/format_webp (8).jpeg')";
    dotSlider2.style.display="none";
    d4.style.backgroundColor="grey";
    d3.style.backgroundColor="#ff7000";
};
prdCard2.onmouseover = function() {
    dotSlider2.style.display="flex";
    btnSepet2.style.display="block";
}
prdCard2.onmouseout = function() {
    dotSlider2.style.display="none";
    btnSepet2.style.display="none";
}

ci6.onmouseover = function() {
    cardImage3.style.backgroundImage = "url('assets/img/format_webp (11).jpeg')";
    dotSlider3.style.display="flex";
    d5.style.backgroundColor="grey";
    d6.style.backgroundColor="#ff7000";
};
ci6.onmouseout = function() {
    cardImage3.style.backgroundImage = "url('assets/img/format_webp (10).jpeg')";
    dotSlider3.style.display="none";
    d6.style.backgroundColor="grey";
    d5.style.backgroundColor="#ff7000";
};
prdCard3.onmouseover = function() {
    dotSlider3.style.display="flex";
    btnSepet3.style.display="block";
}
prdCard3.onmouseout = function() {
    dotSlider3.style.display="none";
    btnSepet3.style.display="none";
}
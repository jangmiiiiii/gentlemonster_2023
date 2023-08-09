// header, footer JS
// header 전체메뉴 스크립트 flow
// 1. open-nav 초기 숨기기
// 2. 햄버거 메뉴 클릭 시 open-nav 출력
// 3. open-nav 안 X버튼 (nav_close) 클릭 시 open-nav 숨기기
//변수생성
const nav = document.querySelector('#nav')  //햄버거메뉴
const open_nav = document.querySelector('#open_nav') //nav 클릭 시 open 대상
const nav_close = document.querySelector('#nav_close') //x닫기
console.log(nav, open_nav, nav_close)
// 1. open-nav 초기 숨기기 #open_nav  /1/{display:none;} 클릭시 전체화면
// open_nav.style.display = 'none';
// {transform:translateX(?)}/ 2/ 옆으로 나오게하기
open_nav.style.transform = 'translateX(100%)'; //%로 입력하면 화면의 %대로 움직이니까  px로 값을 고정하는것보다 % 가 좋다
// css 값 상태에 따라 변경이 일어날 경우 애니메이션 transition
open_nav.style.transition = 'transform 1s ease'
// 2. 햄버거 메뉴(nav) 클릭시 opne-nav 출력
nav.addEventListener('click', function(){
    open_nav.style.transform = 'translateX(0)'
    // open_nav.style.display = 'block' /1/
    //display:none으로 숨긴대상을 다시 보이게 할 경우
    //기존 디자인css 에서 flex로 정렬한 대상이면 display='flex'
    //기존 디자인css 에서 flex로 설정이 없었다면  display='block'

})//3. open-nav 안 X버튼(nav_close)클릭 시 open-nav 숨기기
// 내가 누르는것 자체만 보고 변수사용하기! -> open-nav 안써도 된다는 뜻
/* nav_close.addEventListener('click', function(){
    open_nav.style.display = 'none'
}) */ 1///
nav_close.addEventListener('click', function(){
    open_nav.style.transform = 'translateX(100%)';
})

// swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000}, // 1초당 1000 
    loop:true,
    navigation:{
        nextE1: '#nav_adver .swiper-button-next',
        prevE1: '#nav_adver .swiper-button-prev'
    }
})
const fieldset = document.querySelector('fieldset')
const search = document.querySelector('#search')
search.addEventListener('focus',function(){
    fieldset.style.background = '#ff83bd'
})
search.addEventListener('blur',function(){
    fieldset.style.background = '#222'
})



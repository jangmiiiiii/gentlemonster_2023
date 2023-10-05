// <!-- header, footer 웹페이지 공통영역 적용 JS -->
    const userType = document.querySelectorAll('main .userType > h2 > a')
    const tab = document.querySelectorAll('main .content > div')
    console.log(userType, tab)

    tab[1].style.display = 'none'; //1 .비회원 주문확인 초기 숨기기
    //2. 비회원 주문확인 탭제목 클릭시 내용 보이기 (회원로그인 숨기기)'
    userType[1].addEventListener('click',function(){
        tab[0].style.display = 'none'
        tab[1].style.display = 'block'
    })
    //3. 회원 로그인 탭제목 클릭시 내용 보이기 (비회원 주문조회 숨기기)'
    userType[0].addEventListener('click',function(){
        tab[1].style.display = 'none'
        tab[0].style.display = 'block'
    })
    userType.forEach(function(t,i,a){
        t.addEventListener('click',function(e){
            e.preventDefault()
            for(let i of tab){i.style.display='none'}
            tab[i].style.display = 'block'
            for(let t of userType){t.classList.remove('active')}
            t.classList.add('active')
        })
    })

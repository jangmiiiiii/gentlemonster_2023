<header>
        <h1><a href="./index.html"><img src="./images/logo.png" alt="GENTLEMONSTER"></a></h1>
        <div class="right">
            <a href="#" class="lang">Shop in KR</a>
            <form action="#" id="searchFrm">
                <fieldset>
                    <legend class="skip">검색양식</legend>
                    <input id="searchTxt" type="text" placeholder="상품명을 입력해주세요">
                    <button id="searchBtn"><img src="./images/icon_search.png" alt=""></button>
                </fieldset>
            </form>
            <a href="./login.html" id="login"><img src="./images/icon_login.png" alt="로그인"></a>
            <a href="./review.html" id="cart"><img src="images/icon_cart.png" alt="장바구니"></a>
            <a href="#" id="nav"><img src="images/icon_menu.png" alt="메뉴"></a>
        </div>
        <!-- nav 클릭 시 open nav -->
        <div id="open_nav">
            <!-- 닫기버튼 -->
            <button id="nav_close" type="button"><img src="./images/nav_close.png" alt="닫기"></button>
            <!-- 광고 슬라이드 -->
            <div class="swiper" id="nav_adver"> <!--id 추가이유: swiper는 공통 클래스명으로 쓸거기때문에. 부모한테만 구분하기 위해  -->
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="#">나에게 어울리는 제품을 찾으세요? 실시간 라이브 채팅으로 제품 추천을 받아보세요.</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">선물하기 서비스를 통해 소중한 분에게 마음을 전하세요.</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">무료 배송 반품 서비스로 젠틀몬스터의 서비스를 경험하세요.</a>
                    </div>
                </div><!-- end swiper wrapper -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>  <!-- end swiper adver -->
            <!-- 내비게이션 -->
            <nav>
                <a href="./product_list.html">선글라스</a>
                <a href="./product_list.html">안경</a>
                <a href="./product_list.html">콜라보레이션</a>
                <a href="./product_list.html">스타일</a>
                <a href="./product_list.html">브랜드이슈</a>
                <a href="./map.html">매장보기</a>
                <a href="./product_list.html">수리서비스</a>
            </nav>
        </div>
    </header>
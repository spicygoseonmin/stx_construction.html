window.onload =function(){
    // 비주얼 이동 버튼 스크롤 기능=======================
    // 변수 선언
    const visualButton = document.querySelector(".visual-bt");
    visualButton.addEventListener("click" , function(){
        // scrollToSection() 함수는 특정 섹션으로 부드럽게 스크롤하는 
        scrollToSection("#business");
    });
    // scrollToSection()함수 작성
function scrollToSection(sectionId) {
// console.log(sectionId);
// sectionId로 지정된 요소를 찾아서 section변수에 적용
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior:"smooth" });
    }
  }
//   top버튼 스크롤 기능==================================
const topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
if (window.scrollY == 0) {
    window.scrollTo({
        top:2777,
        behavior:"smooth"
    });
    }
    else{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
});
// 화샇표 이미지 회전(창이 끝까지 내려갔을때 화살표의 방향이 반대쪽으로 바뀌기)
const topBtnImg = document.getElementById("top-btn-img");
window.addEventListener("scroll", function(scTop) {
    scTop = window.document.documentElement.scrollTop;
    if(scTop > 0){
        topBtnImg.classList.add("up")  
    }
    else{
        topBtnImg.classList.remove("up")
    }
});
// 모달창 닫기================================================
const body = document.querySelector("body");
const modal = document.querySelector(".modal-wrap");
const modalClose = document.querySelector(".modal-close");
// isOpen 값에 따라 스크롤을 제어하는 함수
function controlScroll(isOpen) {
if (isOpen) {
    body.style.overflow = "hidden";
    } else {
    body.style.overflow = "auto";
    }
}
// 초기 모달창 설정=
const isOpen = true;
controlScroll(isOpen);
modalClose.addEventListener("click" , function () {
    modal.style.display = "none";
    // 모달창이 닫힐때는 스크롤을 활성화
    controlScroll(false);

});
// *const 앞에 주어진 택스트는 본인 임의로 정하는 클래스임을 명시
};
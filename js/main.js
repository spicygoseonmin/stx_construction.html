window.onload =function(){
    // 비주얼 이동 버튼 스크롤 기능
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
};
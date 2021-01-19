const searchWordText = document.querySelector('#search-word-input');
const regionList = document.querySelectorAll('#region-list button');

document.querySelector('.button4').addEventListener('click', onClickButton);

function onClickButton() {
    searchWordText.addEventListener('keyup', () => {
  
        const searchWord = searchWordText.value;
      
        // 지역 리스트의 루프 처리
        // element는 각 요소에 해당함
        regionList.forEach((element) => {
          // 검색어가 없으면 모든 요소를 표시
          if (!searchWord || searchWord === '') {
            element.classList.remove('hide');
            return;
          }
      
          // 데이터 name 가져오기
          const regionName = element.dataset.name;
          // 데이터 영문 name 가져오기
          const phonetic = element.dataset.phonetic;
      
          // 검색어와 첫번째 글자 일치 여부에 따라 hide 클래스 사용 결정
          // hide 클래스가 사용된 요소는 화면에 표시하지 않음
          if (
            searchWord.charAt(0) === regionName.charAt(0) ||
            searchWord.charAt(0) === phonetic.charAt(0)
          ) {
            element.classList.remove('hide');
          } else {
            element.classList.add('hide');
          }
        });
      });
}
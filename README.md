
### Chapter 2 DOM

# DOM 이해

- HTML / tag  ->  Javascript / Node로 변환 => DOM

* EventTarget -> Node -> Document, Element, Text … -> html, body …

# CSSOM 

- CSS / property  ->  Javascript / Node로 변환 => CSSOM (DOM + CSS = CSSOM)

- DOM + CSSOM = Render Tree
: 사용자에게 최종적으로 브라우저에 보여지는 요소들

# Critical rendering path

- 클라이언트 -> 서버 렌더링 과정
: request/response -> loading -> scripting -> rendering -> layout -> painting

- Construction
* Request/response : html
* Loading : html 코드를 DOM으로 변환
* Scripting : DOM, CSSOM으로 변환하는 과정

- Operating
* Layout : 요소 배치
* Paint : 레이어 단위 별로 이미지(비트맵) 준비 
* Composition : 레이어 최종 배치
=> layout 단계에서 변화되는 css 속성을 사용할 수록 계속 렌더링 과정을 거쳐 성능이 저하됨. 웹 페이지에선 성능이 중요! 최대한 composition 단계에서 변화하는 css 속성 사용하기
( 각 단계별 영향을 주는 css 속성이 나타나있는 사이트 : www.csstrigger.com )

- CSS 브라우저 성능 개선 방법 => Will-change , left나 top 등 보다는 transform 사용하여 위치 조정하기

# 성능 확인법

- 개발자 도구 - performance
: 녹화 후 프로파일링 된 자료 확인하기 / 
Experience에 빨간 불이 뜰수록 성능 저하된 웹 ( layout shift)

# DOM 요소

- createElement(‘’) : 요소 만들기
- setAttribute(‘속성’, ‘속성명’) : 속성과 속성명 지정
- textContent = ‘’ : 텍스트 추가
- 부모.appendChild(‘자식’) = 해당 요소를 부모 안에서 가장 끝 부분에 추가
- insertBefore(‘앞’, ‘뒤’) = 해당 요소를 원하는 곳에 추가

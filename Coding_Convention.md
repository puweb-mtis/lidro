# Coding Convention

---

# 1. 개요

## 1-1. 전하는 말

모든 프로젝트에 동일한 코딩 컨벤션을 적용할 수는 없습니다. 프로젝트에 따라 실무자들간의 협의하에 컨벤션을 조정하게 될 수 있습니다. 본 문서는 실무자 간 원활한 소통을 위해 큰 범주에서의 코딩 컨벤션을 정의하는 것을 목적으로 합니다.

본 문서의 기본 구조와 내용은 [NHN Coding Convention](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf) 문서와 [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#HTML_Style_Rules) 문서를 기반으로 작성되었습니다. 문서 가독성을 위해 아래 내용부터는 경칭을 생략합니다.

## 1-2. 필요성

마크업 개발은 프런트-엔드 페이지의 기본 골격을 형성하기 때문에 디자인, 브라우저, 스크립트, 성능, 접근성 등과 긴밀한 관계가 있다. 즉, 마크업 개발을 잘 해야 모든 브라우저에서 콘텐츠를 손실 없이, 빠르고 쉽게 사용자에게 전달할 수 있다. 코딩 컨벤션은 이러한 조건을 만족시키기 위해 마크업 개발자가 지켜야 할 표준을 제시한다.

또한, 유지보수에 투자되는 비용을 최소화하기 위해 통일된 코드 작성법을 제시한다. 코드를 최초로 작성한 사람이 끝까지 유지보수할 확률은 매우 낮다. 따라서, 최초 개발자가 아닌 사람도 코드를 빠르고 정확하게 이해할 수 있도록 작성하는 것은 코드의 유지보수 비용을 절감하고 업무 효율을 높이는 데 결정적인 역할을 한다.

적어도 한 프로젝트의 마크업 코드는 같은 코딩 컨벤션에 따라 작성해야 한다. 코딩 컨벤션을 준수하면 프로젝트 멤버 간 코드 공유도 쉬워지고, 일관성 있게 코드를 작성할 수 있다. 어떤 코딩 컨벤션을 선택하느냐가 중요한 것이 아니라, 통일된 기준으로 소스 코드를 작성하는 것이 중요하다.

## 1-3. 컨벤션 요소 정의

### 1-2-1. 네이밍 규칙

레이아웃, 객체, 이미지, 파일, 폴더의 이름을 작성하는 규칙을 설명한다.

### 1-2-2. HTML 작성 규칙

HTML 코드의 기본 작성 규칙과 요소(element) 의 작성 규칙을 설명한다.

### 1-2-3. CSS(SCSS) 작성 규칙

SCSS 의 전반적인 작성 규칙 및 컴파일에 대해 설명한다.

### 1-2-4. JS 작성 규칙

JS 의 기본 작성 규칙과 함수 및 변수의 네이밍에 대해 설명한다.

---

# 2. 네이밍 규칙

## 2-1. 기본 규칙

모든 이름은 영문 소문자, 숫자를 사용하며 영문 소문자로만 시작할 수 있다.

언더스코어(_), 하이픈(-)을 구분자로 사용한다.

모든 이름은 의미가 있는 단어를 사용하며 가능한 축약하지 않는다.

## 2-2. 선언 순서

기본적으로 type, name, id, class, data 속성을 순서대로 선언하며 placeholder 와 style 속성을 제일 마지막에 선언한다. 그 외 항목은 기본 선언 속성 다음으로 선언한다.

대체로 Snake Case 혹은 Kebab Case를 사용한다.

```html
<input type="" name="" id="" class="" title="" data-attr="" placeholder="" style="">
```

## 2-3. 구분자

### 2-3-1. name

Snake Case를 사용한다.

```html
<input name="input_name_example">
```

### 2-3-2. id

Snake Case를 사용한다.

```html
<div id="element_id_example">id 작성 예시</div>
```

### 2-3-3. class

Kebab Case를 사용한다.

```html
<div class="element-class-example"></div>
```

### 2-3-4. title

Kebab Case를 사용한다.

```html
<div title="element-title"></div>
```

### 2-3-5. data

Kebab Case를 사용한다.

```html
<div data-attr="element-data"></div>
```

---

# 3. HTML 작성 규칙

## 3-1. 기본 규칙

### 3-1-1. DTD

HTML 문서는 반드시 DTD를 선언한다.

```html
<!DOCTYPE html>
```

### 3-1-2. 유효성 검사

페이지의 품질을 위해 가능한 유효한 HTML 코드를 사용해야한다.

W3C의 [MVS(Markup Validation Service)](https://validator.w3.org/) 통과를 기준으로 한다.

### 3-1-3. 프로토콜

해당 파일을 HTTPS를 통해 사용할 수 없는 경우가 아니면 이미지 및 기타 미디어 파일, 스타일 시트 및 스크립트에 대해 항상 HTTPS( )를 사용한다.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
```

### 3-1-4. 의미론적 마크업 (Semantic Markup)

마크업에는 각각의 의미에 맞는 요소를 사용한다.

```html
<!-- 잘못된 예 -->
<div onclick="moveToNextPage()">다음 페이지로 이동</div>

<!-- 옳바른 예 -->
<a href="nextpage.html">다음 페이지로 이동</a>
```

### 3-1-5. 대체 텍스트 (Alternative Text)

image, video 와 같은 미디어 콘텐츠의 대체 텍스트를 제공해야한다.

image의 경우 아래와 같이 alt 속성을 사용하여 대체 텍스트를 제공한다.

```html
<img src="image.png" alt="대체 텍스트">
```

video의 경우 아래와 같이 p 태그를 사용하여 숨김처리 하거나 schema data를 통하여 영상에 대한 정보를 제공한다.

```html
<!-- p 태그 사용 -->
<video>
  <source src="video.mp4" type="video/mp4">
  <p>대체 텍스트</p>
</video>

<!-- 스키마 데이터 사용 -->
<video itemtype="http://schema.org/VideoObject">
    <source src="video.mp4" type="video/mp4">
    <meta itemprop="name" content="Name of the video">
    <meta itemprop="description" content="Description of the video...">
    <meta itemprop="duration" content="PT1M33S">
    <meta itemprop="thumbnail" content="my-video-thumbnail-path.jpg">
</video>
```

## 3-2. 서식 규칙

### 3-2-1. 일반 서식

모든 블록, 목록, 테이블 요소를 줄바꿈하여 새 줄에 배치한다.

각 요소의 하위요소인 경우 들여쓰기한다.

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>

<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$ 5.00<td>
      <td>$ 4.50<td>
    </tr>
  </tbody>
</table>
```

### 3-2-2. 들여쓰기

들여쓰기는 탭을 사용하지 않으며 공백(space) 2칸을 사용한다.

```html
<ul>
  <li>들여쓰기는</li>
  <li>공백 2칸을 사용한다.</li>
</ul>
```

### 3-2-3. 빈 줄

의미있는 객체를 구분하기 위해 코드 그룹간 1줄씩 빈 줄을 만드는 것을 허용한다.

빈 줄의 간격은 1줄을 초과하지 않는다.

```html
<html>
  <head>
	...
  </head>

  <body>
  ...
  </body>
</html>
```

### 3-2-4. 인코딩

인코딩 정보를 반드시 선언한다. 인코딩 설정은 DB의 인코딩 방식과도 관련이 있으므로 담당 개발자와 협의 후 정한다.

```html
<meta charset="UTF-8">
```

### 3-2-5. 주석

주석의 시작과 종료는 아래와 같이 표기한다. 모든 그룹마다 주석을 표기할 필요는 없으며 가장 좋은 방법은 주석을 표기하지 않아도 가독성이 좋도록 의미로적 마크업을 하는 것이다.

주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.

```html
<!-- S : GNB -->
<!-- E : GNB -->
```

### 3-2-6. 인용 부호

모든 요소(element)의 속성(attribute) 선언시 부호는 큰 따옴표(”)를 사용한다.

```html
<div class="element-class-name" id="element-id-name"></div>
```

---

# 4. CSS 작성 규칙

## 4-1. 기본 규칙

### 4-1-1. 유효성 검사

W3C의 [MVS(Markup Validation Service)](https://validator.w3.org/) 통과를 기준으로 한다.

### 4-1-2. 클래스 네이밍

해당 요소의 목적을 구체적으로 반영하는 이름을 사용하며 가장 일반적인 단어를 사용한다.

일반적인 단어를 기준으로 확장할 수 있는 형태를 사용한다.

```css
/* 잘못된 예 : 의미가 없거나 불확실한 이름 */
.yee-1901 {}
/* 잘못된 예 : 시각적 표현에 의존하는 이름 */
.butotn-green {}
.clear {}

/* 옳바른 예 : 구체적인 목적을 나타내는 이름 */
.gallery {}
.login {}
.video {}
/* 옳바른 예 : generic class 선언 */
.gallery.ext {}
.login.ext {}
.video.ext {}
```

가능한 간략하게 네이밍하되 불필요한 축약은 하지 않는다.

```css
/* 잘못된 예 */
.navigation {} /* 네비게이션 */
.atr {} /* 저자 */

/* 옳바른 예 */
.nav {} /* 축약하여도 의미전달이 분명하므로 축약 */
.author {} /* 축약 시 의미전달이 분명하지 않으므로 축약하지 않음  */
```

### 4-1-3. 유형 선택자 ( [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/Type_selectors) )

유형 선택자는 노드 이름을 사용해 요소를 선택하는 것을 의미한다.

필요한 경우가 아니라면 클래스와 함께 요소 이름을 사용하지 않는다.

불필요한 상위 선택자를 사용하는 것은 [성능상 이슈](https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)를 발생시킨다.

```css
/* 잘못된 예 */
ul.example {}
div.error {}

/* 옳바른 예 */ 
.example {}
.error{}
```

### 4-1-4. ID 선택자

ID 속성은 선택자로 사용하지 않는다. ID 속성은 고유해야 하며 페이지의 구성 요소가 많을 수록 다른 엔지니어와 충돌할 위험이 있다.

```css
/* 잘못된 예 */
#example {}

/* 옳바른 예 */
.example {}
```

### 4-1-5. 단축 속성

가능한 단축 속성을 사용하도록 한다.

```css
/* 잘못된 예 */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* 옳바른 예 */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

### 4-1-6. 단위

값이 “0”인 경우 단위가 생략 가능한 속성일 때는 단위를 생략한다.

```css
flex: 0px; /* flex-basis 속성의 경우 단위가 필요하다. */
margin: 0;
padding: 0;
```

### 4-1-7. 1 과 -1 사이의 값 표기

1과 -1 사이의 값들의 앞에 항상 “0” 을 포함한다.

```css
/* 잘못된 예 */
font-size: .8em;
transition: all .2s ease-in-out;

/* 옳바른 예 */
font-size: 0.8em;
transition: all 0.2s ease-in-out;
```

### 4-1-8. 16진수 표기법

16진수 컬러값은 가능한 축약하여  표기하며 영문은 소문자만 사용한다.

```css
/* 잘못된 예 */
color: #eebbcc;
color: #EEEEEE;

/* 옳바른 예 */
color: #ebc;
color: #eee;
```

### 4-1-9. Important 선언

가능한 !important 를 선언하지 않는다.

!important 를 자주 사용할 경우 CSS의 종속성 유지와 구성을 여럽게 만든다.

```scss
/* 잘못된 예 */
font-weight: bold !important;

/* 옳바른 예 */
font-weight: bold;
```

### 4-1-10. Hack

CSS 핵은 사용하지 않는다. 핵을 사용을 허용하게되면 지나치게 많은 범위의 스타일을 일괄적으로 변경하게 되고 이를 해결하기 위해 지속적인 핵 사용이나 불필요한 스타일을 추가해야할 수 있다. 이는 장기적으로 프로젝트의 유지관리를 어렵게 만든다.

## 4-2. 서식 규칙

### 4-2-1. 선언 순서

기본적으로 알파벳 순으로 선언한다. 일관된 순서를 자동화하는 도구를 사용하지 않는 경우 쉽게 배우고 유지 관리가 가능한 것은 알파벳순이다.

```scss
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

### 4-2-2. 들여쓰기

계층 구조를 반영하고 이해를 향상시키기 위해 모든 블록 컨텐츠는 들여쓴다.

SCSS의 경우 들여쓰기를 너무 많이 하게되면 가독성을 저하시키므로 가능한 3번 이하로 구조를 잡는다.

```scss
@media screen, projection {

  html {
    background: #fff;
    color: #444;

    .example {}
  }

}
```

### 4-2-3. 세미콜론( ; )

모든 속성은 반드시 세미콜론( ; )으로 끝낸다.

```scss
/* 잘못된 예 */
.test {
  display: block;
  height: 100px /* 반드시 세미콜론으로 끝낸다. */
}

/* 옳바른 예 */
.test {
  display: block;
  height: 100px;
}
```

### 4-2-4. 속성 이름

모든 속성의 이름은 콜론( : )으로 끝내며 콜론과 속성 값에는 1개의 공백을 추가한다.

```scss
/* 잘못된 예 */
.video {
	margin-top:1em; // 콜론(:) 다음 공백을 추가한다.
}

/* 옳바른 예 */
.video {
  margin-top: 1em;
}
```

### 4-2-5. 선택자와 선언의 분리

각 선택자와 선언은 항상 새 줄로 시작한다.

```scss
/* 잘못된 예 */
a:focus, a:active { // 선택자는 항상 새 줄로 시작한다.
  position: relative; top: 1px; // 선언은 항상 새 줄로 시작한다.
}

/* 옳바른 예 */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

### 4-2-6. 인용 부호

특정 선택자 및 속성 값에 큰따옴표(””) 대신 작은따옴표(’’)를 사용한다.

URL에는 따옴표를 사용하지 않는다.

단, SCSS 의 @import 와 같은 구문의 선언 시에는 큰따옴표(””)를 사용한다.

```scss
/* 잘못된 예 */
@import url("https://www.google.com/css/maia.css");
html {
  font-family: "open sans", sans-serif;
}

/* 옳바른 예 */
@import url(https://www.google.com/css/maia.css);
html {
  font-family: 'open sans', sans-serif;
}

/* SCSS 의 경우 */
@import "index";
```
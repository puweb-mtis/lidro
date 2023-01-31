var mapContainer1 = document.getElementById('map1'), // 지도를 표시할 div
  mapOption1 = {
    center: new kakao.maps.LatLng(37.4040237290805, 127.100089555162), // 지도의 중심좌표
    level: 4 // 지도의 확대 레벨
  };

var map1 = new kakao.maps.Map(mapContainer1, mapOption1); // 지도를 생성합니다

var imageSrc1 = '/assets/images/icons/map_marker.svg', // 마커이미지의 주소입니다
  imageSize1 = new kakao.maps.Size(48, 48), // 마커이미지의 크기입니다
  imageOption1 = {offset: new kakao.maps.Point(24, 48)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
  markerPosition1 = new kakao.maps.LatLng(37.4040237290805, 127.100089555162); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker1 = new kakao.maps.Marker({
  position: markerPosition1,
  image: markerImage1 // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다
marker1.setMap(map1);


var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div
  mapOption2 = {
    center: new kakao.maps.LatLng(37.393751289319, 126.973895372474), // 지도의 중심좌표
    level: 4 // 지도의 확대 레벨
  };

var map2 = new kakao.maps.Map(mapContainer2, mapOption2); // 지도를 생성합니다

var imageSrc2 = '/assets/images/icons/map_marker.svg', // 마커이미지의 주소입니다
  imageSize2 = new kakao.maps.Size(48, 48), // 마커이미지의 크기입니다
  imageOption2 = {offset: new kakao.maps.Point(24, 48)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
  markerPosition2 = new kakao.maps.LatLng(37.393751289319, 126.973895372474); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker2 = new kakao.maps.Marker({
  position: markerPosition2,
  image: markerImage2 // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다
marker2.setMap(map2);
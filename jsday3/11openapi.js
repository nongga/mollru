document.getElementById('search').addEventListener('click',function(){
    const query = document.getElementById('query').value
    if(query=="") alert('검색어는 필수 입력입니다.')
    const page = document.getElementById('page').value
    const size = document.getElementById('size').value
    //radio 버튼은 선택 되었는지
    let sort = document.getElementById('accuracy').checked
    if(sort == true) sort = 'accuracy'
    else sort='recency'

    //${...}는 ...이 변수,수식,함수... 결과값을 구해서 출력
    alert(`query=${query}&page=${page}&size=${size}&sort=${sort}`)
    search(query,page,size,sort) //새로운 검색을 위한 함수 호출

})      //함수끝

// search '트와이스',1,10,'accuracy')   //함수 정의보다 앞에서 호출하면 오류

const search = function(v1,v2,v3,v4){
//비동기 통신을 위한 객체 생성
const xhr = new XMLHttpRequest();

//1.HTTP 요청 초기화 : method,url
xhr.open("GET",`https://dapi.kakao.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}`);   //size는 기본값 10
//2. 요청 header 설정
xhr.setRequestHeader("Authorization","KakaoAK e7bf7be72cc807f12822723f25219032");
//3.HTTP요청 전송 : 추가적인 파라미터는 함께 전송
xhr.send();
//4.onload 이벤트 : 요청이 완료되고 이에대한 응답이 왔을때 실행될 onload 이벤트 핸들러 작성.
xhr.onload = function(){
        if(xhr.status==200) {
        document.getElementById('list').innerHTML=''    //새로운 검색결과만 화면에 표시하기 위해 초기화
        let $response = JSON.parse(xhr.response)        //xhr.response는 문자열 ->
        let results = $response.documents       //author,datetime,titke,url,play-t
        results.forEach(element => {             //result 배열의 각 값들을 순서대로
            const $ul = document.createElement('ul')
            const temp = `<li>${element.author}</li>
            <li>${element.title}</li>
            <li>${element.datetime}</li>
            <li>${element.play_time}</li>
            <li><a href=${element.url} target="_blank"><img src=${element.thumbnail} width="200px"></a></li>`
            //url은 a태그, thumbnail은 img태그에 속성값으로 활용할수 있습니다.

            $ul.innerHTML=temp          //ul태그의 요소를 innerHTML 설정
            document.getElementById('list').appendChild($ul)    //

        })
    }
}
}
search('')

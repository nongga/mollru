//전역변수 선언할 위치
let days = document.forms[0].days
console.log(typeof days)
console.log(typeof days.value)
days = parseInt(days.value)
console.log(typeof days)


days = document.forms[0].days   //object
let start = document.forms[0].start
let today = new Date()
start.min = dateFormat(today)
today.setDate(today.getDate()+25)
start.max = dateFormat(today)

function daySelect(){
    alert('숙박일수 ' +days.value + " 일 입니다.")
    console.log('숙박일수' + days.value + '일 입니다.')
    if(start.value != '')
    endOutput()
}

function endOutput(){
    //pasrseInt()       : select 에서 선택한 값은 typeof가 string
    let end = new Date(start.value)//선택한 입실날짜로 Date 객체 생성
    console.log('입실날짜 : ' + end)
    end.setDate(end.getDate()+parseInt(days.value))
    console.log('퇴실날짜 : ' + end)
    console.log('퇴실날짜 dateFormat : ' + dateFormat(end))
    document.forms[0].end.value=dateFormat(end)

}

function dateFormat(someday){   //날짜타입 new Date() 인자 -> yyyy-MM-dd 형식 문자열 리턴
    const month = (someday.getMonth()+1).toString().padStart(2,0)
    const date = someday.getDate().toString().padStart(2,0)
    let result = [someday.getFullYear(),month,date].join('-')

    console.log("dateFormat : " + result)
    return result
}
console.log('1.현재 날짜와 시간(로컬)')
console.log(new Date())
console.log('2.날짜를 직접 지정')
console.log(new Date(2022,7,12))
console.log(new Date(2022-07-12))
console.log('3.날짜와 시간')
console.log(new Date(2022,6,23,16,9,30))
console.log('4.세계표준시간-UTC')
console.log(new Date().toUTCString())
console.log('5.세계표준시간 - ISO')
console.log(new Date().toISOString())
console.log('6.로컬 형식 (운영체제 설정 국가)')
console.log(new Date().toLocaleDateString())
console.log('*날짜는 자바에서는 long 타입 값으로 1970-1-1 0시 기준 ms값')
console.log(new Date().getTime())
console.log('7.날짜/시간 메소드')
let today = new Date()
console.log('7-1) 년도 : ' + today.getFullYear())
console.log('7-1) 월 : ' + today.getMonth())        //월을 number로 표기할때는 0~11
console.log('7-1) 일 : ' + today.getDate())
console.log('7-1) 시 : ' + today.getHours())
console.log('7-1) 분 : ' + today.getMinutes())
console.log('7-1) 초 : ' + today.getSeconds())
console.log('8.날짜변경 메소드')
today.setFullYear(today.getFullYear()+3)        //날짜 변경
console.log('3년후 날짜 :  ' + today)
today = new Date()
today.setFullYear(today.getFullYear()-3)
console.log('3년전 날짜 :  ' + today )

let mybirth = new Date('1996-08-17')
console.log('나의 탄생일 : ' + mybirth.toLocaleString())
mybirth.setDate(mybirth.getDate() + 3000)
console.log('나의 탄생 3000일 기념일 : ' + mybirth.toLocaleDateString())

//나는 태어난지 몇일?
mybirth = new Date('1996-08-17')
let diff = new Date() - mybirth
console.log('new Date() - mybirth')
console.log(diff + "ms") //ms를 일로 바꾸기 1일 = 24시간 * ms
const $1day = 24*60*60*1000
console.log('내가 태어난지 Day+' + Math.round(diff/$1day) + "일")     //자바스크립트 반올림,올림,*버림 메소드

today = new Date()
console.log(today)

console.log("년도 : " + today.getFullYear())
console.log("월 : " +(today.getMonth()+1))
console.log("일 : " + today.getDate())
const month = (today.getMonth()+1).toString().padStart(2,0)
const date = today.getDate().toString().padStart(2,0)
let result = [today.getFullYear(),month,date].join('-')
                // 배열요소를 특정기호로 연결하기


console.log('날짜형식 yyyy-mm-dd')
console.log(result)
console.log('날짜형식 yyyymmdd')
result = [today.getFullYear(),month,Date].join('')
console.log(result)
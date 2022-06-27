//JavaScript. Home
//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let i=0
let result
while (i<10){
    i++
    result="2^"+i+"="+Math.pow(2, i)+";"
    console.log(result)
}

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

//решение 1 задачи 1*
function powering_2(exponent) {
    let i=0
    let result=[]
    while (i<exponent){
        i++
        result[i-1]="2^"+i+"="+Math.pow(2, i)+";"
    }
    return result
    
}
console.log(powering_2(10))

// решение 2 задачи 1*
function powering_2_v2(exponent) {
    let i=0
    while (i<exponent){
    i++
    console.log("2^"+i+"="+Math.pow(2, i)+";")
    }

}
powering_2_v2(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let str_to_print=""
let j=0
while (j<5){
    j++
    str_to_print=str_to_print+":)"
    console.log(str_to_print)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function smileprinter(smile, numberOfRows){
    let result=""
    let i=0
    while (i<numberOfRows){
    i++
    result=result+smile
   console.log(result)
    }
    ;
}

smileprinter(":)", 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'


function getWordStructure(word){
    let length=word.length
    word_upper_case=word.toUpperCase()
    let i=0
    let vowels_number=0
    let symbols_number=0
    let vowels=["A","E", "I", "O", "U"]
    let symbols=["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", ":", ";", "\"", "'","<", ",", ">", ".", "?", "/", "|", "\\" ]
    while (i<length){
        i++
        letter=word_upper_case.substr(i-1, 1)
        if (vowels.includes(letter)){
        vowels_number++
        }
        if (symbols.includes(letter)){
        symbols_number++
        }
    }
    return "Слово "+word+" состоит из "+vowels_number+" гласных и "+(length-vowels_number-symbols_number)+" согласных букв"
    ;   
}
console.log(getWordStructure("case"))
console.log(getWordStructure("Сase"))
console.log(getWordStructure("Check-list"))

function isPalindrom(word){
    let length=word.length
    let check
    if (length<=1){
            check=true
    }
    else{
        let pairs_to_compare=Math.floor(length)
        let pairs_equal=0
        let str_beginning
        let str_end
        let i=0
        while (i<pairs_to_compare){
            i++
            str_beginning=word.substr(i-1, 1).toUpperCase()
            str_end=word.substr(length-i, 1).toUpperCase()
            if (str_beginning===str_end){
                pairs_equal++
            }
        }   
            
        if(pairs_equal===pairs_to_compare||length===0||length===1){
            check=true
            }
        else{
            check=false
            }    
    }

    return check
}
console.log(isPalindrom("abba"))
console.log(isPalindrom("Abba"))
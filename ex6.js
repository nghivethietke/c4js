let quiz = [
    {
    cauhoi: 'Con gi tam cang hai cang?',
    a: 'con heo',
    b: 'con cho',
    c: 'concua',
    d: 'con nguoi',
    traloi: 'c',
    },
    {
    cauhoi: 'toa nha nao cao nhat viet nam',
    a: 'bitexco',
    b: 'landmark',
    c: 'nha minh',
    d: 'thanh cong',
    traloi: 'b',
    },
    {
    cauhoi: 'ai thong minh nhat',
    a: 'einstein',
    b: 'minh',
    c: 'nha bo minh',
    d: 'yyy',
    traloi: 'c',
    }
]




randomQuiz = quiz[Math.floor(quiz.length*Math.random())]
console.log(randomQuiz)


// answeredQuiz = quiz.indexOf(randomQuiz); 

// for (var prop in randomQuiz){
//     if (prop != 'traloi'){
//     console.log(prop + ":" + randomQuiz[prop]),
//     alert(prop + ":" + randomQuiz[prop])};
// }


// let traloiUser = prompt('Nhap cau tra loi a, b, c hoac d')

// if (traloiUser == randomQuiz['traloi']){
//     console.log('Ban tra loi trung phoc'),
//     alert('Ban tra loi trung phoc');
// }
// else{
//     alert('Gudd luck next time');
// }


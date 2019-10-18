// goi y, tuong tu excercise 1 trong session 4

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
    }
]


// console.log(quiz[Math.floor(quiz.length*Math.random())])

// let {cauhoi, a, b, c, d} = display

// console.log(cauhoi)

// for (var x in quiz[Math.floor(quiz.length*Math.random())]){
//     console.log(x + ":" + quiz[Math.floor(quiz.length*Math.random())]);
// }

randomQuiz = quiz[Math.floor(quiz.length*Math.random())]

for (var prop in randomQuiz){
    if (prop != 'traloi'){
    console.log(prop + ":" + randomQuiz[prop])};
}


let wordList = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
// for (let eachItem of wordList){

// }

// console.log(wordList[2])

// var y = 0
// for (x = 0; x < wordList.length; x++){
//     if (wordList[x] == 'be'){
//         y++;
//     }
// }
// console.log(y)

// for (stt = 0, stt < wordList.length, stt++){
//     wordList[stt]
// }

// uniqueList = []

// for (const x of wordList){
//     if (x  );
// }

wordList.sort()
var countedList = ''
var count = 1
for (x = 0; x < wordList.length; x++)
{
    if (wordList[x] == wordList[x+1])
    {
        count++;
    }
    else
    {
    //add count vao list 
    // reset count ve 1
    countedList = countedList += wordList[x] + count;
    count = 1;
    }
}
console.log(countedList)

// function countUnique(a){
//     return new Set(a).size;
// }
// console.log(countUnique('that'))

// // for (x = 0; x < wordList.length; x++){
// //     if (wordList[x] != wordList[x+1]){
// //         countUnique;
// //     }
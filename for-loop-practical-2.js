// for(var n=1; n < 11; n++){
//     for(var i=2; i < 4; i++){
//         document.write(i,'<br>')
//     }
//     document.write(n,'<br>');
// }

// *
// * *
// * * *
// * * * *


//         0   1   2   3   4   5 (columns)
// (Rows) 
//     0   *

//     1   *   *

//     2   *   *   *

//     3   *   *   *   *

//     4

//     5
for(var r=0; r < 4; r++){//0 1 2
    document.write('*')
    for(var c=0; c < r; c++){//0 0 < 0, 0 0 < 1 | 1 1 < 1, 0 0 < 2 | 1 < 2, 2 < 2,
        document.write('*')
    }
    document.write('<br/>')
}

// ****
// ***
// **
// *

    //   *
    //  * *
    // * * *
//1
//1 2
//1 2 3
//1 2 3 4


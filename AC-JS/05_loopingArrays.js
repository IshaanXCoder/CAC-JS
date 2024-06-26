    let array = [1, 2, 3, 4, 5];


    // to print all elements of the arrayy
    // M1 is :
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
    console.log(array[4]);


    console.log("    ");


    //M2 is :
    for(i=0; i<=4; i++){
        console.log(array[i]);
    }


    console.log("    ");


    //M3 is :
    //  for...of loops

    for(let item of array){
        console.log(item);
    }

    console.log("    ");

    //M4
    //  for...in loops
    for(let rank in array){
        console.log(rank);
    }
    //for in loop woll print the rank of the array element, now to print the item on that rank:

    for(let rank in array){
        console.log(array[rank]);
    }
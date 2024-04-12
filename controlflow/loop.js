for (let i = 0; i <= 10; i++) {
    // const element = i;

    // console.log(` Outer Loop index  ${i}`)

    for (let j = 0; j <= 10; j++) {
        // const element = j;
        // console.log(` Inner Loop${j}`);

        // console.log(`${i} * ${j} =  ${i * j}`);
    }


}

for (let i = 0; i <= 20; i++) {
    // const element = i;
    if (i == 5){
        console.log("5 dected");
        continue
    }
    console.log(`value of ${i}`);
    
}
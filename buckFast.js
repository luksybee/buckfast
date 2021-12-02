
(function buckfast(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log('buckfast');
        } else if (i % 5 === 0) {
            console.log('fast');
        } else if (i % 3 === 0) {
            console.log('buck');
        } else {
            console.log(i);
        }
    }
})(33)


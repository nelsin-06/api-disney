function podraCumplir(caso) {
    let cumplio = [];
    for (let index = 0; index < caso.length; index++) {
        let D = caso[index][0];
        let T = caso[index][1];
        let F = caso[index][2];
        let R = caso[index][3];
        for (let i = 0; i < D; i++) {
            T -= F;
            if (T <= 0) {
                cumplio.push(1);
            } else {
                T += R;
            };
        };
    }
    return cumplio;
};

console.log(podraCumplir([[2, 40, 20, 5], [2, 40, 20, 5]]));

const prueba = [1, 2];
prueba[0] = 6;
console.log(prueba)
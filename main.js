'use strict'

const sqwareSolver = (a, b, c) => {
    console.log (`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
    const discriminant = b*b-4*a*c;
    const sqrtDiscriminant = Math.sqrt(discriminant);
    if (discriminant > 0) {
        const x1 = (-1*b + sqrtDiscriminant) / (2 * a);
        const x2 = (-1*b - sqrtDiscriminant) / (2 * a);
        console.log(`There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`);
    } else if (discriminant === 0) {
        const x1 = (-1*b + sqrtDiscriminant) / (2 * a);
        console.log(`There is 1 root\nx1 = ${x1}`);
    } else {
        console.log('There is no roots');
    }
}

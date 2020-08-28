/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;

function sumTillNum(num) {
    let string = '';
    let init = 0
    while (init <= num) {
        if (init != num) {
            string += init + ' + ';
        } else {
            string += init;
        }
        init++; //your code here
    }
    return string;
}
console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
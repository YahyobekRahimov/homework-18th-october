// Tub ko'paytma

const multipleOfPrime = function(N) {
    let multiplication = 1n;
    for (let i = 1; i <= N; i++) {
        let divisorCount = 0;
        let i2 = 0; 
        while (i >= i2) {
            if (i % i2 == 0) {
                divisorCount++;
            }
            i2++;
        }
        if (divisorCount == 2) {
            multiplication *= BigInt(i);
        }
    }
    let lastDigit = 0;
    let zeros = 0;
    while (multiplication >= 1) {
        lastDigit = multiplication % 10n;
        if (lastDigit == 0) {
            zeros++;
        } else {
            return zeros;
        }
        multiplication = multiplication / 10n; 
    }
    return zeros;
}

// Poyezdga chipta

function ticketPriceClass(wagonNumber) {
    let ticketPrice = null;
    let ticketClass = null;
    switch (wagonNumber) {
        case 1:
        case 10: 
            ticketPrice = 210;
            ticketClass = "VIP";
            break;
        case 8:
        case 9:
            ticketPrice = 140;
            ticketClass = "Biznes";
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            ticketPrice = 105;
            ticketClass = "Ekonom";
            break;
        default:
            return "Noto'g'ri vagon raqamini kiritdingiz";
    }
    return ticketClass + " " + ticketPrice + "K" ;
}

// Minimum va maksimum yig'indi
const maxMinSum = (a, b, c, d, e) => {
    max = a;
    min = b;
    if (max < min) {
        max = b;
        min = a;
    }
    if (min > c) c = min;
    if (min > d) min = d;
    if (min > e) min = e;
    if (c > max) max = c;
    if (d > max) max = d;
    if (e > max) max = e;
    let sum = a + b + c + d + e;
    let minSum = sum - max;
    let maxSum = sum - min;
    console.log(minSum, maxSum);
}

// Floyd uchburchagi
const floydTriangle = (legLength) => {
    for (let i = 1, number = 1; i <= legLength; i++) {
        let firstLine = "";
        for (let i2 = 1; i2 <= i; i2++) { 
            firstLine += String(number) + " ";
            number++;
        } 
        console.log(firstLine);
    }
}

// Imtihon daftarlari
const examNotebooks = (studentCount, numberOrder) => {
    let sum = '';
    for (let i = 1; i <= studentCount; i++) {
        sum += i + " ";
    }
    if (sum == (numberOrder + ' ')) {
        return 'YES';
    } else {
        return "NO";
    }
}
// console.log(examNotebooks(10, '1 2 3 4 5 6 7 8 9 10'));


// Object masalalar.

// Object 1-masala tepadagi birinchi masala bilan bir xil ekan.

// Object 2
const EvenNumbersProduct = (N) => {
    let arr = new Array();
    // let arr = [];
    let product = 1;
    for (let i = 1; i <= N; i++) {
        let randomNumber = Math.trunc(Math.random() * 10);
        arr.push(randomNumber);
    }
    console.log(arr);
    for (let i = 2; i < N; i += 2) {
        product *= arr[i];
    }
    return product;
}
// console.log(EvenNumbersProduct(10));

// Object 3
const arrayElementSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        if (!(isNaN(arrElement)) && arrElement % 5 != 0 && arrElement % 7 != 0) {
            sum += arrElement;
        }
    } 
    return sum;
}
// console.log(arrayElementSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Object 4
const powerOfThree = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrayNumber = arr[i];
        let iteration = 1;
        if (arrayNumber == 1) {
            counter++;
        } else {
            while (arrayNumber >= iteration) {
                if (arrayNumber == iteration) {
                    counter++;
                }
                iteration *= 3;
        }
        }
    }
    return counter;
}
// console.log(powerOfThree([1, 81, 243]));

// Object 5
const sevenCharacteredElement = (arr) => {
    let counter = null;
    for (let i = 0; i < arr.length; i++) {
        let arrayElement = arr[i];
        if (typeof arrayElement == "string") {
            if (arrayElement.length == 7) {
                counter++;
            }
        }
    }
    return counter;
}
// console.log(sevenCharacteredElement(["1234567", "1234567", "1234567", '2132', "1234567", 342]));

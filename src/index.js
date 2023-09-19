module.exports = function toReadable (number) {
   let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let numTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const str = String(number);
   const n = str.length;

   if (number < 20) {
        return num[number];
   } else if (n === 2 & number % 10 === 0) {
        return numTens[number/10-2];
   } else if (n === 3 & number % 100 === 0) {
        return num[number/100] + ' hundred';
   } else if (n === 2 & number % 10 !== 0 ) {
        return numTens[Math.trunc(number/10)-2] + ' ' + num[number%10];
   } else if (n === 3 & number % 100 !== 0) {
        if (number % 100 === 10) {
            return num[Math.trunc(number/100)] + ' hundred ' + num[number%100];
        } else if (number % 10 === 0) {
            return num[Math.trunc(number/100)] + ' hundred ' + numTens[(number - Math.trunc(number/100)*100)/10 -2];
        } else if (number%100 > 20){
            return num[Math.trunc(number/100)] + ' hundred ' + numTens[Math.trunc((number - Math.trunc(number/100)*100)/10) -2] + ' ' + num[number%10];
        } else if (number%100 < 20) {
            return num[Math.trunc(number/100)] + ' hundred ' + num[number%100];
        }
   }
}
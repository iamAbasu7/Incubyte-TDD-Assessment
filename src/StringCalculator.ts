export class StringCalculator {
    add(numbers: string): number {
      console.log(`Input: ${numbers}`);
      try {
        if (numbers === '') {
          return 0;
        }
  
        let delimiter = ',';
        if (numbers.startsWith('//')) {
          const delimiterEndIndex = numbers.indexOf('\n');
          if (delimiterEndIndex === -1) {
            throw new Error('Invalid input format');
          }
          delimiter = numbers.substring(2, delimiterEndIndex);
          numbers = numbers.substring(delimiterEndIndex + 1);
        }
  
        console.log(`Delimiter: ${delimiter}`);
        console.log(`Numbers: ${numbers}`);
  
        const escapedDelimiter = delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const numArray = numbers.split(new RegExp(`[${escapedDelimiter}\n]`)).map(num => {
          const parsedNum = Number(num);
          if (isNaN(parsedNum)) {
            throw new Error('Invalid number format');
          }
          return parsedNum;
        });
  
        console.log(`Number Array: ${numArray}`);
  
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
          throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
  
        return numArray.reduce((acc, num) => acc + num, 0);
      } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
        return 0; 
      }
    }
  }
  
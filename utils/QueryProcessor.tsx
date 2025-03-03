function scrabbleScore(word : string) {
  const letterValues : { [key: string]: number } = {
      A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, 
      J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, 
      S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
  };

  return word.toUpperCase()
             .split('')
             .reduce((score, letter) => score + (letterValues[letter] || 0), 0);
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Team Charles";
  }

  if (query.includes("largest")) {
    const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
    if (addMatch) {
      const numArray = [parseInt(addMatch[1]), parseInt(addMatch[2]), parseInt(addMatch[3])]
      return Math.max(...numArray).toString();
    }
  }

  if (query.includes("plus") && query.includes("multiplied")) {
    const addMatch = query.match(/What is (\d+) plus (\d+) multiplied by (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      return ((x+y)*z).toString();
    }

    const addMatch2 = query.match(/What is (\d+) multiplied by (\d+) plus (\d+)/);
    if (addMatch2) {
      const x: number = parseInt(addMatch2[1]);
      const y: number = parseInt(addMatch2[2]);
      const z: number = parseInt(addMatch2[3]);
      return (x*y+z).toString();
    }
  }

  if (query.includes("plus")) {
    const addMatch = query.match(/What is ((?:\d+ plus )*\d+)/);
    if (addMatch) {
      const numArray = addMatch[1].split(' plus ').map(Number);
      const sum = numArray.reduce((acc, num) => acc + num, 0);
      return (sum).toString();
    }
  }

  if (query.includes("minus")) {
    const addMatch = query.match(/What is ((?:\d+ minus )*\d+)/);
    if (addMatch) {
      const numArray = addMatch[1].split(' minus ').map(Number);
      const sum = numArray[0] - numArray.slice(1).reduce((acc, num) => acc + num, 0);
      return (sum).toString();
    }
  }

  if (query.includes("multiplied")) {
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x*y).toString();
    }
  }

  if (query.includes("square")) {
    const addMatch = query.match(/Which of the following numbers is both a square and a cube: ((?:\d+, )*\d+)/)
    if (addMatch) {
      const numArray = addMatch[1].split(', ').map(Number);
      const squareAndCube = numArray.filter(num => Math.sqrt(num) % 1 === 0 && Math.cbrt(num) % 1 === 0)
      //add space between numbers
      return squareAndCube.join(", ");
    }
  }

  if (query.includes("Which of the following is the largest: ")) {
    const maxMatch = query.match(/Which of the following is the largest: (\d+), (\d+), (\d+)/);
    if (maxMatch) {
      const x: number = parseInt(maxMatch[1]);
      const y: number = parseInt(maxMatch[2]);
      const z: number = parseInt(maxMatch[3]);
      return Math.max(x, y, z).toString();
    }
  }

  if (query.includes("primes")) {
    const addMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/)
    if (addMatch) {
      const numArray = [parseInt(addMatch[1]), parseInt(addMatch[2]), parseInt(addMatch[3]), parseInt(addMatch[4]), parseInt(addMatch[5])]
      const primes = numArray.filter(num => {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num > 1;
      })
      return primes.join(", ");
    }
  }

  if (query.includes("power")) {
    const addMatch = query.match(/What is (\d+) to the power of (\d+)?/)
    if (addMatch) {
      const numArray = [parseInt(addMatch[1]), parseInt(addMatch[2])]
      const result = Math.pow(numArray[0], numArray[1]);
      return result.toString();
    }
  }

  return "";
}

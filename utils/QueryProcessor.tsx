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
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
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
    const addMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/)
    if (addMatch) {
      const numArray = [parseInt(addMatch[1]), parseInt(addMatch[2]), parseInt(addMatch[3]), parseInt(addMatch[4]), parseInt(addMatch[5]), parseInt(addMatch[6]), parseInt(addMatch[7])]
      const squareAndCube = numArray.filter(num => Math.sqrt(num) % 1 === 0 && Math.cbrt(num) % 1 === 0)
      //add space between numbers
      return squareAndCube.join(", ");
    }
  }

  return "";
}

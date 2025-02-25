import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Team Charles"
          ));
    })

    test('should return name', () => {
        const query = "Which of the following numbers is both a square and a cube: 729, 1796, 4624, 2617, 3633, 1659, 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "729, 64"
          ));
    })

    test('should return name', () => {
        const query = "What is 1 plus 2 plus 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "6"
          ));
    })
});
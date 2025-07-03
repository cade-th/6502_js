// Import the class to test
import { Lexer } from "../src/lexer/lexer.js";

const input = await Deno.readTextFile("./6502/simple.cade");

// A test case using Deno's built-in test function
Deno.test("Lexer reads characters", () => {

    const lexer = new Lexer(input);
    
    lexer.readChar();  // Should set `lexer.ch` to 'L'
    
    // Assertions
    if (lexer.ch !== 'L') {
        throw new Error(`Expected 'L', got '${lexer.ch}'`);
    }
});

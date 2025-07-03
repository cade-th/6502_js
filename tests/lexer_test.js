// Import the class to test
import { Lexer } from "../src/lexer/lexer.js";

// A test case using Deno's built-in test function
Deno.test("Lexer reads characters", () => {
    const lexer = new Lexer("Hello, Deno!");
    
    lexer.readChar();  // Should set `lexer.ch` to 'H'
    lexer.readChar();  // Should set `lexer.ch` to 'e'
    
    // Assertions
    if (lexer.ch !== 'e') {
        throw new Error(`Expected 'e', got '${lexer.ch}'`);
    }
});

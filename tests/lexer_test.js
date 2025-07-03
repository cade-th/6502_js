// Import the class to test
import { Lexer, lex_error } from "../src/lexer/lexer.js";
import { Error_t } from "../src/util/util.js";

const input = await Deno.readTextFile("./6502/simple.cade");

// A test case using Deno's built-in test function
Deno.test("Lexer reads characters", () => {

    const lexer = new Lexer(input);
    
    const error = lexer.lex();  

    if (error.ok) {
        return;
    }
    else {
        switch (error.type) {
            case lex_error.FUNCTION_BODY:
                throw error; break;
        }
    }
});

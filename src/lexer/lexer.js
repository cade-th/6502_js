import { Error_t } from "../util/util.js";

// IG these are basically enums in js
export const lex_error = Object.freeze({
  FUNCTION_BODY: 'function body',
});

const error = new Error_t(lex_error);

export class Lexer {
    constructor(input) {
        this.position = 0;
        this.read_position = 0;
        this.ch = 0;
        this.input = input;
    }

    read_char() {
        if (this.read_position >= this.input.length) {
            this.ch = 0;
        } else {
            this.ch = this.input[this.read_position];
        }
        this.read_position++;
    }

    lex() {
        error.type = lex_error.FUNCTION_BODY;
        error.data = "this is crazy";
        return error;
    }
}


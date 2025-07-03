// lexer.js

export class Lexer {
    constructor(input) {
        this.position = 0;
        this.read_position = 0;
        this.ch = 0;
        this.input = input;
    }

    // Example method
    readChar() {
        if (this.read_position >= this.input.length) {
            this.ch = 0;
        } else {
            this.ch = this.input[this.read_position];
        }
        this.read_position++;
    }

    // Add more methods as necessary...
}


import { Lexer } from './lexer/lexer.js'

async function main() {
	const lexer = new Lexer("Hello World");
	
	const input = await Deno.readTextFile("./6502/simple.cade");
	console.log(input);
}

main()


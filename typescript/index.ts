interface TemNome {
  nome: string;
}

interface TemSobrenome {
  sobrenome: string;
}

class Aluno implements TemNome, TemSobrenome {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
  ) { }
}

const aluno = new Aluno("Rafael", "Torraca", 30);
console.log(aluno);


type CalculatorFn = (x: number, y: number) => number;

const add: CalculatorFn = (x, y) => x + y;
const sub: CalculatorFn = (x, y) => x - y;
const mul: CalculatorFn = (x, y) => x * y;
const div: CalculatorFn = (x, y) => x / y;

const twoPlusTwo = add(2, 2);
const twoMinusTwo = sub(2, 2);
const twoTimesTwo = mul(2, 2);
const twoDividedByTwo = div(2, 2);

console.log(twoPlusTwo);
console.log(twoMinusTwo);
console.log(twoTimesTwo);
console.log(twoDividedByTwo);


type ProgrammingLanguages = "Python" | "Javascript" | "TypeScript";

function sayFavoriteProgrammingLanguage(language: ProgrammingLanguages) {
  return `You like ${language}`;
}

const favoriteLanguage = sayFavoriteProgrammingLanguage("Python");
console.log(favoriteLanguage);

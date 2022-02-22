var Aluno = /** @class */ (function () {
    function Aluno(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    return Aluno;
}());
var aluno = new Aluno("Rafael", "Torraca", 30);
console.log(aluno);
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var mul = function (x, y) { return x * y; };
var div = function (x, y) { return x / y; };
var twoPlusTwo = add(2, 2);
var twoMinusTwo = sub(2, 2);
var twoTimesTwo = mul(2, 2);
var twoDividedByTwo = div(2, 2);
console.log(twoPlusTwo);
console.log(twoMinusTwo);
console.log(twoTimesTwo);
console.log(twoDividedByTwo);
function sayFavoriteProgrammingLanguage(language) {
    return "You like ".concat(language);
}
var favoriteLanguage = sayFavoriteProgrammingLanguage("Python");
console.log(favoriteLanguage);

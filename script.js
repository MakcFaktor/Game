// Створюємо масив із слів
let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "привіт"
];

// Обираємо випадкове слово 
let word = words[Math.floor(Math.random() * words.length)];

// Встановлюємо масив відповідей
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

// Ігровий цикл 
while (remainingLetters > 0) {
    // Показуємо гравцю його прогрес
    alert(answerArray.join(" "));

    // Отримуємо варіанти відповідей від гравця
    let guess = prompt("Вгадайте букву або натисніть «Скасувати», щоб припинити гру.").toLowerCase();
    if (guess === null) {
        // Виходимо з ігрового циклу
        break;
    } else if (guess.length !== 1) {
        alert("Будь ласка, введіть одну літеру.");
    } else {
        // Перевіряємо, чи є літера у слові
        let isGuessCorrect = false;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                isGuessCorrect = true;
            }
        }

        if (!isGuessCorrect) {
            alert("Такої літери немає в слові.");
        }
    }
}

// Показуємо відповідь і вітаємо гравця
alert(answerArray.join(" "));
alert("Хороша робота! Відповідь була: " + word);

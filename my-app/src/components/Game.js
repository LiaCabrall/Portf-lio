import { useState } from 'react';
import styles from './Game.module.css';

export function Game() {
    const [secret, setSecret] = useState(generateSecret());
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState([]);

    function generateSecret() {
        const digits = [];
        while (digits.length < 4) {
            const randomDigit = Math.floor(Math.random() * 10);
            if (!digits.includes(randomDigit)) {
                digits.push(randomDigit);
            }
        }
        return digits.join('');
    }

    function calculateBullsAndCows(guess, secret) {
        let bulls = 0;
        let cows = 0;

        guess.split('').forEach((digit, index) => {
            if (digit === secret[index]) {
                bulls++;
            } else if (secret.includes(digit)) {
                cows++;
            }
        });

        return { bulls, cows };
    }

    function handleGuessSubmit(e) {
        e.preventDefault();
        if (guess.length !== 4 || !/^\d+$/.test(guess)) {
            alert('Digite um número de 4 dígitos únicos!');
            return;
        }

        const { bulls, cows } = calculateBullsAndCows(guess, secret);
        setAttempts([{ guess, bulls, cows }, ...attempts]);
        setGuess('');
    }

    function revealSecret() {
        alert(`A combinação secreta é: ${secret}`);
    }

    return (
        <div className={styles.gameContainer}>
            <h1 className={styles.title}>Jogo Senha</h1>
            <button className={styles.revealButton} onClick={revealSecret}>
                Revelar Senha
            </button>
            <form className={styles.form} onSubmit={handleGuessSubmit}>
                <input
                    type="text"
                    className={styles.input}
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    maxLength="4"
                    placeholder="Digite 4 dígitos"
                />
                <button type="submit" className={styles.submitButton}>
                    Enviar Palpite
                </button>
            </form>
            <div className={styles.attemptsList}>
                <h2>Tentativas</h2>
                <ul>
                    {attempts.map((attempt, index) => (
                        <li key={index} className={styles.attempt}>
                            <span>Palpite: {attempt.guess}</span> -{' '}
                            <span>{attempt.bulls} Bulls</span>,{' '}
                            <span>{attempt.cows} Cows</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

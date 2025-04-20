import express from 'express';
import { getPrimeNumbers, getFibonacciNumbers, getEvenNumbers, getRandomNumbers } from './services/numberService.js';
import { updateWindowState, getWindowState } from './utils/store.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 9876;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Number API! Use /numbers/p, /numbers/f, /numbers/e, or /numbers/r");
});

app.get('/numbers/p', (req, res) => {
    const newNumbers = getPrimeNumbers(); 
    const { windowPrevState, windowCurrState, numbers } = updateWindowState(newNumbers);
    const avg = calculateAverage(windowCurrState);
    res.json({ windowPrevState, windowCurrState, numbers, avg });
});

app.get('/numbers/f', (req, res) => {
    const newNumbers = getFibonacciNumbers();
    const { windowPrevState, windowCurrState, numbers } = updateWindowState(newNumbers);
    const avg = calculateAverage(windowCurrState);
    res.json({ windowPrevState, windowCurrState, numbers, avg });
});

app.get('/numbers/e', (req, res) => {
    const newNumbers = getEvenNumbers(); 
    const { windowPrevState, windowCurrState, numbers } = updateWindowState(newNumbers);
    const avg = calculateAverage(windowCurrState);
    res.json({ windowPrevState, windowCurrState, numbers, avg });
});

app.get('/numbers/r', (req, res) => {
    const newNumbers = getRandomNumbers(); 
    const { windowPrevState, windowCurrState, numbers } = updateWindowState(newNumbers);
    const avg = calculateAverage(windowCurrState);
    res.json({ windowPrevState, windowCurrState, numbers, avg });
});

const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;

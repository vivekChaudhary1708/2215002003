# Average Calculator Microservice

This is an Average Calculator microservice built using Node.js and Express. The service provides APIs to fetch numbers from various categories (Prime, Fibonacci, Even, Random) and calculates the average of the latest 10 numbers, ensuring that duplicates are not included and old numbers are replaced when the window is full.

## Features

- **Prime numbers API**: `/numbers/p`
- **Fibonacci numbers API**: `/numbers/f`
- **Even numbers API**: `/numbers/e`
- **Random numbers API**: `/numbers/r`

Each API responds with:
- Previous window state
- Current window state (up to 10 numbers)
- Newly fetched numbers
- Average of the current numbers

## Setup and Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/vivekChaudhary1708/2215002003.git

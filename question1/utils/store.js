let windowPrevState = [];
let windowCurrState = [];
const windowSize = 10;

export const updateWindowState = (newNumbers) => {
   
    windowPrevState = [...windowCurrState];

   
    const uniqueNumbers = newNumbers.filter(num => !windowCurrState.includes(num));

   
    windowCurrState = [...windowCurrState, ...uniqueNumbers];

   
    if (windowCurrState.length > windowSize) {
        windowCurrState = windowCurrState.slice(-windowSize);
    }

    
    const avg = windowCurrState.reduce((acc, num) => acc + num, 0) / windowCurrState.length;

    return { windowPrevState, windowCurrState, numbers: uniqueNumbers, avg };
};

export const getWindowState = () => {
    return { windowPrevState, windowCurrState };
};

const cliWidth = 80;

const m = 2; // multiplier

const treePipes = [
  [7, 1], // start, number of pipes
  [6, 3],
  [5, 5],
  [4, 7],
  [3, 9],
  [2, 11],
  [1, 13],
];

const RED = '\033[0;31m';
const GREEN = '\033[0;32m';
const YELLOW = '\033[1;33m';
const DARK = '\033[1;30m';
const NC='\033[0m';


const colors = [RED, GREEN, YELLOW, NC];

// https://stackoverflow.com/a/7228322/2710227
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randId = () => randomIntFromInterval(0, 3);

const randomColorPipe = () => `${colors[randId()]}|${NC}`

const renderTree = (treeLayer) => treePipes.forEach((row, rowId) => {
  if (treeLayer === 1 && rowId > treePipes.length - 3) {
    return;
  } else if (treeLayer === 2 && rowId > treePipes.length - 2) {
    return;
  }

  let rowPipes = '';

  for (let i = 0; i < m * 15; i++) {
    const startPipe = m * row[0];
    const pipes = m* row[1];

    if (i < startPipe || i >= (startPipe + pipes)) {
      rowPipes += `${DARK}|${NC}`;
    } else {
      if (rowId === 0) {
        rowPipes += `${YELLOW}|${NC}`;
      } else {
        rowPipes += randomColorPipe();
      }
    }
  }

  console.log(rowPipes);
});

const delay = (sec) => { 
  setTimeout(() => {
    renderTree(1);
    renderTree(2);
    renderTree(3);
    delay();
  }, sec || 1000);
};

module.exports = {
  delay,
}

// can make it auto scale with
// https://stackoverflow.com/a/44302165/2710227
// get height of terminal
// too lazy though, designed for small phone

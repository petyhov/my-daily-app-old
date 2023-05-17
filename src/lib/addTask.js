const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const result = [];

let i = 1,
  z = 1;

while (z < 20) {
  if (z + i <= 20) {
    result.push({
      id: uuidv4(),
      first: z,
      operation: 'plus',
      second: i,
      equal: z + i,
    });
  }
  i++;

  if (i === 20) {
    i = 1;
    z++;
  }
}

i = 19;
z = 19;

while (z > 0) {
  if (z - i > 0) {
    result.push({
      id: uuidv4(),
      first: z,
      operation: 'minus',
      second: i,
      equal: z - i,
    });
  }

  i--;
  if (i === 0) {
    i = 29;
    z--;
  }
}

fs.writeFileSync('src/data/mathTasks.json', JSON.stringify(result));

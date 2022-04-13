const fs = require('fs');

const breedDetailsFromFile = (breed, returnData) =>  {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if(!error) return returnData(data);

    returnData(undefined);
  });
};

const printBreedDetails = (details) => {
  console.log('Return Value: ', details);
};

//const bombay = breedDetailsFromFile('Bombay', printBreedDetails);;

module.exports = breedDetailsFromFile;



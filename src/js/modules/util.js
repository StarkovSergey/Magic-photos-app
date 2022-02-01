const getRandomNumber = (min, max) => min + Math.round((max - min) * Math.random());

export const getUniqueRandomNumbers = (min, max, count) => {
  if ((max - min) < count) {
    throw new Error('You should choose another range')
  }

  const storage = [];

  for (let i = 0; i <= count; i++) {
    let number = getRandomNumber(min, max);
    while(storage.includes(number)) {
      number = getRandomNumber(min, max);
    }
    storage.push(number);
  }

  return storage;
};

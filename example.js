const promise3 = require('./promise3');

function sleep(sec) {
  return new promise3((resolve, reject) => {
    setTimeout(() => resolve(sec), sec * 1000);
  });
}

let p = new promise3((resolve, reject) => {
  resolve('hello' + Math.random());
});

p
  .then((val) => {
    console.log(val);
    return sleep(3);
  })
  .then((val) => {
    return 'world';
  })
  .then((val) => {
    console.log(val);
    return sleep(3);
  })
  .then(() => {
    console.log('over');
  })


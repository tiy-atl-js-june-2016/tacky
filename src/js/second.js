console.log("This is javascript from another file called second.js");

var numbers = [1,2,3,4];

var names = ["brit", "tony", "terry"];

var dog = {
  name: 'jurgen',
  breed: 'everything',
  mangy: 'definitely',
  emotions: ['anxious', 'concerned', 'hungry']
};

function bumpNums () {
  numbers = numbers.map(function (x) { return x + 1; });
  console.log(numbers);
}

var sum = 0;
// debugger;
for(var i=0; i < 10; i++) {
  sum += i;
}

export {names, numbers, bumpNums, dog as bagel};

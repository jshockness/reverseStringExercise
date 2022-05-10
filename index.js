// create a function that reverses a string:
// 'Hi My Name is Jason' should be:
// 'nosaJ si emaN yM ,iH'

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "Thats not a string"
  }
  
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  // return backwards.toString()
  return backwards.join('');
}
console.log(reverse)

function reverse2(str){
  return str.split('').reverse().join('')
}
console.log(reverse2)

const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3)

reverse('Hi My Name is Jason')
reverse2('Hi My Name is Jason')
reverse3('Hi My Name is Jason')
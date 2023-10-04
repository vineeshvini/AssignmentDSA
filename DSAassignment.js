// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seen = {};
  
    for (let i = 0; i < arr.length; i++) {
      const complement = targetSum - arr[i];
  
      if (seen[complement]) {
        pairs.push([arr[i], complement]);
      }
  
      seen[arr[i]] = true;
    }
  
    return pairs;
  }
  
  const arr = [1, 2, 3, 4, 5, 6];
  const targetSum = 7;
  
  const result = findPairsWithSum(arr, targetSum);
  
  if (result.length > 0) {
    console.log(`Pairs with sum ${targetSum}:`);
    result.forEach(pair => {
      console.log(`[${pair[0]}, ${pair[1]}]`);
    });
  } else {
    console.log("No pairs found.");
  }

  
//   Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
    
      left++;
      right--;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  
  console.log(myArray); // Output: [5, 4, 3, 2, 1]


//   Q3. Write a program to check if two strings are a rotation of each other?

  function areRotations(str1, str2) {
    
    if (str1.length !== str2.length) {
      return false;
    }
  

    const concatenatedStr = str1 + str1;
  

    if (concatenatedStr.includes(str2)) {
      return true;
    }
  
    return false;
  }
  

  const string1 = "waterbottle";
  const string2 = "erbottlewat";
  
  if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
  } else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
  }
  
//   Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedCharacter(str) {
    const charCount = {};
  
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    
    return null; 
}
  
  const inputString = "programming"
    const result = firstNonRepeatedCharacter(inputString);
  
  if (result !== null) {
    console.log(`The first non-repeated character is: ${result}`);
  } else {
    console.log("No non-repeated character found.");
  }
  

//   Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


function towerOfHanoi(n, sourcePeg, auxiliaryPeg, targetPeg) {
    if (n === 1) {
      
      console.log(`Move disk 1 from ${sourcePeg} to ${targetPeg}`);
      return;
    }
  

    towerOfHanoi(n - 1, sourcePeg, targetPeg, auxiliaryPeg);
  
    
    console.log(`Move disk ${n} from ${sourcePeg} to ${targetPeg}`);
  
    
    towerOfHanoi(n - 1, auxiliaryPeg, sourcePeg, targetPeg);
  }
  
  
  const numberOfDisks = 3;
  towerOfHanoi(numberOfDisks, 'A', 'B', 'C');
  
  // Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

  function isOperator(char) {
  return ['+', '-', '*', '/', '^'].includes(char);
}

function postfixToPrefix(postfixExpression) {
  const stack = [];
  
  for (let i = 0; i < postfixExpression.length; i++) {
    const char = postfixExpression[i];
    
    if (!isOperator(char)) {
      stack.push(char);
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefixExpression = char + operand1 + operand2;
      stack.push(prefixExpression);
    }
  }
  
  
  return stack.pop();
}


const postfixExpression = "ABC*+DE/F*-";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Prefix Expression:", prefixExpression);


// Q7. Write a program to convert prefix expression to infix expression.


function isOperator(char) {
  return ['+', '-', '*', '/', '^'].includes(char);
}

function prefixToInfix(prefixExpression) {
  const stack = [];

  for (let i = prefixExpression.length - 1; i >= 0; i--) {
    const char = prefixExpression[i];

    if (!isOperator(char)) {
      stack.push(char);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpression = `(${operand1}${char}${operand2})`;
      stack.push(infixExpression);
    }
  }

  
  return stack.pop();



const prefixExpression = "*+ABC-DE";
const infixExpression = prefixToInfix(prefixExpression);
console.log("Prefix Expression:", prefixExpression);
console.log("Infix Expression:", infixExpression);
}


//  Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(code) {
  const stack = [];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (char in bracketPairs) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false; 
      }
      const top = stack.pop();
      if (bracketPairs[top] !== char) {
        return false; 
      }
    }
  }





const codeSnippet = "function() { if (x > 0) { console.log('Hello'); } }";
const result = areBracketsBalanced(codeSnippet);
console.log(result ? "Brackets are balanced." : "Brackets are not balanced.");
}

// Q9. Write a program to reverse a stack.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

function reverseStack(inputStack) {
  const reversedStack = new Stack();

  
  while (!inputStack.isEmpty()) {
    reversedStack.push(inputStack.pop());
  }

  return reversedStack;
}

const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);

const reversedStack = reverseStack(originalStack);

console.log("Original Stack (Top to Bottom):");
while (!originalStack.isEmpty()) {
  console.log(originalStack.pop());
}

console.log("Reversed Stack (Top to Bottom):");
while (!reversedStack.isEmpty()) {
  console.log(reversedStack.pop());
}



class Stack {
  constructor() {
    this.items = [];
    this.minStack = []; 
  }

  push(item) {
    this.items.push(item);
    if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(item);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.peek() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}


const numberStack = new Stack();
numberStack.push(3);
numberStack.push(5);
numberStack.push(2);
numberStack.push(1);

console.log("Minimum Number:", numberStack.getMin()); 



function remove(stack1) {
  let stack2 = [];
  let mid = Math.floor(stack1.length / 2);
  for (let i = 0; i < mid; i++) {
    stack2.push(stack1.pop());
  }
  stack1.pop();
  while (stack2.length) {
    stack1.push(stack2.pop())
  } return stack1;
}
console.log(remove([1, 2, 3, 4, 5]));

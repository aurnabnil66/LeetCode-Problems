function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

let addTwoNumbers = function (l1, l2) {
  // push digits of both lists into two stacks
  let stack1 = [];
  let stack2 = [];

  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0; // carry for sums >= 10

  let result = null; // result list

  // Traverse both stacks if they are not empty and carry is not 0
  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    // pop the top if stacks are not empty, otherwise set to 0
    let x = stack1.length > 0 ? stack1.pop() : 0;

    let y = stack2.length > 0 ? stack2.pop() : 0; // pop

    let sum = x + y + carry; // sum the values and add carry

    carry = Math.floor(sum / 10); // update carry

    let node = new ListNode(sum % 10); // create new node

    node.next = result; // point to the next node

    result = node; // attach the new node with previous node
  }

  return result;
};

// let l1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))));

// let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);

function printList(head) {
  let current = head;
  let output = [];

  while (current !== null) {
    output.push(current.val);
    current = current.next;
  }

  console.log(output.join(" -> "));
}

printList(result);

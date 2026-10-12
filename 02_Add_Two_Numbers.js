function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

let addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0); // head node
  let current = head; // pointer to build the new list
  let carry = 0; // carry for sums >= 10

  // Traverse both lists
  while (l1 !== null || l2 !== null || carry > 0) {
    let x = l1 ? l1.val : 0; // store value from l1 or 0 if null

    let y = l2 ? l2.val : 0; // store value from l2 or 0 if null

    let sum = x + y + carry; // sum of values and carry

    carry = Math.floor(sum / 10); // update carry for next iteration

    current.next = new ListNode(sum % 10); // create new node with the digit value

    current = current.next; // move to the next node

    if (l1) l1 = l1.next; // move to the next node in l1

    if (l2) l2 = l2.next; // move to the next node in l2
  }

  return head.next; // return the next node of head which is the head of the new list
};

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

/*
| Aspect               | Complexity | Explanation                                                            |
|----------------------|------------|------------------------------------------------------------------------|
| Time Complexity      | O(max(n,m))| - Let n be the length of l1 and m be the length of l2                  |
|                      |            | - The while loop runs until both lists are fully traversed             |
|                      |            |   and no carry remains                                                 |
|                      |            | - Each iteration processes exactly one node from l1 and/or l2          |
|                      |            | - Therefore, the total number of iterations is proportional to         |
|                      |            |   the longer of the two lists                                          |
|                      |            | - Hence, time complexity is O(max(n, m))                               |
|----------------------|------------|------------------------------------------------------------------------|
| Space Complexity     | O(max(n,m))| - A new linked list is created to store the result                     |
|                      |            | - In the worst case, the result list has one extra node due to carry   |
|                      |            | - The number of new nodes created is proportional to                   |
|                      |            |   the length of the longer input list                                  |
|                      |            | - No other significant auxiliary space is used                         |
|                      |            | - Hence, space complexity is O(max(n, m))                              |
*/

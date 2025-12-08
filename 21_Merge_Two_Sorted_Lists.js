function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

let mergeTwoLists = function (list1, list2) {
  let duymmyNode = new ListNode(-1);
  let currentNode = duymmyNode;

  // Traverse the lists
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  // attach the remaining part of the list which is not empty/null
  if (list1 !== null) {
    currentNode.next = list1;
  } else if (list2 !== null) {
    currentNode.next = list2;
  }

  return duymmyNode.next; // the merged list starts after the duummy node
};

// Create the linked lists
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

let result = mergeTwoLists(list1, list2);

console.log(result);

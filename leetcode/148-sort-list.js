function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// UTILITY FUNCTIONS
function print(list, output = console.log) {
  head = list;
  while (head !== null) {
    output(head.val + " -->");
    head = head.next;
  }
  output("End of List");
}

function constructList(array) {
  let head = new ListNode();
  let current = head;
  for (let item of array) {
    let newNode = new ListNode(item, null);
    current.next = newNode;
    current = current.next;
  }
  return head.next;
}

function splitMiddle(list) {
  if (!list.next) {
    return [list, null];
  }
  let slow = list;
  let fast = list.next;
  while (fast) {
    fast = fast.next;
    if (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  }
  let second_half = slow.next;
  slow.next = null;
  return [list, second_half];
}

function insert(list, value, index = 0) {
  let currentIndex = 0;
  let after = list;
  let head = list;
  let before = null;
  while (currentIndex < index) {
    before = after;
    after = after.next;
    currentIndex++;
  }
  let newNode = new ListNode(value, after);
  if (before) {
    before.next = newNode;
    return head;
  } else {
    return newNode;
  }
}

// END UTILITIES

const sort = (list) => {
  if (!list.next) {
    return list;
  }

  let [first_half, second_half] = splitMiddle(list);
  first_half = sort(first_half);
  second_half = sort(second_half);
  return merge(first_half, second_half);
};
const merge = (list_a, list_b) => {
  if (!list_a) return list_b;
  if (!list_b) return list_a;
  let result;
  if (list_a.val <= list_b.val) {
    result = list_a;
    result.next = merge(list_a.next, list_b);
  } else {
    result = list_b;
    result.next = merge(list_a, list_b.next);
  }
  return result;
};

{
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  //Node has 2 things one is current value and next node.
  //  var first = new Node("Hi");
  //  first.next = new Node("there");
  //  first.next.next = new Node("how");

  class singlyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }

    pop(val) {
      var currentVal = this.head;
      var preVal = currentVal;
      while (currentVal) {
        preVal = currentVal;
        currentVal = this.head.next;
        this.length--;
      }
      this.tail = preVal;
      this.tail.next = null;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return preVal;
    }
  }
  var list = new singlyLinkedList();
}

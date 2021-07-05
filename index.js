// Add append method to linked list class
class linked_list{
  constructor(value){
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  };
  append(value){
    const new_node = {
      value: value,
      next: null
    };
    // This node will be the new tail.
    // Point the tail's next to this node, point the tail to this node.
    this.tail.next = new_node;
    this.tail = new_node;
    this.length++;
    return this;
  };
  prepend(value){
    const new_node = {
      value: value,
      next: null
    };
    // This node will be the new tail.
    new_node.next = this.head;
    this.head = new_node;
    this.length++;
  }
};

let ll = new linked_list(10);
console.log(ll);
ll.append(15);
console.log(ll);
ll.append(16);
console.log(ll);
ll.prepend(1);
console.log(ll);

// Node class for linked list node creation
class node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


// Create linked list with prepend and
// append methods, using node class.
class linked_list{
  constructor(value){
    let new_node = new node(value);
    this.head = new_node;
    this.tail = this.head;
    this.length = 1;
  };
  append(value){
    // This node will be the new tail.
    // Point the old tail to this node, 
    // point the tail to this node.
    let new_node = new node(value);
    this.tail.next = new_node;
    this.tail = new_node;
    this.length++;
    return this;
  };
  prepend(value){
    let new_node = new node(value);
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

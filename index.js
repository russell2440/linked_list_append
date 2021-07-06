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
  insert(index, value){
    // Traverse list to node indicated by index
    // Make new node, point to current node
    if(index==0){
      this.prepend(value);
      return
    }
    if(index>=this.length){
      this.append(value);
      return
    }
    let pn=null;
    let cn=this.head;
    let i=0;
    while(cn!=null){
      if(i==index){
        let nn = new node(value);
        nn.next = cn;
        pn.next = nn;
      }
      pn=cn;
      cn=cn.next;
      i++;
    }
    this.length++;
  }
  // Traverse ll and print each node value
  print(){
    console.log("The linked list: ");
    for(let cn=this.head; cn!=null; cn=cn.next){
      console.log(cn.value);
    }
    console.log(this.length);
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
ll.print();
ll.insert(2,99)
ll.print();
ll.insert(1,98)
ll.print();
ll.insert(0,97)
ll.print();
ll.insert(100,96)
ll.print();


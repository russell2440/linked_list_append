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

  };
  prepend(value){
    
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

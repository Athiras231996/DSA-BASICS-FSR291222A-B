console.clear()

class Node{ //for creating Node
  constructor(val){
    this.value = val
    this.next = null
  }
}

class LinkedList{ //Implementing Linked List
  constructor(){
    this.head = null
    this.size = 0
    this.insertAt = function(value, pos){ 
      var node = new Node(value)
      if(this.head === null){ //checking for availability of node
        this.head = node
      }
      else if(pos == 0){// Insert at beginning
        node.next = this.head 
        this.head = node
      }
      else{
        var currNode = this.head// currNode->Pointer
        var cnt = 0
        while(cnt < pos - 1){
          cnt+=1
          currNode = currNode.next
        }
        node.next = currNode.next
        currNode.next = node
      }
      this.size += 1
    }
    this.insertEnd = function(val){ //Insertion at End
      var node = new Node(val)
      if(this.head == null){
        this.head = node
      }
      var currNode = this.head
      while(currNode.next !== null){
        currNode = currNode.next
      }
      currNode.next = node
      this.size += 1
    }
    this.removeFrom = function(pos){ //Deletion of Node 
      if(this.head == null){
        return -1 //no data found
      }
      else if(pos == 0){ // delete from beginning
        this.head = this.head.next
      }
      else{
        var temp = this.head// delete from any position
        var cnt = 0
        while(cnt < pos - 1){
          cnt += 1
          temp = temp.next
        }
        temp.next = temp.next.next
      }
      this.size -= 1
    }
    this.removeEnd = function(){
      if(this.head == null){
        return -1
      }
      var pos = this.size - 1
      var cnt = 0
      var temp = this.head
      while(cnt < pos - 1){
        cnt++
        temp = temp.next
      }
      temp.next = null
      this.size -= 1
    }
  }
}

var ll1 = new LinkedList()
var ll2 = new LinkedList()
// ll.insertAt(3,0)
// ll.insertAt(5,1)
// ll.insertEnd(8)
// ll.insertEnd(4)
// ll.insertEnd(10)
// ll.removeFrom(2)
// ll.removeEnd()
// console.log(ll.head)
ll1.insertAt(1,0)
ll1.insertEnd(2)
ll1.insertEnd(3)
ll1.insertEnd(5)
console.log(ll1.head)
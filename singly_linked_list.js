/*
 * _Node_
 * data: stores a value
 * next: points to the next node in the list
 *
 * _Singly Linked List_
 * _length: retrieves the number of nodes in a list.
 * head: assigns a node as the head of a list.
 * add(value): adds a node to a list.
 * searchNodeAt(position): searches for a node at n-position in out list.
 * remove(position): removes a node from a list.
 **/

/* Constructors */
function Node(data) {
  this.data = data;
  this.next = null;
}
function SinglyLinkedList() {
  this._length = 0;
  this.head = null;
}

SinglyLinkedList.prototype.add = function(value) {
  var node = new Node(value),
      currentNode = this.head;

  // An empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // A non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;

  return node;
};

SinglyLinkedList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list'};

  // an invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  // a valid position, loops until the position is reached
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};


/*
 * the remove function has three cases
 * 1: an invalid position is passed
 * 2: a position of one is passed in as an argument and the head is returned
 * 3: an existing position is passed as an argument and returned
 *
 * logic of the first case is handled as followed
 * 1. head is assigned to currentNode.next
 * 2. deletedNode is now currentNode
 * 3. currentNode is reassigned to null
 * 4. decrement _length of our list by one
 * 5. deletedNode is then returned
 */
SinglyLinkedList.prototype.remove = function(position) {
  var currentNode = this.head,
      length = this._length,
      count = 0,
      message = {failure: 'Failure: non-existent node in this list'},
      beforeNodeToDelete = null,
      nodeToDelete = null,
      deleteNode = null;

  // an invalude position
  if (position < 0 || position > length) {
      throw new Error(message.failure);
  }

  // the first node is removed
  if (position === 1) {
      this.head = currentNode.next;
      deleteNode = currentNode;
      currentNode = null;
      this._length--;

      return deletedNode;
  }

  // loops till the position is found and then is returned
  while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--; // decrement _length by one

  return deletedNode
}

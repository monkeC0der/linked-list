import node from "./node.js";

let node1 = node("first");

console.log(node1);

export default function nodeList() {
  return {
    headNode: null,

    append(node, ptr) {
      if (this.headNode == null) {
        this.headNode = node;
        console.log("new node added at head");
      } else {
        if (ptr == null) {
          var ptr = this.headNode;
        }
        if (ptr.nextNode == null) {
          ptr.nextNode = node;
          console.log("new node added afer " + ptr.nextNode.value);
          return ptr.nextNode;
        } else {
          return this.append(node, ptr.nextNode);
        }
      }
    },

    prepend(node) {
      if (this.headNode == null) {
        this.headNode = node;
      } else {
        node.nextNode = this.headNode;
        this.headNode = node;
        console.log(node.value + " added as new headnode");
      }
    },

    size() {
      let counter = 0;
      if (this.headNode == null) {
        return counter;
      } else {
        counter++;
        let ptr = this.headNode;
        while (ptr.nextNode != null) {
          counter++;
          ptr = ptr.nextNode;
        }
      }
      return counter;
    },

    head() {
      return this.head;
    },

    tail() {
      let ptr = this.headNode;
      if (ptr.nextNode == null) {
        return ptr.value;
      } else {
        while (ptr.nextNode != null) {
          ptr = ptr.nextNode;
        }
        return ptr.value;
      }
    },

    at(index) {
      let ptr = this.headNode;
      for (let i = 0; i <= index; i++) {
        if (i === index) {
          return ptr.value;
        } else {
          if (ptr.nextNode != null) {
            ptr = ptr.nextNode;
          } else {
            return null;
          }
        }
      }
    },

    pop() {
      let ptr = this.headNode;
      if (ptr == null) {
        return;
      } else if (ptr.nextNode == null) {
        this.headNode = null;
      } else {
        let followingNode = ptr.nextNode;
        while (followingNode.nextNode != null) {
          ptr = ptr.nextNode;
          followingNode = ptr.nextNode;
        }
        ptr.nextNode = null;
      }
    },

    contains(value) {
      let ptr = this.headNode;
      let valueFound = false;
      while (ptr.nextNode != null) {
        if (ptr.value == value) {
          valueFound = true;
        }
        ptr = ptr.nextNode;
      }
      return valueFound;
    },

    find(value) {
      let ptr = this.headNode;
      let counter = 0;
      let found = false;
      while (ptr != null) {
        if (ptr.value == value) {
          found = true;
          return counter;
        }
		ptr = ptr.nextNode;
		counter++
      }
      if (found == false) {
        return null;
      }
    },

	toString() {
		let listString = ""
		let ptr = this.headNode
		while (ptr != null) {
			listString = listString + "( " + ptr.value + " )"
			ptr = ptr.nextNode
			if (ptr != null) {
				listString = listString + " -> "
			}
		}
		return listString
	}
  };
}

let newList = nodeList();
console.log(newList);

let newNode = node("first");
let secondNode = node("second");
let thirdNode = node("third");
let newHeadNode = node("new head node");
newList.append(newNode);
newList.append(secondNode);
newList.append(thirdNode);

console.log(newList.find("thir"));
console.log(newList.toString())

console.log(newList.toString())
newList.prepend(newHeadNode)
console.log(newList.toString())
class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if (currentNode.left === null){
                       currentNode.left = newNode; 
                       return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if (currentNode.right === null){
                       currentNode.right = newNode; 
                       return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value) {
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    return 'No existe el valor que estás buscando';
                }
                else if(currentNode.left.value == value){
                    return 'El valor que estás buscando se encuentra en el arbol'
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    return 'No existe el valor que estás buscando';
                }
                else if(currentNode.right.value == value){
                    return 'El valor que estás buscando se encuentra en el arbol'
                }
                currentNode = currentNode.right;
            }
        }
    }
}

const myTree = new BinarySearchTree();
myTree.insert(4);
myTree.insert(20);
myTree.insert(2);
myTree.insert(8);
myTree.insert(17);
myTree.insert(170);

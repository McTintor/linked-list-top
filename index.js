class Node {
    constructor(value, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(value) {
        this.head = new Node(value, this.head)
        this.size++
    }

    insertLast(value) {
        let node = new Node(value)
        let current

        if(!this.head) {
            this.head = node
        } else {
            current = this.head

            while(current.nextNode) {
                current = current.nextNode
            }

            current.nextNode = node
        }

        this.size++
    }

    insertAt(value, index) {
        if(index < 0 || index > this.size) {
            return
        }

        if (index === 0) {
            this.insertFirst(value)
            return
        }

        const node = new Node(value)
        let current, previous

        current = this.head
        let count = 0

        while(count < index) {
            previous = current
            count++
            current = current.nextNode
        }

        node.nextNode = current
        previous.nextNode = node

        this.size++
    }

    getAt(index) {
        let current = this.head
        let count = 0

        while(current) {
            if(count == index) {
                console.log(current.value)
            }
            count++
            current = current.nextNode
        }

        return null
    }

    removeAt(index) {
        if(index < 0 || index > this.size) {
            return
        }

        let current = this.head
        let previous;
        let count = 0

        if (index === 0) {
            this.head = current.nextNode
        } else {
            while(count < index) {
                count++
                previous = current
                current = current.nextNode
            }

            previous.nextNode = current.nextNode
        }

        previous.nextNode = current.nextNode
    }

    clearList() {
        this.head = null
        this.size = 0
    }

    printListValue() {
        let current = this.head;

        while(current) {
            console.log(current.value)
            current = current.nextNode
        }
    }
}
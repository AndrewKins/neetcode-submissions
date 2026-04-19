class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const tmp = [];

         let mini = this.stack[this.stack.length - 1]; //last element
         
         while (this.stack.length > 0) {
            mini = Math.min(mini, this.stack[this.stack.length - 1]); //whichEver is smaller 
            tmp.push(this.stack.pop()); //push that into the tmp
        }

        while (tmp.length > 0) {
            this.stack.push(tmp.pop()); //push the newly organized elements back into the stack
        }

        return mini;
    }
}

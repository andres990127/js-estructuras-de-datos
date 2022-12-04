// Generar un array con una clase
class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1];
        this.length--;
    }

    unShiftIndex(index){
        for(let i = this.length -1; i >= index; i--){
            this.data[i + 1] = this.data[i];
        }
        this.length++;
    }

    // Agregar elemento al inicio del array
    unShift(item){
        this.unShiftIndex(0);
        this.data[0] = item;
        return this.data;
    }

    // Eliminar un elemento al inicio del array
    Shift(){
        this.delete(0);
        return this.data;
    }
}

const myArray = new MyArray();

myArray.push('Oscar');
myArray.push('Adriana');
myArray.push('José');
myArray.push('Andrés');

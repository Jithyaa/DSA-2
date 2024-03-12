class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size; 
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total %this.size;

    }
    set(key,value){
        let index=this.hash(key);
        this.table[index]=value;

    }
    get(key){
        let index=this.hash(key)
        return this.table[index]=undefined;
    }
    remove(){
        let index=this.hash(key)
         this.table[index]=undefined; 
    }
    display(){
        for(let i=0;i<this.table.length;i++){ 
            if(this.table [i]){
                console.log(i,this.table[i]);
            }
        }
    }

}
 let table=new HashTable(50)
 table.set('name','jithya');
 table.set('age',21);
 table.display();
 console.log(table.get('name'));
 
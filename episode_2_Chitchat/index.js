const obj={
    firstname:'RAM',
    printname: () => {
        console.log(this);
    },
    printname2: function (){
        console.log(this);
    },
};
const obj2={
    firstname:'venu'
}

obj.printname();
obj.printname2();

obj.printname.call();
obj.printname2.call();
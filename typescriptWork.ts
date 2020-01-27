// let a: string;
// let b: number;

// a="merhaba";
// b=21;

// console.log(a,b);

// class kavramı ve kalıtım

// class Person {
//     name: string;
//     age:number;
//     // private phone:string;
//     phone:string;

// constructor(name:string,age:number,phone:string){
//     this.name=name;
//     this.age=age;
//     this.phone=phone;
//     console.log("kişi oluşturuldu.")
// }
// showInfos(){
//     console.log('Isim:${this.name} Yas:${this.age} Telefon:${this.phone}')
// }
// }
// let person1=new Person("Ali Veli",25,"312");//constructor cagrildi.
// person1.showInfos();
// //console.log(person1.phone);//Private olduğu için erişilemiyor.


// class Employee extends Person{//inheritance
//     salary:number;
//     constructor(name:string,age:number,phone:string,salary:number){
//         super(name,age,phone);
//         this.salary=salary;
//     }
//     showInfos(){
//         super.showInfos();
//         console.log("Maas:"+this.salary);//override
//     }
//     changeDepartment(){
//         console.log("Değiştiriliyor");
//     }

// }
// let employee1=new Employee("veli ali",23,"2231",6000);

// employee1.showInfos();
// employee1.changeDepartment();



// Interface
    // interface IDatabase{
    //     add();
    //     get();
    //     delete();
    //     update();
    // }
    // class MySql implements IDatabase{
    //     add(){
    //         console.log("MySql Add");
    //     }
    //     get(){
    //         console.log("MySql get");
    //     }
    //     delete(){
    //         console.log("MySql delete");
    //     }
    //     update(){
    //         console.log("MySql update");
    //     }
    // }
    // class MongoDb implements IDatabase{
    //     add(){
    //         console.log("MongoDb Add");
    //     }
    //     get(){
    //         console.log("MongoDb get");
    //     }
    //     delete(){
    //         console.log("MongoDb delete");
    //     } 
    //     update(){
    //         console.log("MongoDb update");
    //     }
    // }
    // // let mysql=new MySql();
    // // mysql.add();
    // function addDatabase(database:IDatabase){
    //     database.add();
    // }
    // //Sürdürülebilirlik-Yeni bir durum geldiğinde sadece yeni class açmak yeterli olacaktır.
    // //addDatabase(new MySql());
    // addDatabase(new MongoDb());

//abstract class

abstract class Database{
    //ilk ikisi hepsinde ortak
    get(){
        console.log("Db Get");
    }
    add(){
        console.log("Db Add");
    }
    abstract delete();
    abstract update();
}
class MySql extends Database{
    
    delete(){
        console.log("MySql delete");
    }
    update(){
        console.log("MySql update");
    }
}
class MongoDb extends Database{
    
    delete(){
        console.log("MongoDb delete");
    } 
    update(){
        console.log("MongoDb update");
    }
}
function AddDatabase(database:Database){
database.delete();
}
AddDatabase(new MySql());
AddDatabase(new MongoDb());

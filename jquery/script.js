

function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2022-this.age;
}

function teacher(name,age,job,subject) {
    Person.call(this,name,age,job);
    this.subject = subject;
}

let serhat=new teacher("Serhat",1997,"Programer","English");
console.log(serhat);
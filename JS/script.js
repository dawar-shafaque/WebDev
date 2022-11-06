console.log("object"); 
var student{
    'firstname' : 'Marie',
    'lastname' : 'Smith',
    'fullname' : function(){
        return this.firstname + '' + this.lastname;
    }
}
function sum_arg(num1 , num2){
    var sum = num1 + num2; 
    console.log(sum);
}
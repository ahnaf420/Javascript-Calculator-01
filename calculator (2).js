// const onebtn =  document.getElementById('one_btn');

// onebtn.addEventListener("click", function(){
//     console.log('hALLI');
// })

// const twobtn = document.getElementById('two_btn');
// twobtn.addEventListener("click", function(){
//     console.log("Hallo");
// })

function caclculator(num){
    const inputBtn= document.getElementById("input_btn").value;
    const inputtotal = inputBtn + num;
    const inputvalue= document.getElementById("input_btn").value = inputtotal;
    return inputvalue;

}
 
 const equalBtn = document.getElementById("equal_btn");
 equalBtn.addEventListener("click", function(){
   const equalNumber = document.getElementById("input_btn").value;
   const total = eval (equalNumber);
   document.getElementById("input_btn").value = total;

 })


 const cleaarBnt = document.getElementById("clear");
 clear.addEventListener("click",function(){

    document.getElementById("input_btn").value = "";
   
 })
 
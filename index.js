function per(){
let total_marks=document.getElementById("tm1").value
let obtain_marks=document.getElementById("om1").value
  let perc = (obtain_marks/total_marks)*100
if (perc<=100 && perc>=90) {
    document.querySelector("#change").innerHTML=`YOU GOT A+ Grade`
}
else if(perc<90 && perc>=80){
    document.querySelector("#change").innerHTML=`YOU GOT A Grade`
}
else if(perc<80 && perc>=70){
    document.querySelector("#change").innerHTML=`YOU GOT B Grade`

}
else if(perc<70 && perc>=60){
    document.querySelector("#change").innerHTML=`YOU GOT C Grade`
}
else if(perc<60 && perc>=50){
    document.querySelector("#change").innerHTML=`YOU GOT D Grade`
}
else if(perc<50 && perc>=0){
    document.querySelector("#change").innerHTML=`YOU GOT E Grade`
}

else{
    document.querySelector("#change").innerHTML=`Invalid Number`
}
console.log(change)
}


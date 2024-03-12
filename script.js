const age = document.getElementById("age")
const btn = document.getElementById("btn")
const result = document.getElementById("eya")

    function calculateage(){
    const birtdayv = age.value
    if(birtdayv == ""){
       alert("please enter Your Age")
    }
    else{
      const nage = getAge(birtdayv)
        result.innerHTML = `Your age is ${nage} ${nage > 1 ? "years" : "year"} old`;                                         
    }
}

function getAge(birtdayv){
  const currentdate = new Date()
  const bitrhdaydate = new Date(birtdayv)
  let age = currentdate.getFullYear() - bitrhdaydate.getFullYear();
  const month = currentdate.getMonth() - bitrhdaydate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentdate.getDate() < bitrhdaydate.getDate())
  ) {
    age--;
  }

  return age;
}

btn.addEventListener("click", calculateage);



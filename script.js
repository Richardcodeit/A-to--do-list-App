let array = []
const para = document.getElementById("para")
const input = document.getElementById("input")
const save = document.getElementById("save")
const ulel = document.getElementById("ul-el")

save.addEventListener("click" , (e)=>{
   if(input.value.trim() !== ""){
    array.push(input.value)
    input.value=" "
    sort()
   }
   else{
    para.innerHTML  = "enter a task"
   }
})
let sort = ()=>{
    
        let map = array.map((array)=>`<li> ${array} </li>`)
        let join = map.join("")
        console.log(join)
        ulel.innerHTML = join
}
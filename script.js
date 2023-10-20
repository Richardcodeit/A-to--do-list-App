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
    para.innerHTML = " "
   }
   else{
    para.innerHTML  = "enter a task"
   }
})
let sort = ()=>{
    
        let map = array.map((array)=>`<li> ${array} </li>`)
      //   let filterd = map.filter((ooop)=>{
      //   console.log(map[0])
      //   })
      //   console.log(filterd)
      const join = map.join("")
      ulel.addEventListener("click" , (e)=>{
        
        if(e.target){
          e.target.classList.add("checked")
          setTimeout(()=>{
            e.target.style.display = "none"
          } , 1000)
          setTimeout(() => {
            array.pop(e.target)
          },1000);
        }
        
      })
      ulel.innerHTML = join
      // let boss = ulel.querySelectorAll('li:not(className):not([id=null])')
      // console.log(boss)
      // let spat = document.createElement("span")
      // spat.innerHTML = "vvv"
      // spat.style.setProperty("background-red" ,"red")
      // spat.style.setProperty("color" ,"red")
      // boss.forEach((each)=>{
      //   each.appendChild(spat)
      // })
}


// REMEBER TO DO USE BEFORE AND LEaen HOW TO GET


// let sort = () => {
//   // Map each array item to an <li> with a <span> element inside
//   let map = array.map((array) => `<li><span>${array}</span></li>`);

//   // Join the mapped elements into a single string
//   let join = map.join("");

//   // Update the content of the <ul> element
//   ulel.innerHTML = join;

//   // Add event listeners to each <li>
//   const liElements = ulel.querySelectorAll("li");
//   liElements.forEach((li) => {
//     li.addEventListener("click", (e) => {
//       if (e.target) {
//         e.target.classList.add("checked");
//         setTimeout(() => {
//           e.target.style.display = "none";
//         }, 1000);
//         setTimeout(() => {
//           const spanText = e.target.querySelector("span").textContent;
//           const index = array.indexOf(spanText);
//           if (index !== -1) {
//             array.splice(index, 1);
//           }
//         }, 1000);
//       }
//     });
//   });
// };



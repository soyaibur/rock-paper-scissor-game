const testId=document.getElementById('test')

const selections = document.querySelectorAll('[data-selection]')




// All Selection laid here above...........


selections.forEach(selection=>{
   selection.addEventListener('click',e=>{
      const selectionName = selection.dataset.selection


      // console.log(selectionName)
      // printOut(selectionName) 
   })
})









function printOut(word){
   const write = testId.innerText = word;
   return write
}


















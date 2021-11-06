const testId=document.getElementById('test')

const selections = document.querySelectorAll('[data-selection]')
const SELECTIONS=[
   {
      name:'rock',
      emoji:'🤘',
      beats:'scissor'
   },
   {
      name:'paper',
      emoji:'✋',
      beats:'rock'
   },
   {
      name:'scissor',
      emoji:'✌️',
      beats:'paper'
   }
]



// All Selection laid here above...........


selections.forEach(selectionButton=>{
   selectionButton.addEventListener('click',e=>{
      const selectionName = selectionButton.dataset.selection
      const selecttaria = SELECTIONS.find(silver=> silver.name === selectionName)
      makeSelection(selecttaria)

      
   })
})

function makeSelection(sel){
  console.log(sel)
      printOut(sel) 
}









function printOut(word){
   const write = testId.innerText = word;
   return write
}


















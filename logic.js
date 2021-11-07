const testId=document.getElementById('test')

const selections = document.querySelectorAll('[data-a]')
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
const finalColumn = document.getElementById('final-column'),


// All Selection laid here above...........


selections.forEach(selectionButton=>{
   selectionButton.addEventListener('click',e=>{
      const selectionName = selectionButton.dataset.a
      const selecttaria = SELECTIONS.find(silver=> silver.name === selectionName)
      makeSelection(selecttaria)

      
   })
})

function makeSelection(sel){
  const computerSelection = randomNumber()
  const yourWinner = isWinner(sel,computerSelection)
  const computerWinner = isWinner(computerSelection,sel)
  

  addSelectionResult(computerSelection,computerWinner)
  addSelectionResult(sel,yourWinner)
}

function addSelectionResult(sele,winner){
   const div = document.createElement('div')
   div.innerTest = sele.emoji
   div.classList.add('player')
   if(winner) div.classList.add('winner')
   finalColumn.after(div)
}


function randomNumber(){
   const rendomNum = Math.floor(Math.random() * SELECTIONS.length)
   return SELECTIONS[rendomNum]
}

function isWinner(selec,opponentSelection){
 return selec.name === opponentSelection.beats
}




function printOut(word){
   const write = testId.innerText = word;
   console.log(write)
   return write
}


















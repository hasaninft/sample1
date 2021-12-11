const InputToDo = document.getElementById('InputToDo')
const SubmitButton = document.getElementById('submitbtn')
const ListsBox = document.getElementById('listsbox')
const H4Value = document.getElementById('paragraph')

const ToDoList = [
  {
   text : 'Clean The Car',
   done : false
  },
  {
  text: 'Read Books',
  done : false
  }
]

function UpdateUI() {
  ListsBox.innerHTML = ''
  let input = ''
  for (let i = 0; i < ToDoList.length; i++) {
    const items = ToDoList[i]
    input += `
    <div class="Todos">
      <h4  id="paragraph_${i}" class=" heading ${GetClass(items)}"> ${items.text} </h4>
      <img class="img" src="checkedicon.png" alt="Checked !" onclick="CheckedItem(${i})">
      <img class="img" src="trashicon.png" alt="Delete Your ToDo!" onclick="DeleteItem(${i})">
    </div>
    `
  }
  ListsBox.innerHTML = input
}
UpdateUI()

function AddNewToDo() {
  const newtext = InputToDo.value
  const newdone = false 
  if (!newtext) return alert('You Have not Write Any Task Yet !!!')
  const object = {}
  object.text = newtext
  object.done = newdone
  ToDoList.push(object)
  UpdateUI()
  document.getElementById('InputToDo').value = ''
}

function DeleteItem(i) {
  ToDoList.splice(i, 1)
  UpdateUI()
}

function GetClass(item) {
  if (item.done)
  {
    return 'todo--done' 
  }
  else
  {
    return ''
  }
  
}


function CheckedItem(i) {
  ToDoList[i].done = !ToDoList[i].done
  UpdateUI()
}
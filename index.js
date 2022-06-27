// Write your code here!

document.getElementById('main').remove();

const newHeader = document.createElement('h1')

newHeader.id = "victory"
newHeader.textContent ='YOUR-NAME is the champion'
newHeader.className = "victory"

document.body.append(newHeader)


const table = document.querySelector("#table")
const item = document.createElement("ul")

item.id = "newItem"

//add detail to item
item.textContent = "item1"

//appen item to table
table.append(item)
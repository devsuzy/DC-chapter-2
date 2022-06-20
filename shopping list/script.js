const list = document.querySelector(".list")
const input = document.querySelector(".footer-input")
const addBtn = document.querySelector(".add-btn")
const itemDelete = document.querySelector(".item-delete")

function onAdd(){
    // 1. 사용자가 입력한 텍스트 받아오기
    const text = input.value;
    if (text === ""){
        input.focus();
        return;
    }
    console.log(text)
    // 2. 새로운 아이템 만들기 (텍스트 + 삭제)
    const newItem = createItem();
    // 3. list 안에 새로운 아이템 추가하기
    list.appendChild(newItem)
    // 4. 인풋 초기화하기
    input.value = '';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item-row");

    const itemDivider = document.createElement("div");
    itemDivider.setAttribute("class", "divider")

    const newItem = document.createElement("div")
    newItem.setAttribute("class", "item")

    const itemName = document.createElement("span")
    itemName.setAttribute("class", "item-name")
    itemName.innerText = text;

    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "item-delete")
    deleteBtn.addEventListener("click", () => {
        list.removeChild(itemRow)
    })

    newItem.appendChild(itemName);
    newItem.appendChild(deleteBtn)

    itemRow.appendChild(newItem)
    itemRow.appendChild(itemDivider)

    return itemRow;
}
addBtn.addEventListener("click", () => {
    onAdd();
})

input.addEventListener("keypress", (event) => {
    
})
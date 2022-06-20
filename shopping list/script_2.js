const list = document.querySelector(".list")
const input = document.querySelector(".footer-input")
const addBtn = document.querySelector(".add-btn")

function onAdd(){
    // 1. 사용자가 입력한 텍스트 받아오기
    const text = input.value;
    if (text === ''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템 만들기 (텍스트 + 삭제)
    const item = createItem(text);
    // 3. list 안에 새로운 아이템 추가하기
    list.appendChild(item);
    // 4. 새로 추가된 아이템 스크롤링
    item.scrollIntoView({
        block : 'center'
    });
    // 5. 인풋 초기화하기
    input.value = '';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item-row");

    const item = document.createElement("div");
    item.setAttribute("class", "item");
    
    const itemName = document.createElement("span");
    itemName.setAttribute("class", "item-name");
    itemName.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "item-delete");
    deleteBtn.innerHTML = '<img src="img/bin.png" alt="">';
    deleteBtn.addEventListener("click", () => {
        list.removeChild(itemRow);
    })

    const divider = document.createElement("div");
    divider.setAttribute("class", "divider");

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item)
    itemRow.appendChild(divider)
    return itemRow
}

addBtn.addEventListener("click", () => {
    onAdd();
})

input.addEventListener("keypress", (event) => {
    // console.log("key")
    if (event.key === "Enter"){
        onAdd();
    }
})
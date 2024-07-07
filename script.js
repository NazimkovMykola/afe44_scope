//область видимості змінних
// область видимості змінних - це блок коду де вони були створені
// {}

//      глобальною
const userName = "Mykola"
// локальні

function sayName() {
  const x = 5
  console.log(x)
}
const user = {
  text: userName,
  func: () => {
    const y = 10
    console.log(y)
  },
}
const arr = [userName]
sayName()

const z = 10

function test1() {
  console.log(z)
}
test1()

// лексичне оточення = {}/блок коду + змінні
// глобальним та локальним

const textName = "Mykola"
function printName(textName) {
  // const textName = "Ivan"
  console.log(textName)
}

printName("Ivan")

// ключових слів let та const
// var - завжди має глобально область видимості
// код пишеться один раз
// а читаєтся 1000 разів

//чисті функції 



function нагітиВоду () {}
function взятиЧашку () {}
function змішатиВсеВЧашці () {}

нагітиВоду()
взятиЧашку()
змішатиВсеВЧашці()


// console.log(tag)

// об'єктно орієнтоване програмування ООП 


function drawTag(tagName) {
  const tag = document.createElement(tagName)
  tag.textContent = "Я - " + tagName
  document.body.appendChild(tag)
}

drawTag("span")
drawTag("div")

// функція-конструктор об'єту

// function User (name, age, isStudent) {
//     this.name = name,
//     this.age = age, 
//     this.isStudent=  isStudent
// }
// const users = []
// for(let i = 0; i<20; i++) {
//     users.push(new User("Dafault", i + 5, true))
// }

// console.log(users)

function Tag (tagName, i) {
    this.tagName = tagName,
    this.draw = () => {
          const tag = document.createElement(this.tagName)
          const gameField = document.querySelector(".gameField")
          tag.classList.add('cell')
          tag.textContent = i
          gameField.appendChild(tag)
    }
}

const newTagDiv = new Tag('div')
newTagDiv.draw()


//змійка
for(let i =0; i<99; i++) {
    new Tag('div',i).draw()
}


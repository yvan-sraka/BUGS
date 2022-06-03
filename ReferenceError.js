// % npx eslint ReferenceError.js

//const getMessage = () => {
  const message = "Hello, World!"
//} // <- Drop the message reference

const displayMessage = () => {
  console.log(message)
}

//getMessage()

setTimeout(displayMessage, 3000)
const message = "Hello, World!"

setTimeout(() => {
  message = "Hahaha"
  console.log(message)
}, 3000)

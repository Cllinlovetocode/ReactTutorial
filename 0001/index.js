scr> JS index.js> ...


import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <section className='book'>
      <Image />
      <Title />
      <Author />
    </section>
  )
}
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/61BWsc9eGbL._AC_UL900_SR900,600_.jpg'
    alt='The Woman in Me'
  />
)
const Title = () => <h2>The Woman in Me</h2>
const Author = () => {
  return <h4>Britney Spears</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)

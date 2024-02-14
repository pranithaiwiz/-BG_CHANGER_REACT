import { useState } from 'react'


function App() {
  let [color, setcolor] = useState("black")
  
  const Red = () => {
    setcolor("red")
  }

  const Green = () => {
    setcolor("green")
  }

  const Blue = () => {
    setcolor("blue")
  }

  const Black = () => {
    setcolor("black")
  }

  const Gray = () => {
    setcolor("gray")
  }

  const Yellow = () => {
    setcolor("yellow")
  }

  const Purple = () => {
    setcolor("purple")
  }

  const White = () => {
    setcolor("white")
  }

  return (
    <div className='w-screen h-screen duration-200'
    style={{backgroundColor: color}}>
      <h2 class="text-4xl text-center font-extrabold dark:text-white">Bg-changer </h2>
      <br/>
      <button type="button" onClick={Blue} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BLUE</button>
      <button type="button" onClick={Gray} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">GRAY</button>
      <button type="button" onClick={White} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">WHITE</button>
      <button type="button" onClick={Green} class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">GREEN</button>
      <button type="button" onClick={Red} class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">RED</button>
      <button type="button" onClick={Yellow} class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">YELLOW</button>
      <button type="button" onClick={Purple} class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">PURPLE</button>
    </div>
    
  )
}

export default App

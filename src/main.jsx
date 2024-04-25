
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/Header.jsx'
import ToDoList from './ToDoList/ToDoList.jsx'


const jsxElement = (
  <div className="app">
    <Header />
    <ToDoList />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(jsxElement)

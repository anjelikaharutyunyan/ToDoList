import AddToDo from "../AddToDo/AddToDo"
import '../index.css'

export default function Header() {
    return (
        <div className="header">
            <h1 className="header">Task List 2024</h1>
            <AddToDo />
        </div>
    )
}
import Button from "../Button/Button.jsx"

export default function AddToDo() {
  return (
    <div>
      <input className="inputStyle" type="text" placeholder={"What do you have planned?"} /><Button style={{ color: '#a82571' }} text={"ADD"} />
    </div>
  )
}

import Button from "../Button/Button.jsx"
import '../index.css'

export default function ToDoListItem({ text, style }) {
    const defaultInputStyles = {
        with: "200px",
        heigth: "50px",
        fontSize: '20px',
        color: 'white',
        alignItems: 'center',
        border: "1px solid black",
        paddingInline: '10px',
        borderRadius: '10px',
        display: "flex",
        justifyContent: "space-between",
    }
    const inputStyle = { ...defaultInputStyles, ...style }

    return (
        <div style={inputStyle}>
            <ul>
                <ol>{text}</ol>
            </ul>
            <div>
                <Button style={{ color: '#a82571' }} text="EDIT" />
                <Button style={{ color: 'red' }} text="DELETE" />
            </div>

        </div>
    )
}


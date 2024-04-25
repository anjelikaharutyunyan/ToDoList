import React from "react";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList() {
    const taskContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    };
    return (
        <div style={taskContainerStyle}>
            <h1 style={{ color: '#616a7b' }}>Tasks</h1>
            <ToDoListItem text={'Build a task app in 2021'} />
            <ToDoListItem text={'Subscribe to Tyler Potts'} style={{ color: '#a82571' }} />
            <ToDoListItem text={'Like the video!'} />
            <ToDoListItem text={'Watch anime!'} />
        </div>
    );
}
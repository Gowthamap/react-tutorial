import React, { useState } from 'react'
import './style.css'

function Todo() {
    const [value, setValue] = useState("");


   
    
    return (
        <div>
            <div className="mb-5 pb-5">
            <input id="input" placeholder="Enter your today's tasks" autoComplete="off" onChange={value} type="text" />  
            <button id="add">Add</button>

            </div>
            
            <h1 id="addClass" className="text-center fs-2 text-white">sdfd</h1>

        </div>
    )
}

export default Todo

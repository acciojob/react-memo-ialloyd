import React, { useState, useEffect } from 'react';

const App = () => {

    const [todo, setTodo] = useState(['New Todo'])
    const [count, setCount] = useState(1000000000);
    const [skills, setSkill] = useState(['html', 'css', 'js', 'react'])
    const [skill, setCurrentSkill] = useState('');

    const currentSkill = () => {

        if (skill.length > 5) {

            setSkill([...skills, skill])
        }

        setCurrentSkill('');

    }

    return (<div id='main'>
        <div>
            <h1>My todos</h1>
            {

                todo.map((t, index) => <><div id={`todo-${index}`}>{t}</div><br /></>)

            }
            <button id='add-todo-btn' onClick={() => setTodo([...todo, 'New Todo'])}>Add Todo</button>
        </div><br /><br />
        <hr />
        <div id='incr-cnt'>
            <span id='calc'>Count: {count} </span>
            <button id='incr-btn' onClick={() => setCount(count + 1)}>+</button>
        </div>
        <hr />
        <div>
            <h1>memo</h1>
            <input id='skill-input' value={skill} onChange={(event) => setCurrentSkill(event.target.value)} />
            <button id='skill-btn' onClick={currentSkill}>Add Skill</button>
            <ul>
                {

                    skills.map(s => <li id={`item-jumbotron`}>{s}</li>)
                }
            </ul>
        </div>
    </div>)

}

export default App;
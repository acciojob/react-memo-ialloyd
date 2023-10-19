import React, { useState } from 'react';

const App = () => {

    const [todo, setTodo] = useState(['New Todo'])
    const [count, setCount] = useState(0);
    const [skills, setSkill] = useState(['html', 'css', 'js', 'react'])
    const [skill, setCurrentSkill] = useState('');

    return (<div id='main'>
        <div>
            <h1>My todos</h1>
            {

                todo.map(t => <><div>{t}</div><br /></>)

            }
            <button id='add-todo-btn' onClick={() => setTodo([...todo, 'New Todo'])}>Add Todo</button>
        </div><br /><br />
        <hr />
        <div>
            <span>Count: {count} </span>
            <button id='incr-cnt' onClick={() => setCount(count + 1)}>+</button>
        </div>
        <hr />
        <div>
            <h1>memo</h1>
            <input  id='skill-input' onChange={(event) => setCurrentSkill(event.target.value)} />
            <button  onClick={() => setSkill([...skills, skill])}>Add Skill</button>
            <ul>
                {

                    skills.map(s => <li>{s}</li>)
                }
            </ul>
        </div>
    </div>)

}

export default App;
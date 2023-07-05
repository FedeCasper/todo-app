import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
     return (
          <li>
               <span 
                    onClick={ (e) => {
                         console.log(props.completed);
                         console.log(props.text);
                         console.log(props);
                         props.propiedadSetTodos([])
                         }
                    }
               >{`${props.completed === true ? "🔳" : "✅"}`}</span>
               <p className={`${props.completed && "checked"}`}>{props.text}</p>
               <span className='cross {``}'>❌</span>
          </li>
     );
}

export { TodoItem }
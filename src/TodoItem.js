import './TodoItem.css'

function TodoItem(props) {
     return (
          <li>
               <span>{`${props.completed === true ? "🔳" : "✅"}`}</span>
               <p className={`${props.completed && "checked"}`}>{props.text}</p>
               <span className='cross {``}'>❌</span>
          </li>
     );
}

export { TodoItem }
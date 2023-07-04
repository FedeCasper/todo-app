import './CreateTodoButton.css'

function CreateTodoButton() {
     return (
          <button 
          className='createTodoButton' 
          onClick={ (e) => {
               console.log('Le diste click al botón')
               console.log(e)
               console.log(e.target)
          }
          }
          >+</button>
     )
}

export { CreateTodoButton }
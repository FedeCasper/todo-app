import './TodoSearch.css'; 
import React from 'react';

function TodoSearch(){
     const [searchValue, setSearchValue] = React.
     useState('');

     console.log('Los usuarios buscan ' + searchValue);

     return(
          <input 
          placeholder="Cortar Cebolla" 
          value={searchValue}
          onChange={(e) => {
               setSearchValue(e.target.value)
          }}
          />
     )
}

export {TodoSearch}
import './TodoSearch.css';
import React from 'react';

function TodoSearch({
     propiedadSearchValue,
     propiedadSetSearchValue
}) {

     return (
          <input
               placeholder="Cortar Cebolla"
               value={propiedadSearchValue}
               onChange={(e) => {
                    propiedadSetSearchValue(e.target.value)
               }}
          />
     )
}

export { TodoSearch }
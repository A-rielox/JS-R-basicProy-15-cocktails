import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
   const { setSearchTerm } = useGlobalContext();

   const searchValue = React.useRef('');

   // para q se ponga el cursor en el input cuando se renderice el componente
   React.useEffect(() => {
      searchValue.current.focus();
   }, []);

   const searchCocktail = () => {
      // y cada vez q el searchTerm cambia se invoca el useEffect del context que va  a hacer el fetch de lo q se pone en el input
      setSearchTerm(searchValue.current.value);
   };

   const handleSubmit = event => {
      event.preventDefault();
   };

   return (
      <section className="section search">
         <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="name">search your favorite cocktail</label>

               <input
                  type="text"
                  id="name"
                  ref={searchValue}
                  onChange={searchCocktail}
               />
            </div>
         </form>
      </section>
   );
};

export default SearchForm;

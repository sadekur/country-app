import React from 'react';
import Country from './Country';
import style from './countries.module.css';

const Countries  = ({countries}) => {
  return (
    <>
    <section className={style.countries}>
      {countries && countries.map((country) => {
        return (
          <Country {...country} key={country.cca2} onRemoveCountry={countries.handleRemoveCountry} />
        );
      })}
    </section>
    </>
  );
}
export default Countries ;

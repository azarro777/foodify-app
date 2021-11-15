import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavourites } from '../../actions/index';
import placeholder from './placeholder.png';
import './modal.scss';

const Modal = ({ active, setActive }) => {
  const dispatch = useDispatch();
  function getRandomId() {
    return Math.floor(Math.random() * (99999 - 10000) + 10000).toString();
  }

  const [inputs, setInputs] = useState({});
  console.log('form', inputs.strMeal);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
      idMeal: getRandomId(),
      strMealThumb: placeholder
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToFavourites(inputs));
    setActive(false);
    setInputs({});
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className='modal__container'>
          <h3>Add custom dish</h3>
          <input
            type='text'
            placeholder='Dish title'
            name='strMeal'
            value={inputs.strMeal || ''}
            onChange={handleChange}
          />
          <textarea
            placeholder='Dish description'
            name='strInstructions'
            value={inputs.strInstructions || ''}
            onChange={handleChange}
          ></textarea>
          {inputs.strMeal === undefined ||
          inputs.strInstructions === undefined ? (
            <p className='empty-recipe'>* You can't add an empty recipe</p>
          ) : (
            <button type='submit'>Add custom dish</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;

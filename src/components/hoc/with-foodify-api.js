import React from 'react';
import FoodifyApiContext from '../foodify-api-context/foodify-api-context';

const WithFoodifyApi = () => (Wrapped) => {
  return (props) => {
    return (
      <FoodifyApiContext.Consumer>
        {(FoodifyApi) => {
          return <Wrapped {...props} FoodifyApi={FoodifyApi} />;
        }}
      </FoodifyApiContext.Consumer>
    );
  };
};

export default WithFoodifyApi;

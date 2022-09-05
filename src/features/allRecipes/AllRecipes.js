import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';

import Recipe from '../../components/Recipe';
import FavoriteButton from '../../components/FavoriteButton';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';

export default function AllRecipes() {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [dispatch]);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  }

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            // icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteButton from '../../components/FavoriteButton';
import Recipe from '../../components/Recipe';
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice';

export default function FavoriteRecipes() {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  }

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  )

  function createRecipeComponent(recipe){
      return (
        <Recipe
          recipe={recipe}
          key={recipe.id}
        >
          <FavoriteButton
            onClickHandler={() => onRemoveRecipeHandler(recipe)}
            // icon={unfavoriteIconUrl}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      )
  }
}

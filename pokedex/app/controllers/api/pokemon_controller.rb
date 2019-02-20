class Api::PokemonController < ApplicationController

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
  end

  def index
    @pokemons = Pokemon.all
    render :index
  end

end

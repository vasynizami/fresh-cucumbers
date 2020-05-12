class MoviesController < ApplicationController

  # GET /movies
  def index
    @movies = Movie.all

    render json: @movies
  end

  # GET /movies/1
  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

  # private

  # def movie_params
  #   params.require(:movie).permit(user_ids: [])
  # end

end
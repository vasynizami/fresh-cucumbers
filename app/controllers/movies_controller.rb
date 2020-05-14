class MoviesController < ApplicationController

  # GET /movies
  def index
    @movies = Movie.all

    render json: @movies, include: [:reviews]
  end

  # GET /movies/1
  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

end

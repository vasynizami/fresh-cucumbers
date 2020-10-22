class ReviewsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_movie, only: [:index, :show, :update, :destroy]
  before_action :set_review, only: [:show, :update, :destroy]
  
  
  def index
    @reviews = Review.where(movie_id: @movie.id)
    render json: @reviews, include: :movie, status: :ok
  end


  def show
    render json: @review, include: :movie, status: :ok
  end

  
  def create
    @review = Review.new(review_params)
    # we need to pass current user from auth req
    @review.user = @current_user
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # we dont need to use currentuser cos it's already in the body of the review
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

 
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:movie_id])
    end

    def set_review
      @review = Review.find(params[:id])
      # if we needed show reviews by the current user, we'd use smth like (????)
      # @review = @current_user.reviews.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:user_id, :movie_id, :rating, :content)
    end
end

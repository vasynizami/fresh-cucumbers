class Movie < ApplicationRecord
  # dependent: :destroy means when you delete a movie, all its hearts get deleted
  # has_many :hearts, dependent: :destroy
  # has_many :users, through: :hearts
  has_many :reviews, dependent: :destroy
end

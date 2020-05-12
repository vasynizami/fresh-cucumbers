class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.text :img
      t.text :synopsis
      t.integer :release_year
      t.string :country
      t.string :director
      t.string :genre
      t.string :runtime

      t.timestamps
    end
  end
end

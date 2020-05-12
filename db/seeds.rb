# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Movie.destroy_all

User.create!(username: "admin", email: "admin@email.com", password: "123456")
p "#{User.count} user(s) created"


movieData = [
  {
    img: Pathname.new(Rails.root.join("db/img/time-of-gypsies.jpg")).open,
    synopsis:"Perhan (Davor Dujmovic) is a Gypsy teenager with the ability to move objects with his mind. A criminal named Ahmed convinces him to leave his devoted grandmother (Ljubica Adzovic) and loving girlfriend, and to use his powers to make some money illegally. While becoming a man and learning the trade of crime, the boy searches for his sister (who was supposed to have a leg operation) and tries to save money to realize his fantasy of returning home to marry the woman of his dreams. This film won Emir Kusturica an award at the 1989 Cannes Film Festival for his direction and was the first feature to be filmed with its entire dialogue in the Gypsy language, Romany.(by Perry Seibert)",
    release_year: 1990,
    country: "UK, Italy, Yugoslavia",
    director: "Emir Kusturica",
    genre: "Comedy/Drama",
    runtime: "142 min"
  },
  {
    img: Pathname.new(Rails.root.join("db/img/la-mala-educacion.jpg")).open,
    synopsis:"When an old friend brings filmmaker Enrique Goded (Fele Martínez) a semi-autobiographical script chronicling their adolescence, Enrique is forced to relive his youth spent at a Catholic boarding school. Weaving through past and present, the script follows a transvestite performer (Gael García Bernal) who reconnects with a grade school sweetheart. Spurred on by this chance encounter, the character reflects on her childhood sexual victimization and the trauma of closeting her sexual orientation.",
    release_year: 2004,
    country: "Spain",
    director: "Pedro Almodóvar",
    genre: "Drama",
    runtime: "105 min"
  },
  {
    img: Pathname.new(Rails.root.join("db/img/oldboy.jpg")).open,
    synopsis:"Dae-Su is an obnoxious drunk bailed from the police station yet again by a friend. However, he's abducted from the street and wakes up in a cell, where he remains for the next 15 years, drugged unconscious when human contact is unavoidable, otherwise with only the television as company. And then, suddenly released, he is invited to track down his jailor with a denouement that is simply stunning.",
    release_year: 2003,
    country: "South Korea",
    director: "Park Chan-wook",
    genre: "Drama",
    runtime: "118 min"
  },
  {
    img: Pathname.new(Rails.root.join("db/img/the-holy-mountain.jpg")).open,
    synopsis:"In a corrupt, greed-fueled world, a powerful alchemist leads a Christ-like character and seven materialistic figures to the Holy Mountain, where they hope to achieve enlightenment.",
    release_year: 1973,
    country: "Mexico",
    director: "Alejandro Jodorowsky",
    genre: "Drama/Fantasy",
    runtime: "114 min"
  }
]
Movie.create!(movieData)

p "#{Movie.count} movie(s) created"


# reviewData = [
#   {
#     # user_id: 2,
#     # movie_id: 1,
#     rating: 5,
#     content: "This is one of my most favourite movies. I don't know if I can say it was the best movie I ever saw. It's amazing to see how talented these amateur actors are and how beautiful the mis en scene is. I always thought about Time of the Gypsies as a kind of answer to the Latin American Magic Realism. Kusturica seems to know which subject requires which specific aesthetic style."
#   },
#   {
#     # user_id: 2,
#     # movie_id: 2,
#     rating: 5,
#     content: "La Mala Educación could easily be Almodóvar's best movie ever. Yes the movie is darker than usual, but the plot is masterfully rendered in a mind-boggling game of morbid role-reversals. The best metaphor I can find is a distorted mirror: the story is broken down in pieces, a movie into a movie, characters shifting unexpectedly in even darker areas, stealing each other's lines and turning the table over and over. Gael García Bernal is at his best, finally playing on ambiguity rather than relying on his good looks."
#   },
#   {
#     # user_id: 2,
#     # movie_id: 3,
#     rating: 5,
#     content: "Everything about this movie is perfect. Acting, soundtracks, story, everything. Easily the best South Korean movie ever. No need to talk too much, go watch it."
#   },
#   {
#     # user_id: 2,
#     # movie_id: 4,
#     rating: 4,
#     content: "Holy Mountain is a meticulously made work of cinematic art. It is simultaneously a brilliant absurdist farce, a cynical satire which lampoons religion and capitalism, an affirmation of faith, an indictment of humanity for its cruelty, ignorance and greed and a celebration of life and the human spirit. Who and where you are will determine your interpretation, so don't blame Jodorowsky! He's just the messenger."
#   }
# ]
# Review.create!(reviewData)
# p "#{Review.count} review(s) created"
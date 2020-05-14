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
    name: "Time Of The Gypsies",
    img: "https://images-na.ssl-images-amazon.com/images/I/51rO1SNtaLL._AC_SY450_.jpg",
    synopsis:"Perhan (Davor Dujmovic) is a Gypsy teenager with the ability to move objects with his mind. A criminal named Ahmed convinces him to leave his devoted grandmother (Ljubica Adzovic) and loving girlfriend, and to use his powers to make some money illegally. While becoming a man and learning the trade of crime, the boy searches for his sister (who was supposed to have a leg operation) and tries to save money to realize his fantasy of returning home to marry the woman of his dreams. This film won Emir Kusturica an award at the 1989 Cannes Film Festival for his direction and was the first feature to be filmed with its entire dialogue in the Gypsy language, Romany.(by Perry Seibert)",
    release_year: 1990,
    country: "UK, Italy, Yugoslavia",
    director: "Emir Kusturica",
    genre: "Comedy/Drama",
    runtime: "142 min"
  },
  {
    name: "Bad Education",
    img: "https://i.pinimg.com/originals/6f/65/67/6f65677306917ac9ff42bbe6b7f06906.jpg",
    synopsis:"When an old friend brings filmmaker Enrique Goded (Fele Martínez) a semi-autobiographical script chronicling their adolescence, Enrique is forced to relive his youth spent at a Catholic boarding school. Weaving through past and present, the script follows a transvestite performer (Gael García Bernal) who reconnects with a grade school sweetheart. Spurred on by this chance encounter, the character reflects on her childhood sexual victimization and the trauma of closeting her sexual orientation.",
    release_year: 2004,
    country: "Spain",
    director: "Pedro Almodóvar",
    genre: "Drama",
    runtime: "105 min"
  },
  { 
    name: "Oldboy",
    img: "https://images-na.ssl-images-amazon.com/images/I/51U%2BG%2BZgGgL._AC_SY450_.jpg",
    synopsis:"Dae-Su is an obnoxious drunk bailed from the police station yet again by a friend. However, he's abducted from the street and wakes up in a cell, where he remains for the next 15 years, drugged unconscious when human contact is unavoidable, otherwise with only the television as company. And then, suddenly released, he is invited to track down his jailor with a denouement that is simply stunning.",
    release_year: 2003,
    country: "South Korea",
    director: "Park Chan-wook",
    genre: "Drama",
    runtime: "118 min"
  },
  { 
    name: "The Holy Mountain",
    img: "https://i.pinimg.com/originals/20/a3/38/20a338ad37eb39d3b3ed26c710b6400e.jpg",
    synopsis:"In a corrupt, greed-fueled world, a powerful alchemist leads a Christ-like character and seven materialistic figures to the Holy Mountain, where they hope to achieve enlightenment.",
    release_year: 1973,
    country: "Mexico",
    director: "Alejandro Jodorowsky",
    genre: "Drama/Fantasy",
    runtime: "114 min"
  },
  { 
    name: "The Skin I Live In",
    img: "https://upload.wikimedia.org/wikipedia/en/2/28/Theskinilivein-poster.png",
    synopsis: "Ever since his beloved wife was horribly burned in an auto accident, Dr. Robert Ledgard (Antonio Banderas), a skilled plastic surgeon, has tried to develop a new skin that could save the lives of burn victims. Finally, after 12 years, Ledgard has created a skin that guards the body, but is still sensitive to touch. With the aid of his faithful housekeeper (Marisa Paredes), Ledgard tests his creation on Vera (Elena Anaya), who is held prisoner against her will in the doctor's mansion.",
    release_year: 2011,
    country: "Spain",
    director: "Pedro Almodóvar",
    genre: "Thriller/Horror",
    runtime: "120 min"
  },
  { 
    name: "Arizona Dream",
    img: "https://upload.wikimedia.org/wikipedia/en/0/04/Arizonadreammovie.jpg",
    synopsis:"Axel (Johnny Depp) gets caught up into the family car business when his cousin, Paul (Vincent Gallo), coaxes him to come to Arizona to attend the wedding of their Uncle Leo (Jerry Lewis). As Axel makes the decision to try selling Cadillacs with his family, he meets an eccentric woman named Elaine (Faye Dunaway) and her equally quirky stepdaughter, Grace (Lili Taylor). Their lives become inextricably intertwined through romance, dreams -- and death.",
    release_year: 1993,
    country: "USA, France",
    director: "Emir Kusturica",
    genre: "Drama/Comedy",
    runtime: "142 min"
  },
  { 
    name: "The Science of Sleep",
    img: "https://images-na.ssl-images-amazon.com/images/I/41wy8QDWaFL._AC_.jpg",
    synopsis:"Soon after the death of his father, a distraught young man (Gael García Bernal) begins a job as a graphic designer, but has little chance to create. His intense dreams begin to overtake his waking life and he becomes increasingly caught up in flights of fancy. His hyperactive imagination then begins to interfere with his courtship of a pretty neighbor (Charlotte Gainsbourg).",
    release_year: 2006,
    country: "France, Italy",
    director: "Michel Gondry",
    genre: "Comedy/Fantasy",
    runtime: "106 min"
  },
  {
    name: "Down House",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Down_House_%28film%29.jpg",
    synopsis:"The plot is set in modern Moscow, probably in the second half of the 1990s, with New Russians, Hummer H1 jeeps, bribery, violence, truckfuls of tinned stew as a dowry, and so on.",
    release_year: 2001,
    country: "Russia",
    director: "Roman Kachanov",
    genre: "Comedy",
    runtime: "89 min"
  },
  {
    name: "The Dreamers",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Dreamers_movie.jpg",
    synopsis:"In May 1968, the student riots in Paris only exacerbate the isolation felt by three youths: an American exchange student named Matthew (Michael Pitt) and twins Théo (Louis Garrel) and Isabelle (Eva Green). Having bonded over their mutual love of cinema, Matthew is fascinated by the sense of intimacy shared by Isabelle and Theo, who were born conjoined. When the twins' bohemian parents go away for a month, they ask Matthew to stay at their place, and the three lose themselves in fantasy.",
    release_year: 2003,
    country: "France, UK, Italy",
    director: "Bernardo Bertolucci",
    genre: "Romance/Drama",
    runtime: "115 min"
  },
  {
    name: "Enter The Void",
    img: "https://upload.wikimedia.org/wikipedia/en/3/39/Enter-the-void-poster.png",
    synopsis:"This psychedelic tour of life after death is seen entirely from the point of view of Oscar (Nathaniel Brown), a young American drug dealer and addict living in Tokyo with his prostitute sister, Linda (Paz de la Huerta). When Oscar is killed by police during a bust gone bad, his spirit journeys from the past -- where he sees his parents before their deaths -- to the present -- where he witnesses his own autopsy -- and then to the future, where he looks out for his sister from beyond the grave.",
    release_year: 2009,
    country: "France, Germany, Italy",
    director: "Gaspar Noé",
    genre: "Drama",
    runtime: "143 min"
  },
  {
    name: "Biutiful",
    img: "https://images-na.ssl-images-amazon.com/images/I/51WqGkUYAnL._AC_.jpg",
    synopsis:"Uxbal (Javier Bardem), a career criminal, plies his trade in Barcelona's underground sweatshops and back alleys. Unlike his associates, he has some respect for the poor workers under his thumb and is a devoted father. Told that he is ill and has just a few months to live, Uxbal tries to get his affairs in order before the spirits, with whom he communes, come to claim him.",
    release_year: 2010,
    country: "Spain, Mexico",
    director: "Alejandro González Iñárritu",
    genre: "Drama",
    runtime: "147 min"
  },
  {
    name: "Jamón Jamón",
    img: "https://images-na.ssl-images-amazon.com/images/I/41T5JStAYyL._AC_SY450_.jpg",
    synopsis:"Jose Luis (Jordi Mollà) has a cushy corporate job at the lingerie factory his mom, Conchita (Stefania Sandrelli), owns. Jose Luis makes the acquaintance of Silvia (Penélope Cruz), a beautiful laborer on the underwear assembly line, and he is instantly lovestruck. When he announces his intention to marry this blue-collar woman, Conchita is quite displeased, so she enlists the hunky Raul (Javier Bardem) to take Silvia's mind off her son. The plan works, until Conchita also falls for Raul.",
    release_year: 1992,
    country: "Spain",
    director: "Bigas Luna",
    genre: "Comedy/Romance/Drama",
    runtime: "95 min"
  },
  {
    name: "Endless Poetry",
    img: "https://www.gstatic.com/tv/thumb/v22vodart/13511883/p13511883_v_v8_ac.jpg",
    synopsis:"Alejandro Jodorowsky, an 87- year-old auteur director, recounts his young adulthood in a bohemian Santiago de Chile and his breakthrough as a poet.",
    release_year: 2016,
    country: "France, Chile",
    director: "Alejandro Jodorowsky",
    genre: "Drama",
    runtime: "128 min"
  },
  {
    name: "High Heels",
    img: "https://www.gstatic.com/tv/thumb/v22vodart/13838/p13838_v_v8_aa.jpg",
    synopsis:"The escapades of a famous Spanish actress (Marisa Paredes) and her daughter (Victoria Abril) lead to a murder-trial farce.",
    release_year: 1991,
    country: "Spain",
    director: "Pedro Almodóvar",
    genre: "Melodrama",
    runtime: "112 min"
  },
  {
    name: "The Handmaiden",
    img: "https://www.gstatic.com/tv/thumb/v22vodart/13122320/p13122320_v_v8_ab.jpg",
    synopsis:"With help from an orphaned pickpocket (Kim Tae-ri), a Korean con man (Ha Jung-woo) devises an elaborate plot to seduce and bilk a Japanese woman (Kim Min-hee) out of her inheritance.",
    release_year: 2016,
    country: "South Korea",
    director: "Park Chan-wook",
    genre: "Thriller",
    runtime: "145 min"
  }
]
Movie.create!(movieData)

p "#{Movie.count} movie(s) created"


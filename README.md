# FRESH CUCUMBERS


- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)


<br>

## Overview

_**Fresh Cucumbers** is a review-aggregation website for foreign and underground cinema. The name is an allusion to the famous Rotten Tomatoes&reg; website._

### Core Features

_The app is built on 5 interrelated tables: "Review", "Comment", "Movie", and "User" plus join table "User_Movie". It demonstrates full-CRUD functionality through generic controller actions such as `index`, `show`, `create`, `update`, `delete` for the "Review" and "Comment" tables as well as partial-CRUD `create` for the "User" table and `update` for the "Movie" table. A User has many Reviews and Comments, a Review has many Comments, a Movie has many Reviews, and a User can bookmark a Movie to the "want_to_see" tab ("User" and "Movie" have many-to-many relationship). "Movie" table is populated initially by data that comes with the app._


### Goals

- _Develop a full-stack app_
- _Utilize full CRUD functionality_
- _Employ authorization_
- _Be well styled with CSS_
- _React for Front-End_
- _Rails for Back-End_

### Team

Created, designed, and developed by [Vasilya Nizamova](https://github.com/vasynizami) for the General Assembly Software Engineering Immersive (February '20 Cohort) Unit 4 Project.

### Permissions

Under [Section 107 of the Copyright Act](https://www.copyright.gov/title17/92chap1.html#107), all the digital copyrighted material in this app is deemed as fair use. Digital assets stored locally.

<br>

## MVP


### Client (Front End)

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use only React for DOM Manipulation.
- Consume data from back-end **Ruby on Rails API**, and render that data in the components.
- Utilize **React Router** for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.
  - Perform `create`, `update`, and `delete` actions **when logged in**.

#### Wireframes


![Desktop Landing](https://i.imgur.com/PBxihfE.png)

- Desktop Landing + Sign In/Up Forms

![Dummy Link](https://i.imgur.com/od0gyvM.png)

- Desktop Landing + Sign In/Up Forms Prototypes

![Dummy Link](https://i.imgur.com/qrDb59v.png)

- Movies/Movie Detail + Reviews/User's want to see movies

![Dummy Link](https://i.imgur.com/Ebx8tnU.png)

- Movies/Movie Detail + Reviews/User's want to see movies prototypes

![Dummy Link](https://i.imgur.com/2r1YzbU.png)

- Comments drop-down + Write A review

![Dummy Link](https://i.imgur.com/X4TmHaw.png)

- Comments drop-down + Write A review Prototypes

![Dummy Link](https://i.imgur.com/qud0mqX.png)

- iPhone mockups

![Dummy Link](https://i.imgur.com/nAvghSS.png)

- iPhone prototypes

![Dummy Link](https://i.imgur.com/Chn1G2W.png)

- iPad mockups

![Dummy Link](https://i.imgur.com/I7FAU0L.png)

- iPad prototypes

#### Component Hierarchy

``` structure

src
|__ index.js
|__ App.jsx
|__ components/
      |__ Header.jsx
      |__ Main.jsx
          |__ MovieList.jsx
              |__ MovieDetails.jsx
                  |__ Reviews.jsx
                      |__ Comments.jsx
                      <!-- |__ EditComment.jsx -->
                      |__ WriteComment.jsx
                  |__ WriteReview.jsx
                  <!-- |__ EditReview.jsx -->
          |__ Login.jsx
          |__ Register.jsx
      |__ Footer.jsx

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain the navigation and logo._               |
|     Main     |   class    |   y   |   y   | _Here all the routes to other components will be defined._       |
|   MovieList  | functional |   n   |   y   | _The gallery display of movies indexed from the database._       |
| MovieDetails |    class   |   y   |   y   | _The card will render the movie info and nav to reviews._        |
|   Reviews    | functional |   n   |   y   | _Reviews will be displayed + "expand" nav to the comments._      |
|    Comments  | functional |   n   |   y   | _Comments displayed for a review._                               |
|  WriteReview |   class    |   y   |   y   | _User will have full CRUD actions over reviews._                 |
|   EditReview |   class    |   y   |   y   | _User will have full CRUD actions over reviews._                 |
| WriteComment |   class    |   y   |   y   | _User will have full CRUD actions over comments._                |
|   Login      |   class    |   y   |   y   | _Logging in form._                                               |
|   Register   |   class    |   y   |   y   | _Register form._                                                 |
|    Footer    | functional |   n   |   n   | _The footer will show legal footnote._                           |



<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://i.imgur.com/dji65dV.png)

- ERD Model

#### Data Heirarchy


``` structure

database_db
|__ users/
|__ movies/
|__ users_movies/
|__ reviews/
|__ comments/

```

#### Data Heirarchy

Login: /login  
Register: /register  
All movies bookmarked by a user: /users/:user_id/movies  
All reviews for a movie: /movies/:movie_id/reviews  
All reviews by a user: /users/:user_id/reviews  
Write a review: /movies/:movie_id/reviews/new  
Edit a review: /movies/:movie_id/reviews/:review_id/edit  
Delete a review: /movies/:movie_id/reviews  
All comments to a review: /movies/:movie_id/reviews/:revie_id/comments  
Write a comment: /movies/:movie_id/reviews/:review_id/comments/new  
Edit a comment: /movies/:movie_id/reviews/:review_id/comments/:comment_id/edit  
Delete a comment: /movies/:movie_id/reviews/:review_id/comments  

<br>

### Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Responsible for the front end._           |
|   React Router   | _Responsible for the front end routing._   |
|       CSS        | _Responsible for the styling._             |
|      Rails       | _Responsible for the back end._            |
|    PostgreSQL    | _Responsible for the database._            |

<br> 
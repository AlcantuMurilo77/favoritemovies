# Movie Library

**Movie Library** is a simple project that displays movies using the [TMDB API](https://api.themoviedb.org/3). It allows users to mark movies as favorites and view them on a dedicated favorites page.

## Features:

- Displays movies using the TMDB API.
- Allows users to mark movies as favorites.
- Displays a page with all the marked favorite movies.

## Technologies Used

- **Frontend**: (React)
- **Backend**: (Javascript (Typescript will be replacing))
- **Database**: (MongoDB (soon!))
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/AlcantuMurilo77/favoritemovies.git
   ```

2. Navigate to the project directory:

   ```bash
   cd favoritemovies
   ```

3. Install dependencies:

   ```bash
   npm install  # or yarn, depending on your package manager
   ```

4. Configure the TMDB API:

   * Create an account on [TMDB](https://www.themoviedb.org/).
   * Generate an API key.
   * Configure the API key in the project’s configuration file (such as `.env`).

5. Start the server (if it's a project with a backend):

   ```bash
   npm start
   ```

6. Open the application in your browser:

   ```
   http://localhost:3000
   ```

---

## Some Expansion Goals:

* Add a dedicated database using **MongoDB**.
* Add a feature to create personal reviews for favorited movies, along with a rating system.
* Implement user authentication to save personalized favorites.

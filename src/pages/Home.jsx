import GameCard from "../components/GameCard"

function Home() {

    const games = [
        {id:1, title: "Resident Evil 1", release_date:"1976"},
        {id:2, title: "Metal Gear V", release_date:"2015"},
        {id:3, title: "Bloodborne", release_date:"2016"},
        {id:4, title: "Grand Theft Auto: San Andreas", release_date:"2005"},
        {id:5, title: "Deus Ex: Human Revolution", release_date:"2011"},
    ];

    const handeSearch = () => {

    }

    return (
        <div className="home">

            <form onSubmit={handeSearch} className="search-form">
                <input type="text" 
                placeholder="Search for games" 
                className="search-input" 
                />

                <button type="submit" className="search-button">Search</button>
            </form>



            <div className="games-grid">
                {games.map((game) => (
                    <GameCard game={game} key={game.id}/>
                    ))}
            </div>

        </div>
    )
}

export default Home
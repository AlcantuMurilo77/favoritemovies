
function GameCard({game}){

    function onFavoriteClick(){
        alert("clicked")

    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={game.url} alt={game.title} />

            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}> ♡ </button>   
                    
            </div>

        </div>

        <div className="movie-info">
            <h3>{game.title}</h3>
            <p>{game.release_date}</p>
        </div>

    </div>

}

export default GameCard
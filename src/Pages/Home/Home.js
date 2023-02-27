import React from "react";
import HouseCard from "../../Components/HouseCard/HouseCard";
import "./Home.css"

function Home(){
    const houseCards = []

    for(let i = 0; i < 20; i++){
        houseCards.push(<HouseCard key={i}/>)
    }
    return (
        <div id="home">
            <div id="house-cards" className="container">
                {houseCards}
            </div>
        </div>
    )
}

export default Home;
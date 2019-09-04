import React, { Component } from 'react';
import axios from "axios"
import "../../App.css"

class BaseballStats extends React.Component {
    state = {
        games: [],
        selectedGame: null, // This will probably need to be the ID of the game.schedule but don't worry about that for now
    }
    handleClick = (e) => {
        console.log("I have been clicked")
        // this.setState({selectedGame: ????}); <-- I'm not sure what goes here just yet.
    }
    componentDidMount() {
        axios.get("/api/msf").then((response) => {
            console.log(response.data)
            this.setState({
                games: response.data.games,
            })
        });
    }
    render() {
        //handleclick target the <div> or <ul> then make on click 
        // onItemClick: function(e){
        //   this.setState.({ selectItem:   })    
        //}.then
        //make a model to display the user prediction of the game 
        //
        return (
            <div>
                <h3>Games</h3>
                <div style={{
                    width: 600,
                    margin: "0 auto"
                }}>
                    {this.state.games.map((game, i) =>
                        <div
                            style={{
                                border: "solid 3px black",
                                width: 100,
                                height: 200,
                                display: "inline-block",
                                borderRadius: 3,
                                marginRight: 10,
                                marginBottom: 10
                            }}
                            key={i}
                            onClick={this.handleClick}
                        >
                            <h6>{game.schedule.awayTeam.abbreviation}</h6>
                            {game.score.awayScoreTotal}

                            <h6>{game.schedule.homeTeam.abbreviation}</h6>
                            {game.score.homeScoreTotal}
                            {/* Hits {game.score.awayHitsTotal} - {game.score.homeHitsTotal} */}
                        </div>)}
                </div>
            </div>
        );
    }
}

export default BaseballStats;
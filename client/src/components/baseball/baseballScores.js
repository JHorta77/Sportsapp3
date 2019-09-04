import React, { Component } from 'react';
import api from "../../ultis/api";
import axios from "axios"

class BaseballScores extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        axios
            .get("/")
            .then(({ data }) => {
                console.log(data);
                this.setState(

                );
            })
            .catch((err) => { })
    }

    render() {
        console.log(this.state.array);
        return (
            <div>
                <h3>Games</h3>
                <ul className="list-group">

                </ul>
            </div>
        );
    }
}

export default BaseballScores;
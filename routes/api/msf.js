const express = require("express");
const router = express.Router();
// const msf = require("../../sportfeed/sportsData");
const axios = require("axios");
const btoa = (str) => new Buffer(str).toString('base64');

router.get("/", async (req, res) => {
    //     let today = new Date();


    axios.get("https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/date/20190823/games.json",
        {
            headers: {
                "Authorization": "Basic " + btoa(`${process.env.REACT_APP_ID}:MYSPORTSFEEDS`)
            }
        },
    ).then(response => res.send(response.data))
        .catch(e => {
            console.log(e)
            res.json(e.message);
        });

    // try {
    //     var data = msf.getData('nba', '2016-2017-regular', 'seasonal_player_gamelogs', 'json', { player: 'stephen-curry' });
    //     res.json(["Sample Project Data"]);
    // } catch (e) {
    //     console.log(e);
    // }
    // return msf.getData('mlb', '2019-regular', 'seasonal_games', 'json', {
    //     fordate: today.getFullYear() +
    //         ('0' + parseInt(today.getMonth() + 1)).slice(-2) +
    //         ('0' + today.getDate()).slice(-2),
    //     force: true
    // }).then(function (data) {
    //     console.log(data);
    //     res.json(data);
    // });

});

module.exports = router;
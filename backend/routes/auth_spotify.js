/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

const express = require("express");
const router = express.Router();
require("dotenv").config();
const { spotifyApi } = require("../utils/spotifyApiObj");

let scopes = ["streaming"],
    // TODO: change the state to a random string from client/backend
    state = "development-state";
function spotify_url(req, res) {
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
    console.log(authorizeURL);
    res.status(200).send(authorizeURL);
}

router.get("/url", (req, res) => spotify_url(req, res));

module.exports = {
    path: "/auth", // The main entrance to this route aka /
    handler: router, // The router object that handles this route
};

// Importeert basis modules uit npm
import express from "express";
import dotenv from "dotenv";

// Maakt een nieuwe express app
const server = express();

// Stelt het poortnummer in waar express op gaat luisteren
server.set("port", process.env.PORT || 8000);

// Activeert het .env bestand
dotenv.config();

// Stel in hoe express gebruikt kan worden
server.set("view engine", "ejs");
server.set("views", "./views");

// Start express op, haal het ingestelde poortnummer op
server.listen(server.get("port"), function () {
	// Toon een bericht in de console en geef het poortnummer door
	console.log(
		`Application started on http://localhost:${server.get(
			"port"
		)}`
	);
});

/**
 * fetchJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter and returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
 export async function fetchJson(url, payload = {}) {
	return await fetch(url, payload)
		.then((response) => response.json())
		.catch((error) => error);
}

export async function postJson(url, body) {
	return await fetch(url, {
		method: "post",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.catch((error) => error);
}
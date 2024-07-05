import express from "express";

import fetch from 'node-fetch';

import bodyParser from "body-parser";

const app = express();

// app.use(express.json());
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.redirect("/api/hello");
})

app.get("/api/hello", async (req, res) => {
    try {
        var fr = await fetch("https://ipapi.co/json/");
        var fd = await fr.json();
        let visitor_name = req.query.visitor_name || "Mark";
        const greeting = {
        "client_ip": req.ip,
        "location": fd.city,
        "greeting": `Hello ${visitor_name}!, the temperature is 11 degrees Celcius in Abuja`
    }
    res.json(greeting);
    } catch(error) {
        console.log(error);
    }
})

app.listen(11000, () => console.log("Server running on port 11000"));
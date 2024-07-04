const express = require("express");

const app = express();

app.get("/api/hello", (req, res) => {
    try {
        // let ip = req.ip;
        let visitor_name = req.query.visitor_name || "Mark";
        const greeting = {
        "client_ip": "127.0.0.1",
        "location": "Abuja",
        "greeting": `Hello ${visitor_name}!, the temperature is 11 degrees Celcius in Abuja`
    }
    res.json(greeting);
    } catch(error) {
        console.log(error);
    }
})

app.listen(9003, () => console.log("Server running on port 9003"));
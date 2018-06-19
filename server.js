const express = require("express");
// const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "543084",
    key: "fd264a721d3e2074ec2b",
    secret: "d2f61931661b8d7985a9",
    cluster: "eu",
    encrypted: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    // Pass to next layer of middleware
    next();
});

app.set("port", 5000);

app.get("/", (req, res) => {
    res.send("Welcome");
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

app.post("/prices/new", (req, res) => {
    pusher.trigger("coin-prices", "prices", {
        prices: req.body.prices,
    });
    res.sendStatus(200);
});

app.listen(app.get("port"), () => {
    console.log("Node app is running on port", app.get("port"));
});

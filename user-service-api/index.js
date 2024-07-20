const express = require('express')
const app = express();

app.get('/' , (req ,res ) => res.json([
    {
        name:"indura",
        city:"makola"
    },

    {
        name:"deepa",
        city:"kribathgoda"
    },
    {
        name:"sampath",
        city: "kotikawatta"
    }
]))

app.listen(5000, () => console.log("app is listening on port 5000"));

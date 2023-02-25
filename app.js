const express = require("express");
const app = express()

app.use(express.json())

app.post('/')
app.get('/')
app.get("/:saladId")
app.patch("/:saladId")
app.delete("/:saladId")

module.exports.app
const fetch = require("node-fetch");
fetch("./notifications.json")
.then((res) => res.json())
.then((data) => console.log(data))

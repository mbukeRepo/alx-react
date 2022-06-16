import axios from "axios";
const test = async() => {
try {
 const {data} = await axios.get("http://localhost:3000/notifications");
 console.log(data)
}
catch(err) {
 console.log(err);
}
}

test();

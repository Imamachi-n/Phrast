const axiosBase = require("axios");
const fs = require("fs");

async function wordAPITest() {
  try {
    const credential = JSON.parse(
      fs.readFileSync("../config/wordAPI-credential.json")
    );

    const axios = axiosBase.create({
      baseURL: "https://wordsapiv1.p.rapidapi.com/words",
      headers: credential,
      responseType: "json",
    });
    const res = await axios.get("?random=true");
    console.log(res.data);
  } catch (err) {
    console.error("Errors!", err);
  }
}

wordAPITest();

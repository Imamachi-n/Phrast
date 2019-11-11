const axiosBase = require("axios");

async function wordAPITest() {
  try {
    const axios = axiosBase.create({
      baseURL: "https://wordsapiv1.p.rapidapi.com/words", // バックエンドB のURL:port を指定する
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "3e7c7ba41cmsh93925d89a2c673ep120a12jsnc003729faf62",
      },
      responseType: "json",
    });
    const res = await axios.get("/hatchback/typeOf");
    console.log(res.data);
  } catch (err) {
    console.error("Error loading locations!", err);
  }
}

wordAPITest();

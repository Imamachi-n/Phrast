const axiosBase = require("axios");
const fs = require("fs");

async function GrammerBotTest(text) {
  try {
    const axios = axiosBase.create({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "json",
    });
    const res = await axios.get(
      "http://api.grammarbot.io/v2/check?&language=en-US&text=" +
        encodeURI(text)
    );
    console.log(res.data);
  } catch (err) {
    console.error("Errors!", err);
  }
}

GrammerBotTest("I can't hav an pen.");

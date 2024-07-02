// pages/api/market.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    console.log("Fetching crypto data...");
    const cryptoResponse = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,ripple,cardano,solana,aave,arbitrum,sushi,matic,tether,dogecoin",
        },
      }
    );
    console.log("Crypto data fetched successfully");

    res.status(200).json({
      cryptoData: cryptoResponse.data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

// pages/api/predictions.js

export default async function handler(req, res) {
    try {
      const response = await fetch("https://betadvisor.club/data/dta/b/r2.php");
      const data = await response.text();
      res.status(200).send(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
    }
  }
  
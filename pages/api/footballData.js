// pages/api/footballData.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface AdditionalFootballData {
  // Define your data structure here based on the actual data
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<AdditionalFootballData[]>) {
  try {
    const response = await fetch('https://betadvisor.club/data/dta/b/data.json');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

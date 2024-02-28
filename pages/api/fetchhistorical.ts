import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical';
  
    const key = process.env.COIN_MARKET_CAP_API_KEY;
  
    try {
      const apiRes = await axios.get(url, {
        params: {
            time_start: '2023-01-01', // Example start date
            time_end: `2023-02-28`// Example end date
            // Add other parameters as needed

        },
        headers: {
          'X-CMC_PRO_API_KEY': key,
        
        },
      });
      res.status(200).json(apiRes.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
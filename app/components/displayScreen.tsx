import { LineChart } from '@mui/x-charts';
import { useEffect } from 'react';

import ETH from "../../public/eth.svg"
import Image from 'next/image';

const baseUrl :string = "https://etherscan.io/token/"
interface Coin {
    name: string;
    platform: {
        id: number;
        token_address: string;
    }
    quote: {
      USD: {
        percent_change_1h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_90d: number;
      };
    };
  }


  interface DisplayScreenProps {
    coin: Coin;
  }

  export const DisplayScreen: React.FC<DisplayScreenProps> = ({ coin }) => {



    return (
      <div  className='w-80 md:w-96 h-96 hover:cursor-pointer hover:bg-slate-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-slate-600 flex flex-col justify-center gap-4 items-center  text-center'>

        <h2 className='font-bold text-2xl'>Coin of the day</h2>

        <figure className=' flex justify-center items-center w-40 h-40 bg-yellow-200 shadow-md shadow-blue rounded-full  '>
            <Image src={ETH} alt='Logo' width={70} />
        </figure>
        <fieldset className='p-2 flex flex-col justify-between'>
        <h1 className='font-bold font-sans text-3xl p-2'>{coin.name}</h1>
        <p>1H change: <span className={`${coin.quote.USD.percent_change_1h > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_1h.toFixed(2)}%</span></p>
        <p>24H change: <span className={`${coin.quote.USD.percent_change_24h > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_24h.toFixed(2)}%</span></p>
        <p>7D change: <span className={`${coin.quote.USD.percent_change_7d > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_7d.toFixed(2)}%</span></p>
        </fieldset>




      </div>
    );
  };


  
  export const DisplayScreenWeek: React.FC<DisplayScreenProps> = ({ coin }) => {


    return (
      <div id={coin.platform.token_address} onClick={(e) => window.open(baseUrl + e.currentTarget.id, "_blank")} className='w-80 md:w-96 h-96 hover:cursor-pointer hover:bg-slate-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-slate-600 flex flex-col justify-center items-center gap-4 text-center'>

        <h2 className='font-bold text-2xl'>Coin of the week</h2>

        <figure className=' flex justify-center items-center w-40 h-40 bg-yellow-200 shadow-md shadow-blue rounded-full  '>
            <Image src={ETH} alt='Logo' width={90} />
        </figure>
        <fieldset className='p-2 flex flex-col justify-between'>
        <h1 className='font-bold font-sans text-3xl p-2'>{coin.name}</h1>
        <p>24H change: <span className={`${coin.quote.USD.percent_change_24h > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_24h.toFixed(2)}%</span></p>
        <p>7D change: <span className={`${coin.quote.USD.percent_change_7d > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_7d.toFixed(2)}%</span></p>
        <p>30D change: <span className={`${coin.quote.USD.percent_change_30d > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_30d.toFixed(2)}%</span></p>
        </fieldset>





      </div>
    );
  };

  
  export const DisplayScreenMonth: React.FC<DisplayScreenProps> = ({ coin }) => {

   
    return (
      <div id={coin.platform.token_address} onClick={(e) => window.open(baseUrl + e.currentTarget.id, "_blank")} className='w-80 md:w-96 h-96 hover:cursor-pointer hover:bg-slate-800 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-slate-600 flex flex-col justify-center items-center gap-4 text-center'>

        <h2 className='font-bold text-2xl'>Coin of the month</h2>

        <figure className=' flex justify-center items-center w-40 h-40 bg-yellow-200 shadow-md shadow-blue rounded-full  '>
            <Image src={ETH} alt='Logo' width={120} />
        </figure>
        <fieldset className='p-2 flex flex-col justify-between'>
        <h1 className='font-bold font-sans text-3xl p-2'>{coin.name}</h1>
        <p>24H change: <span className={`${coin.quote.USD.percent_change_7d > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_7d.toFixed(2)}%</span></p>
        <p>7D change: <span className={`${coin.quote.USD.percent_change_30d > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_30d.toFixed(2)}%</span></p>
        <p>30D change: <span className={`${coin.quote.USD.percent_change_90d > 0 ? "text-green-500" : "text-red-500"}`}>{coin.quote.USD.percent_change_90d.toFixed(2)}%</span></p>
        </fieldset>




      </div>
    );
  };

  
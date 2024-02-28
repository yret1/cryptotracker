import React from "react";
import { useState } from "react";

interface Props {
    markets: any[];
}


export const Markets : React.FC<Props> =({markets}) => {




    const [count, setCount] = useState(0);

    return (
        <div className="w-80 md:w-96 h-96 flex flex-col justify-center items-center rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-slate-700 overflow-hidden">
            <section className="w-full flex justify-center items-center text-center p-2">
                <p className="font-bold text-2xl">Top 5 Traded</p>
            </section>
            <section className="w-full flex justify-center items-center text-center p-2">
                <p className="w-6/12 flex justify-start items-start px-12 font-semibold">Coin</p>
                <p className="w-6/12 flex justify-start items-start px-12 font-semibold">Change</p>
            </section>

            {markets.slice(0, 5).map((market, index) => (
                <div key={index} className="w-full h-1/5 flex justify-between px-10 items-center text-center border-slate-700 border-b-2 hover:bg-slate-700 hover:cursor-pointer last:border-b-0 ">
                    <fieldset className="flex flex-col justify-start items-start">
                        <h1 className="font-semibold">{market.name}</h1>
                        <p className="text-slate-300">{market.symbol}</p>
                    </fieldset>
                    <fieldset className="flex items-center justify-between w-20">
                        <p>24H: <span className={`${market.quote.USD.percent_change_24h > 0 ? "text-green-500" : "text-red-500"}`}>{market.quote.USD.percent_change_24h.toFixed(2)}%</span></p>
                        {market.quote.USD.percent_change_24h > 0 ? <p className="text-green-500">&uarr;</p> : <p className="text-red-500">&darr;</p>}
                    </fieldset>
                </div>
            ))}
        </div>
    );
}
;








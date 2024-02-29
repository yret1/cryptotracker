"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import loader from "@/public/vercel.svg"
import { DisplayScreen, DisplayScreenWeek, DisplayScreenMonth } from "./components/displayScreen";

import { Markets } from "./components/Markets";


export default function Home() {
  const [cryptoArr, setCryptoArr] = useState<{slug:string, quote:{USD:{percent_change_24h:number, percent_change_7d:number, percent_change_30d:number}}}[]>([]);
  const [ofTheDay, setOfTheDay] = useState<any>(null);
  const [symbols, setSymbols] = useState<string[]>([]);
  const [ofTheWeek, setOfTheWeek] = useState<any>(null);
  const [ofTheMonth, setOfTheMonth] = useState<any>(null);
  const [timer, setTimer] = useState<number>(120);

  useEffect(() => {



    axios.get("/api/fetch")
      .then((res) => {
        setCryptoArr(res.data.data);
      })
      .catch((error) => console.error("Failed to fetch data:", error));

      const next = setInterval(async () => {
        setTimer((prev) => prev - 1);
      }, 1000);

     

   const inter = setInterval(async () => {
      

      axios.get("/api/fetch")
      .then((res) => {
        setCryptoArr(res.data.data);
      })
      .catch((error) => console.error("Failed to fetch data:", error));

      setTimer(120)

    

    

    }, 120000);


    return () => {
      clearInterval(inter);
      clearInterval(next);
      
    }
  }, []);

  useEffect(() => {
    if (cryptoArr.length === 0) return;

    let bestDay = cryptoArr[0];
    let bestWeek = cryptoArr[0];
    let bestMonth = cryptoArr[0];
    let tempSymbols : string[] = [];

    cryptoArr.forEach((coin) => {
      tempSymbols.push(coin.slug);
      if (coin.quote.USD.percent_change_24h > bestDay.quote.USD.percent_change_24h) {
        bestDay = coin;
      }
      if(coin.quote.USD.percent_change_7d > bestWeek.quote.USD.percent_change_7d){
        bestWeek = coin;
      }
      if(coin.quote.USD.percent_change_30d > bestMonth.quote.USD.percent_change_30d){
        bestMonth = coin;
      }
    });

    setSymbols(tempSymbols);
    setOfTheDay(bestDay);
    setOfTheWeek(bestWeek);
    setOfTheMonth(bestMonth);
    console.log(symbols);
  }, [cryptoArr]);


  return (
    <main className="flex min-h-screen flex-col gap-6 items-center justify-start p-2 bg-slate-900">
      <header className="w-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">COINTRACK</h1>
        <p>See what crypto is trending!</p>

        <div className="absolute top-5 left-5 flex items-center justify-center gap-2"> 
        <Image className="animate-spin" src={loader} alt="loader" width={25} height={25} />
        <p>{timer}</p>
        </div>
      </header>

      <section className="flex justify-center flex-wrap w-screen gap-10">

              
        {ofTheDay && <section className="w-80 h-96 flex justify-center items-center">
          <DisplayScreen coin={ofTheDay} />
        </section>}
        {ofTheWeek && <section className="w-80 h-96 flex justify-center items-center">
          <DisplayScreenWeek coin={ofTheWeek} />
        </section>}
        {ofTheMonth && <section className="w-80 h-96 flex justify-center items-center">
          <DisplayScreenMonth coin={ofTheMonth} />
        </section>}
        <section className="w-screen flex justify-center items-center">
          <Markets markets={cryptoArr} />
        </section>

      </section>
    </main>
  );
}



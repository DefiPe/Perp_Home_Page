import { cn } from "@/@";
import Marquee from "@/components/magicui/marquee";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/marquee.module.css";

const CryptoCard = ({
  image,
  name,
  price,
  change,
}: {
  image: string;
  name: string;
  price: number;
  change: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4",
        "bg-gray-900 hover:bg-gray-700",
        "dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex flex-col items-center">
        <img className="rounded-full" width="64" height="64" alt={name} src={image} />
        <figcaption className="text-lg font-medium text-white mt-2">
          {name}
        </figcaption>
        <p className="text-sm font-medium text-gray-400 mt-1">Price: ${price}</p>
        <p className={`text-sm ${change < 0 ? 'text-red-500' : 'text-green-500'} mt-1`}>
          24h Change: {change.toFixed(2)}%
        </p>
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,ripple,cardano,solana,aave,arbitrum,sushi,matic,tether,dogecoin",
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  const firstRow = cryptoData.slice(0, cryptoData.length / 2);
  const secondRow = cryptoData.slice(cryptoData.length / 2);

  return (
    <div className={styles.header}>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl bg-black">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((crypto: any) => (
            <CryptoCard
              key={crypto.id}
              image={crypto.image}
              name={crypto.name}
              price={crypto.current_price}
              change={crypto.price_change_percentage_24h}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover direction="right" className="[--duration:30s]">
          {secondRow.map((crypto: any) => (
            <CryptoCard
              key={crypto.id}
              image={crypto.image}
              name={crypto.name}
              price={crypto.current_price}
              change={crypto.price_change_percentage_24h}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeDemo;

import { cn } from "@/@";
import Marquee from "@/components/magicui/marquee";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/styles/marquee.module.css";

interface CryptoCardProps {
  image: string;
  name: string;
  price: number;
  change: number;
}

interface CryptoData {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoCard = ({ image, name, price, change }: CryptoCardProps) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
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
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/market");
        setCryptoData(response.data.cryptoData);
        console.log(response.data.cryptoData)
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const firstRow = cryptoData.slice(0, Math.ceil(cryptoData.length / 2));
  const secondRow = cryptoData.slice(Math.ceil(cryptoData.length / 2));

  return (
    <div className={styles.header}>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl bg-black" style={{ backgroundColor: "#030014" }}>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((item) => (
                <CryptoCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.current_price}
                  change={item.price_change_percentage_24h}
                />
              ))}
            </Marquee>
            <Marquee pauseOnHover direction="right" className="[--duration:30s]">
              {secondRow.map((item) => (
                <CryptoCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.current_price}
                  change={item.price_change_percentage_24h}
                />
              ))}
            </Marquee>
          </>
        )}
      </div>
    </div>
  );
};

export default MarqueeDemo;

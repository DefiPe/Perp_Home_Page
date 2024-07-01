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

interface NftData {
  id: string;
  thumb: string;
  name: string;
  floor_price: number;
  floor_price_24h_percentage_change: number;
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
  const [nftData, setNftData] = useState<NftData[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const cryptoResponse = await axios.get<CryptoData[]>(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,ripple,cardano,solana,aave,arbitrum,sushi,matic,tether,dogecoin",
            },
          }
        );
        setCryptoData(cryptoResponse.data);

        const nftResponse = await axios.get<NftData[]>(
          "https://api.coingecko.com/api/v3/nfts",
          {
            params: {
              ids: "azuki,bored-ape-yacht-club,cryptopunks,mutant-ape-yacht-club,clonex,cyberkongz",
            },
          }
        );
        setNftData(nftResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  const combinedData = [...nftData, ...cryptoData];
  const firstRow = combinedData.slice(0, Math.ceil(combinedData.length / 2));
  const secondRow = combinedData.slice(Math.ceil(combinedData.length / 2));

  const getImage = (item: CryptoData | NftData): string => {
    if ("image" in item) {
      return item.image;
    } else {
      return item.thumb;
    }
  };

  const getPrice = (item: CryptoData | NftData): number => {
    if ("current_price" in item) {
      return item.current_price;
    } else {
      return item.floor_price;
    }
  };

  const getChange = (item: CryptoData | NftData): number => {
    if ("price_change_percentage_24h" in item) {
      return item.price_change_percentage_24h;
    } else {
      return item.floor_price_24h_percentage_change;
    }
  };

  return (
    <div className={styles.header}>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl bg-black">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((item) => (
            <CryptoCard
              key={item.id}
              image={getImage(item)}
              name={item.name}
              price={getPrice(item)}
              change={getChange(item)}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover direction="right" className="[--duration:30s]">
          {secondRow.map((item) => (
            <CryptoCard
              key={item.id}
              image={getImage(item)}
              name={item.name}
              price={getPrice(item)}
              change={getChange(item)}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeDemo;

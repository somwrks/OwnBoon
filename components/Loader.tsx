import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const quotes: {[key: string]: string} = {
    "You are never too old to set another goal or to dream a new dream.":
      "C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams.":
      "Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.":
      "Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.":
      "Nelson Mandela",
    "Believe you can and you're halfway there.": "Theodore Roosevelt",
    "Continuous effort - not strength or intelligence - is the key to unlocking our potential.":
      "Winston Churchill",
    "The only way to do great work is to love what you do.": "Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.":
      "Albert Schweitzer",
    "The most common way people give up their power is by thinking they don't have any.":
      "Alice Walker",
    "You miss 100% of the shots you don't take.": "Wayne Gretzky",
  };

  useEffect(() => {
    const quoteIndex = Math.floor(Math.random() * 10);
    setQuote(Object.keys(quotes)[quoteIndex]);
    setAuthor(quotes[Object.keys(quotes)[quoteIndex]]);
  }, []);

  return (
    <div className="loader h-[100vh]">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["lightblue", "cyan", "blue", "white", "darkblue"]}
      />
      <h1 className="text-xl text-center font-serif">
        <q>{quote}</q>
        <br />- {author}
      </h1>
    </div>
  );
};

export default Loader;

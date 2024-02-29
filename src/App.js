import productMobileImage from "./assets/image-product-mobile.jpg";
import productDesktopImage from "./assets/image-product-desktop.jpg";
import iconCart from "./assets/icon-cart.svg";
import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageUrl = () => {
    return windowWidth < 768 ? productMobileImage : productDesktopImage;
  };

  return (
    <div className="bg-cream flex min-h-screen items-center justify-center">
      <div className="mx-4 my-7 flex max-w-96 flex-col md:flex-row md:rounded-lg md:max-w-[600px]">
        <img
          src={getImageUrl()}
          alt="product"
          className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:max-w-[300px] md:max-h-[450px]"
        />
        <div className=" rounded-b-lg bg-white p-6 md:rounded-r-lg md:rounded-bl-none">
          <p className="pb-3 text-xs tracking-[5px] text-slate-500">PERFUME</p>
          <h1 className="pb-4 font-[Fraunces] text-3xl font-bold text-very-dark-blue">
            Gabrielle Essence <br />
            Eau De Parfum
          </h1>
          <h2 className="pb-6 text-sm font-medium leading-6 text-slate-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </h2>
          <div className="flex items-center gap-6 pb-5 md:pb-8">
            <span className="text-dark-cyan font-[Fraunces] text-4xl font-bold">
              $149.99
            </span>
            <span className="text-s text-slate-500 line-through">$169.99</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-dark-cyan flex h-12 w-full items-center justify-center gap-4 rounded-lg hover:bg-very-dark-blue">
              <img src={iconCart} alt="cart" />
              <span className="text-sm font-bold text-white">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

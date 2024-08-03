import React, { Fragment } from "react";
import {
  HeroSlider,
  CategorySlider,
  NewProduct,
  BestSellerProduct,
  Banner,
  AllProducts
} from "../../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <style>
          {`
            @font-face {
              font-family: "Consolas";
              font-weight: bold;
              font-style: normal;
              src: url(${
                process.env.PUBLIC_URL + "/assets/fonts/Consolas.eot"
              });
              src: url(${
                process.env.PUBLIC_URL + "/assets/fonts/Consolas.eot?#iefix"
              })
              format("embedded-opentype"),
              url(${process.env.PUBLIC_URL + "/assets/fonts/Consolas.woff2"})
              format("woff2"),
              url(${
                process.env.PUBLIC_URL + "/assets/fonts/Consolas.woff"
              }) format("woff"),
              url(${process.env.PUBLIC_URL + "/assets/fonts/Consolas.ttf"})
              format("truetype"),
              url(${
                process.env.PUBLIC_URL + "/assets/fonts/Consolas.svg#Consolas"
              })
              format("svg");
            }

            @font-face {
              font-family: "Merriweather-Black";
              font-weight: bold;
              font-style: normal;
              src: url(${
                process.env.PUBLIC_URL + "/assets/fonts/Merriweather-Black.eot"
              });
              src: url(${
                process.env.PUBLIC_URL +
                "/assets/fonts/Merriweather-Black.eot?#iefix"
              })
              format("embedded-opentype"),
              url(${
                process.env.PUBLIC_URL +
                "/assets/fonts/Merriweather-Black.woff2"
              })
              format("woff2"),
              url(${
                process.env.PUBLIC_URL + "/assets/fonts/Merriweather-Black.woff"
              }) format("woff"),
              url(${
                process.env.PUBLIC_URL + "/assets/fonts/Merriweather-Black.ttf"
              })
              format("truetype"),
              url(${
                process.env.PUBLIC_URL +
                "/assets/fonts/Merriweather-Black.svg#Merriweather-Black"
              })
              format("svg");
            }
          
          `}
        </style>
      </Helmet>
      <div className="body-wrapper space-pb--120">
        {/* hero slider */}
        <HeroSlider />
        {/* category slider */}
        <CategorySlider />
        {/* new products */}
        <NewProduct limit="2" type="new" />
        {/* best seller products */}
        <BestSellerProduct limit="2" type="bestSeller" />
        {/* banner */}
        <Banner
          title="Best <br /> Selling"
          subtitle="Product"
          image="/assets/img/banner/banner1.jpg"
          url="/shop"
        />
        {/* all products */}
        <AllProducts limit="12" />
      </div>
    </Fragment>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, subtitle, image, url }) => {
  return (
    <div className="banner-area space-mb--40">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="banner-content">
              <div className="banner-content__image">
                <Link to={process.env.PUBLIC_URL + url}>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="banner-content__text">
                <h3
                  className="title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <h4 className="subtitle">{subtitle}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

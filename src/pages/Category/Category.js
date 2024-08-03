import React, { Component, Fragment } from "react";
import axios from "axios";
import { Preloader, ErrorMessage, Breadcrumb } from "../../components";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: true,
      errorMessage: null
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    axios
      .get(process.env.PUBLIC_URL + "/data/category.json")
      .then((response) =>
        this.setState({
          categories: response.data,
          isLoading: false
        })
      )
      .catch((error) =>
        this.setState({ errorMessage: error.message, isLoading: false })
      );
  }

  render() {
    const { categories, isLoading, errorMessage } = this.state;
    let content;
    if (isLoading) {
      content = <Preloader />;
    } else {
      if (errorMessage) {
        content = <ErrorMessage errorMessage={errorMessage} />;
      } else {
        content = (
          <div className="body-wrapper space-pb--120">
            <Breadcrumb pageTitle="Categories" />
            <div className="category-area">
              <div className="container">
                <div className="row category-wrapper">
                  {categories &&
                    categories.map((single) => {
                      return (
                        <div className="col-12" key={single.id}>
                          <Link
                            to={process.env.PUBLIC_URL + single.url}
                            className="single-category bg-img"
                            style={{
                              backgroundImage: `url(${
                                process.env.PUBLIC_URL + single.backgroundImage
                              })`
                            }}
                          >
                            <span className="single-category__image">
                              <img
                                src={process.env.PUBLIC_URL + single.image}
                                className="injectable"
                                alt=""
                              />
                            </span>
                            <span className="single-category__title">
                              {single.name}
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return <Fragment>{content}</Fragment>;
  }
}

export default Categories;

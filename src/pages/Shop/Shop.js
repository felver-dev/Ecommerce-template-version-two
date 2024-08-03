import React, { Component } from "react";
import { connect } from "react-redux";
import { ShopProducts } from "../../components";
import { getSortedProducts } from "../../helpers/product";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "",
      sortValue: "",
      finalSortedProducts: []
    };
  }

  componentDidMount() {
    let sortedProducts = getSortedProducts(
      this.props.products,
      this.state.sortType,
      this.state.sortValue
    );
    this.setState({
      finalSortedProducts: sortedProducts
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortValue !== prevState.sortValue) {
      let sortedProducts = getSortedProducts(
        this.state.finalSortedProducts,
        this.state.sortType,
        this.state.sortValue
      );
      this.setState({
        finalSortedProducts: sortedProducts
      });
    }
  }

  getFilterSortParams = (sortType, sortValue) => {
    this.setState({
      sortType,
      sortValue
    });
  };

  render() {
    const { getFilterSortParams } = this;
    const { finalSortedProducts } = this.state;
    return (
      <div className="body-wrapper space-pb--120">
        {/*====================  shop header ====================*/}
        <div className="breadcrumb-area space-pt--5 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-5">
                <h1 className="page-title">All Collections</h1>
              </div>
              <div className="col-7 text-right">
                <div className="shop-dropdown">
                  <select
                    className="space-mr--20"
                    onChange={(e) =>
                      getFilterSortParams("filterSort", e.target.value)
                    }
                  >
                    <option value="default">SORT</option>
                    <option value="priceHighToLow">Price High to low</option>
                    <option value="priceLowToHigh">Price Low to high</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of shop header  ====================*/}

        {/* shop products */}
        <ShopProducts products={finalSortedProducts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
    wishlistItems: state.wishlistData
  };
};

export default connect(mapStateToProps)(Shop);

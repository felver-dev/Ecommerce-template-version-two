// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0
    ? (price - price * (discount / 100)).toFixed(2)
    : price;
};

// get products
export const getProducts = (products, limit, type, category) => {
  const finalProducts = category
    ? products.filter(
        (product) => product.category.filter((single) => single === category)[0]
      )
    : products;
  if (type && type === "bestSeller") {
    return (
      finalProducts &&
      finalProducts
        .sort((a, b) => {
          return b.saleCount - a.saleCount;
        })
        .slice(0, limit ? limit : finalProducts.length)
    );
  }
  if (type && type === "new") {
    const newProducts = finalProducts.filter((single) => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  return (
    finalProducts &&
    finalProducts.slice(0, limit ? limit : finalProducts.length)
  );
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color) => {
  let productInCart = cartItems.filter(
    (single) =>
      single.id === product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor === color
        : true)
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        (single) =>
          single.id === product.id && single.selectedProductColor === color
      )[0].quantity;
    } else {
      return cartItems.filter((single) => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};

// shop top filter toggle
export const toggleShopTopFilter = (e) => {
  const shopTopFilterWrapper = document.querySelector("#shop-filter-menu");
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};

//get products based on filter
export const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    let sortProducts = [...products];
    if (sortType === "filterSort") {
      if (sortValue === "default") {
        return sortProducts;
      }
      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }
  return products;
};

export const setActiveSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".shop-filter-block__color li button, .shop-filter-block__category li button"
  );
  filterButtons.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

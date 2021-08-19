import * as React from 'react';
import LayoutProductPage from '../../../components/layout-product-page';

const SingleProduct = (props) => {
  const {
    pageContext: { product },
  } = props;

  return product ? <LayoutProductPage {...{ product }} /> : <></>;
};

export default SingleProduct;

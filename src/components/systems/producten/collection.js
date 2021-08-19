import React from 'react';

const AdviesBanner = (props) => {
  const { categories } = props;

  return categories && categories.length ? (
    <section className='product-collection'>
      {categories.map(
        ({
          node: {
            id,
            name,
            slug: categorySlug,
            description,
            image: categoryImage,
            product: products,
          },
        }) => (
          <div key={id} className='product-collection-container'>
            <div className='collection-block container'>
              <div className='collection-block-info'>
                <h2>{name}</h2>
                {description ? <p>{description?.internal?.content}</p> : <></>}
                {categoryImage ? (
                  <img className='uitleg-img' src={categoryImage?.file?.url} />
                ) : (
                  <></>
                )}
                {/* TODO: Should we do single category page? */}
                <div className='content-block-systems__buttons'>
                  <a href="/systems/advies-service/">advies & service</a>
                </div>
              </div>
              {products && products.length ? (
                <div className='collection-block-products'>
                  {products.map(
                    ({ id, name, slug: productSlug, image: productImage }) => (
                      <div key={id} className='single-product'>
                        <a href={`/systems/producten/${productSlug}`}>
                          {productImage ? (
                            <img src={productImage?.file?.url} />
                          ) : (
                            <></>
                          )}
                        </a>
                        <span>{name}</span>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        )
      )}
    </section>
  ) : (
    <></>
  );
};

export default AdviesBanner;

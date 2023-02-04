import React from "react";

import Helmet from "../Helmet";
import Section, { SectionBody, SectionTitle } from "../Section";
import Grid from "../Grid";
import ProductCard from "../ProductCard";
import ProductView from "../ProductView";

import productData from "../../assets/fake-data/products";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);

  const relatedProducts = productData.getProducts(8);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} isModal={false} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;

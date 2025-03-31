import React from "react";

import { PRODUCT_CARD_ITEM } from "@/components/marketplace/static";
import { ProductDetails, Reviews } from "@/components/marketplace";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const currentProduct = PRODUCT_CARD_ITEM.find((item) => item.slug === slug);
  return {
    title: `${currentProduct?.title} - Marketplace`,
    description: `Discover ${currentProduct?.title}`,
  };
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const currentProduct = PRODUCT_CARD_ITEM.find((item) => item.slug === slug);
  return (
    <div className="min-h-screen pt-24">
      {/* component wrapper */}
      <main className="px-4 md:max-w-6xl 2xl:max-w-7xl mx-auto py-10">
        {/* product details */}
        <>
          <ProductDetails currentProduct={currentProduct!} />
        </>

        {/* reviews */}
        <>
          <Reviews currentProduct={currentProduct!} />
        </>
      </main>
    </div>
  );
};

export default ProductPage;

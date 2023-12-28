import getProduct from "@/actions/get_product";
import ImageGallery from "@/components/gallery/ImageGallery";
import ProductInfo from "@/components/gallery/ProductInfo";

const page = async ({ params }) => {
  const product = await getProduct({ id: params.productId });
  return (
    <div className="md:space-y-0 md:grid md:grid-cols-2 md:items-start md:gap-x-8 space-y-8">
      <ImageGallery images={product?.images} />
      <ProductInfo data={product} />
    </div>
  );
};

export default page;

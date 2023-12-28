import getColors from "@/actions/get_colors";
import getProducts from "@/actions/get_products";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import ProductCard from "@/components/ui/ProductCard";

const page = async ({ params, searchParams }) => {
  const colors = await getColors();

  const colorId = searchParams.colorId;
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId,
  });

  return (
    <section className="md:grid md:grid-cols-5 gap-8 space-y-4">
      <Filter valueKey="colorId" name="Colors" data={colors} />
      <div className="col-span-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

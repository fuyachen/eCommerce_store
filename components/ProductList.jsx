import ProductCard from "./ui/ProductCard"

const ProductList = ({data:products}) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold py-4">Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      </>
  )
}

export default ProductList
import getBillboards from "@/actions/get_billboards"
import getProducts from "@/actions/get_products"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"

export default async function HomePage() {
  const billboard = await getBillboards({id: "eef5b6d8-720d-41ff-aa8c-b4cb86c29a41"})
  const products = await getProducts({})
  return (
    <div className="mx-auto">
      <Billboard data={billboard} />
      <ProductList data={products} />
    </div>
  )
}

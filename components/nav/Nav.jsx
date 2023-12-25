import Link from "next/link"
import MainNav from "./MainNav"
import getCategories from "@/actions/get_catgories"
import NavActions from "./NavActions"

const Nav = async () => {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <div className="px-4 sm:px-6 lg-px-8 flex h-16 items-center">
        <Link href="/" className="font-bold text-xl mr-4">
          STORE
        </Link>
        <MainNav data={categories} />
        <NavActions />
      </div>
    </div>
  )
}

export default Nav

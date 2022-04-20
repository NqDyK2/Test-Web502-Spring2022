import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from "../Types/Products"

type ListProductProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ListProduct = (props: ListProductProps) => {

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Desc
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Remove</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.products?.map((item, index) => {
                        return <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {item.name}
                            </th>
                            
                            <td className="px-6 py-4">
                                {item.price}
                            </td>
                            
                            <td className="px-6 py-4">
                                {item.desc}
                            </td>
                            <td className="px-6 py-4">
                                <img src={item.img} alt="" width={"100px"}/>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button><Link to={`/products/${item.id}/edit`} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 mt-2 text-sm">Edit</Link></button>
                            </td>
                            <td className="px-6 py-4 text-left">
                                <button type='submit' onClick={() => props.onRemove(item.id)} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 -ml-6 mb-1 mt-2 text-sm">Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Link to={"/products/add"}>
                <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 -ml-6 mb-1 mt-2 text-sm">
                    Add More Product
                </button>
            </Link>
        </div>
    )
}

export default ListProduct
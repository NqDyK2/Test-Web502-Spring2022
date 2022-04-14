import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type Inputs = {
    name: string,
    price: number,
    desc: string,
    img: string,
}

type ProductAddProps = {
    onAdd: (products: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInputs) => {
        props.onAdd(dataInputs)
        alert("Add more product success!!!");
        navigate("/products")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" id="name" {...register('name', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <span className='text-red-600'>You need to enter this field</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                        <input type="number" {...register('price')} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <span className='text-red-600'>You need to enter this field</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Img</label>
                        <input type="text" {...register('img')} id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <span className='text-red-600'>You need to enter this field</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desc</label>
                        <textarea id="desc" {...register('desc')} ></textarea><br />
                    </div>
                    <button>Add More</button>
                </div>

            </form>
        </div>
    )
}

export default ProductAdd
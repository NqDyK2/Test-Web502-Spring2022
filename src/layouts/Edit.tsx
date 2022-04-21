import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/products'
import { ProductsType } from '../types/Products'
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type EditProps = {
    onUpdate: (product: ProductsType) => void
}
type Inputs = {
    name: string,
    price: number,
    img: string,
    desc: string,
}

const Edit = (props: EditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<Inputs> = data => {
        props.onUpdate(data)
        toastr.success("Edit this products successfully!!!!");
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
                        <input type="number" {...register('price', { required: true })} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <span className='text-red-600'>You need to enter this field</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Img</label>
                        <input type="text" {...register('img', { required: true, minLength: 5 })} id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {errors.name && <span className='text-red-600'>You need to enter this field</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desc</label>
                        <textarea id="desc" {...register('desc', { required: true })} ></textarea><br />
                    </div>
                    <button>Update</button>
                </div>

            </form>
        </div>
    )
}

export default Edit
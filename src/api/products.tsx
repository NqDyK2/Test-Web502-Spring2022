import instance from "./instance";
import { ProductType } from "../Types/Products";

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const create = (products:any) => {
    const url = `/products`;
    return instance.post(url,products)
}
export const read = (id:any)=> {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const update = (product: any) => {
    const url = `/products/${product.id}`;
    return instance.patch(url, product);
}
export const remove = (id:any) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
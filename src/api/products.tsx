import instance from "./instance";

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const create = (products:any) => {
    const url = `/products`;
    return instance.post(url,products)
}
export const read = (id:any) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const edit = (products:any) => {
    const url = `/products/${products.id}`;
    return instance.patch(url)
}
export const remove = (id:any) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
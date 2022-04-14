import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListProduct from './layouts/ListProduct'
import ProductEdit from './layouts/ProductEdit'
import ProductAdd from './layouts/ProductAdd'
import { ProductType } from './Types/Products'
import { create, list, remove, update } from './api/products'
import Signup from './layouts/Signup'
import Signin from './layouts/Signin'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data)
    }
    getProducts();
  },[])

  const onHandleRemove = async (id:number) => {
    remove(id);
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product:any) => {
    const {data} = await create(product)

    setProducts([...products,data])
  }
  const onHanleUpdate = async (product:ProductType) => {
    try {
      const {data} = await update(product)
    
      setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' >
          <Route path='products' element={<ListProduct products={products}  onRemove={onHandleRemove}/>}/>
          <Route path='products/:id/edit' element={<ProductEdit onUpdate={onHanleUpdate}/>}/>
          <Route path='products/add' element={<ProductAdd onAdd={onHandleAdd} />}/>
        </Route>
        <Route path='signup' element={<Signup />}/>
        <Route path='signin' element={<Signin />}/>
      </Routes>
    </div>
  )
}

export default App

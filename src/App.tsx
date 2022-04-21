import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { create, edit, list, remove } from './api/products'
import Add from './layouts/Add'
import Edit from './layouts/Edit'
import List from './layouts/List'
import Signin from './layouts/signin'
import Signup from './layouts/signup'
import { ProductsType } from './types/Products'

function App() {
    const [products, setProducts] = useState<ProductsType[]>([])
    useEffect(() => {
      const getProducts  = async () => {
        const {data} = await list()
        setProducts(data);
      }
      getProducts();
    },[])
    const onHandleRemove = async(id:number) => {
      remove(id);
      setProducts(products.filter(item => item.id !== id))
    }
    const onHandleAdd =  async(product:any) => {
      const {data} = await create(product);

      setProducts([...products,data])
    }
    const onHandleUpdate=  async (product:ProductsType) => {
      try {
          const {data} = await edit(product)
          setProducts(products.map(item => item.id === data.id ? product : item))
      } catch (error) {
        
      }
    }

  return (
    <div className="App">
      <Routes>
        <Route path='/'> 
          <Route path='products' element={<List products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id/edit' element={<Edit onUpdate={onHandleUpdate}/>} />
          <Route path='products/add' element={<Add onAdd={onHandleAdd} />} />
        </Route>
        <Route path='/login'  element={<Signin />}/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {/* <Routes>
        <Route path='/' >
          <Route path='products' element={<ListProduct products={products}  onRemove={onHandleRemove}/>}/>
          <Route path='products/:id/edit' element={<ProductEdit onUpdate={onHanleUpdate}/>}/>
          <Route path='products/add' element={<ProductAdd onAdd={onHandleAdd} />}/>
        </Route>
        <Route path='signup' element={<Signup />}/>
        <Route path='signin' element={<Signin />}/>
      </Routes> */}
    </div>
  )
}

export default App

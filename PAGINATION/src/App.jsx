import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [products,setProducts] = useState([])
  const [page,setPage] = useState(1)

  function handleSetActivePage(newPage)
  {
      if(newPage>0 && newPage<=(Math.ceil(products.length / 12)) && newPage!==page)
      {
          setPage(newPage)
      }
  }

  async function getDataFromApi()
  {
    try {
      const apiResult = await fetch('https://dummyjson.com/products?limit=100');
      const data = await apiResult.json();
      
      console.log(data.products)

      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    
  useEffect(()=>{
      getDataFromApi()
  },[])

  return (
    <div>

      {
        products.length>0 && 
      
        <div className="main-container">

          {
            products.slice(page*12-12,page*12).map((product)=>{
                return <div className="product-container">

                    <div className="product-specs">
                      <img src={product.thumbnail} alt={product.title} />
                      <span className='product-stats'>price {product.price}$ | ratings {product.rating}</span>
                    </div>

                    <div className="product-details">

                      <span>{product.title}</span>
                      <span>{product.description}</span>

                    </div>
                </div>
            })
          }

          <div className="bottom-pagebar-container">

            <div onClick={()=>{page!=1 && handleSetActivePage(page-1)}}><box-icon name='skip-previous-circle' ></box-icon></div>
            
            {
              products.length>0 && 
              
              [...Array(Math.ceil(products.length / 12))].map((_,i)=>{
                return <div onClick={()=>{handleSetActivePage(i+1)}} className={`page-container ${(i+1)===page ? 'page-active' : ''}`}>{i+1}</div>
              })
            }

            <div onClick={()=>{page!=Math.ceil(products.length / 12) && handleSetActivePage(page+1)}}><box-icon name='skip-next-circle'></box-icon></div>

          </div>
        </div>

      }

    </div>
  )
}


export default App

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';

const ShowProduct = () => {
  const [product, setProduct] = useState({})
  const params = useParams();
  const productId = params.id;

  const getProduct = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/products/${productId}`)
    setProduct(res.data.data);
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className='grid grid-cols-2'>
      {/* card */}
      <div className='flex justify-center'>
        <div class="w-full max-w-sm bg-neutral-primary-soft p-6 border-default rounded-base">
          <img class="rounded-base mb-6" src={product.imageUrl || ""} alt="product image" />
          <div>
            <h5 class="text-xl text-heading font-semibold tracking-tight">{product.name || ""}</h5>
            <p>{product.description || ""}</p>
            <div class="flex items-center justify-between mt-6">
                <span class="text-3xl font-extrabold text-heading">${product.price}</span>
                <button type="button" class="inline-flex text-white items-center bg-green-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                    Buy Now
                </button>
                <button type="button" class="inline-flex text-white items-center bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                    Add to cart
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className='flex flex-col '>
        <p className='text-4xl'>Leave a Review</p>
        <form class="max-w-sm mt-4">
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          <div className='flex justify-end'>
            <Button className={"px-6 mt-2"}>Save</Button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default ShowProduct
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../features/wishlist/wishlistThunk';

const Wishlist = () => {
  const items = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  const handleWishlist = (id) => {
    try {
      dispatch(removeFromWishlist(id))
    } catch (error) {
      
    }
  }

  return (
    <div className='container mx-auto'>
      <h2 className='p-3 text-2xl'>Favourites</h2>
      <div className=' flex justify-center flex-wrap'>
        {
          items.map(product => (
              <div class="w-full max-w-md bg-neutral-primary-soft p-3 border-default rounded-base">
                <div className='relative'>
                  <Link to={`/products/${product._id}`}>
                      <img class="rounded-base mb-3" src={product.imageUrl} alt="product image" />
                  </Link>
                  <div className='absolute top-4 right-4 bg-white p-1 rounded-full'>
                    <FaHeart className='text-red-600' onClick={() => handleWishlist(product._id)} size={30}/>
                  </div>
                </div>
                <div>
                    <div class="flex items-center justify-between mt-3">
                      <h5 class="text-xl text-heading font-semibold tracking-tight">{product.name}</h5>
                      <span class="text-3xl font-extrabold text-heading">${product.price}</span>
                    </div>

                    <button type="button" class="inline-flex mt-3 text-white items-center bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                        Add to cart
                    </button>
                </div>
            </div> 
          ))
        }
      </div>
    </div>
  )
}

export default Wishlist
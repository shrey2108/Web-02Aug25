import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../features/products/productsThunk';

const ShowProduct = () => {
  const { selectedProduct: product, loading } = useSelector(state => state.products);
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    commnet: ""
  });

  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [])

  if (loading) return (
    <div>Loading...</div>
  )

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {/* card */}
      <div className='flex justify-center'>
        <div class="w-full max-w-sm md:max-w-lg bg-neutral-primary-soft p-6 border-default rounded-base">
          <img class="rounded-base mb-6" src={product.imageUrl || ""} alt="product image" />
          <div>
            <h5 class="text-2xl text-heading font-semibold tracking-tight">{product.name || ""}</h5>
            <p className='mt-2 text-lg text-gray-600'>{product.description || ""}</p>
            <div class="flex items-center justify-between mt-6">
                <span class="text-3xl font-extrabold text-heading">${product.price}</span>
                <div>
                  <button type="button" class="inline-flex mr-2 text-white items-center bg-green-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                    Buy Now
                  </button>
                  <button type="button" class="inline-flex text-white items-center bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                      {/* <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg> */}
                      Add to cart
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className='flex flex-col items-center'>
        <div className='w-full max-w-sm md:max-w-lg p-6'>
          <p className='text-4xl'>Leave a Review</p>
          <form class="mt-4">
            {
              [1,2,3,4,5].map(rate => (
                <button
                  type='button'
                  onClick={() => {
                    setReviewForm(prev => ({...prev, rating: rate}))
                  }}
                  onMouseEnter={() => {
                    setReviewForm(prev => ({...prev, rating: rate}))
                  }}
                  // onMouseLeave={() => setReviewForm(prev => ({...prev, rating: rate}))}
                >
                  <svg class={`w-5 h-5 ${rate <= reviewForm.rating  ? "text-yellow-400": "text-gray-400"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                </button>
              ))
            }
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <div className='flex justify-end'>
              <Button className={"px-6 mt-2"}>Save</Button>
            </div>
          </form>

          {/* list of reviews */}

          <div className='mt-6'>
            {product?.reviews?.map(review => (
              <figure class="max-w-screen-md border rounded-lg mt-3 p-4 border-gray-400">
                  <div class="flex items-center space-x-1 mb-4">
                      {[1,2,3,4,5].map(rate => (
                        <svg class={`w-5 h-5 ${rate <= review.rating  ? "text-yellow-400": "text-gray-400"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                      ))}
                      {/* <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                      <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                      <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                      <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg> */}
                  </div>
                  <blockquote>
                      <p class="text-xl text-heading tracking-tight">"{review.comment}"</p>
                  </blockquote>
                  <figcaption class="flex items-center mt-3 space-x-3 rtl:space-x-reverse">
                      <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                      <div class="flex items-center divide-x rtl:divide-x-reverse divide-default">
                          <cite class="pe-3 font-medium text-heading">{review.user.name}</cite>
                          {/* <cite class="ps-3 text-sm text-body">CTO at Flowbite</cite> */}
                      </div>
                  </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProduct
import api from 'zmp-sdk'

export const loadProductsFromCache = () => new Promise(resolve => {
  api.getStorage({
    keys: ['products'],
    success: ({ products }) => {
      if (products) {
        resolve(products)
      }
      resolve([])
    },
    fail: (error) => {
      console.log('Failed to load products from cache. Details: ', error)
      resolve([])
    }
  })
})

export const saveProductsToCache = async products => {
  await api.setStorage({
    data: { products },
    fail: (error) => console.log('Failed to save products to cache. Details: ', error)
  })
  return products
}
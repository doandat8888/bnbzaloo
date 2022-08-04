
import { createStore } from 'zmp-core/lite'
import { zmp } from 'zmp-framework/react'
import { checkout, getCurrentUser, getPlacedOrders, getProductsByCategory, login } from './services/bnb'
import { loadProductsFromCache, saveProductsToCache, loadUserFromCache } from './services/storage'
import { follow, getAccessToken } from './services/zalo'
import { initToken } from './services/bnb'
import { loadTokenFromCache, saveTokenToCache } from './services/storage'

const store = createStore({
  state: {
    token: null,
    user: null,
    products: [],
    cart: [],
  },
  getters: {
    user({ state }) {
      return state.user
    },
    products({ state }) {
      return state.products
    },
    cart({ state }) {
      return state.cart
    }
  },
  actions: {
    addToCart({ state }, item) {
      state.cart = state.cart.concat(item)
    },
    updateCartItem({ state }, { index, item }) {
      state.cart[index] = item
      state.cart = [...state.cart]
    },
    removeCartItem({ state }, index) {
      state.cart = state.cart.filter((item, i) => i !== index)
      if (state.cart.length === 0) {
        state.showCheckout = false
      }
    },
    setUser({ state }, user) {
      state.user = user
      saveUserToCache(user)
    },
    setToken({ state }, token) {
      state.token = token
      saveTokenToCache(token)
    },

    async fetchProducts({ state }) {
      state.loadingProducts = true
      const cachedProducts = await loadProductsFromCache()
      if (cachedProducts.length) {
        state.products = cachedProducts
        state.loadingProducts = false
      }
      const products = await getProductsByCategory()
      state.products = products
      saveProductsToCache(products)
      state.loadingProducts = false
    },
    async checkout({ state }) {
      const { cart, selectedDiscount, shipping, selectedAddress, shippingTime, note } = state
      let shop = null
      if (!shipping) {
        shop = state.shops.find(s => s.selected)
      }
      const result = await checkout({ cart, selectedDiscount, shipping, shop, address: selectedAddress, shippingTime, note })
      if (!result.error) {
        state.showCheckout = false
        state.cart = []
        if (!state.user.isFollowing) {
          zmp.dialog.create({
            title: result.message,
            content:
              'Quan tâm Official Account của Shop để nhận thông tin đặt hàng lần sau?',
            buttons: [
              {
                text: 'Không',
                close: true,
              },
              {
                text: 'Đồng Ý',
                close: true,
                onClick() {
                  follow()
                }
              },
            ],
          }).open()
        } else {
          zmp.toast.create({
            text: result.message,
            closeTimeout: 5000,
            position: 'center'
          }).open()
        }
        zmp.views.main.router.navigate('/history')
      } else {
        zmp.toast.create({
          text: 'Đã có lỗi xảy ra! Mã lỗi :' + result.message,
          closeTimeout: 3000,
          position: 'center'
        }).open()
      }
    },
    async login({ dispatch }) {
      const cachedUser = await loadUserFromCache()
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }
      // const token = await getAccessToken() // Zalo
      const bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        bnbtoken = await initToken()
      }

      dispatch("setToken", bnbtoken)

      // const success = await login(bnbtoken)
      const success = false
      if (success) {
        const user = await getCurrentUser()
        if (user) {
          dispatch('setUser', user)
        }
      }
    }
  },
})

export default store
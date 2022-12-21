
import { createStore } from 'zmp-core/lite'
import { zmp } from 'zmp-framework/react'
import { getCurrentUser, login } from './services/bnb'
import { follow, getAccessToken } from './services/zalo'
import { initToken } from './services/bnb'
import { loadTokenFromCache, saveTokenToCache, loadDataArrayFromCache, saveDataArrayToCache, clearAllCache } from './services/storage'
import OTPPage from './pages/otp'

const store = createStore({
  state: {
    token: null,
    user: null,
    product: null,
    products: [],
    cart: [],
    cartItem: {},
    loading: {},
    updateTime: null,
    location: {
      province: {
        _id: '5016fd6b7f8b9ac842000000',
        name: 'TP HCM'
      },
      district: null,
      countryId: null,
      provices: null,
      districts: null
    }
  },
  getters: {
    user({ state }) {
      return state.user
    },
    products({ state }) {
      return state.products
    },
    product({ state }) {
      return state.product
    },
    cart({ state }) {
      return state.cart
    },
    updateTime({ state }) {
      return state.updateTime
    },
    cartItem( {state}) {
      return state.cartItem;
    },
    location( {state}) {
      return state.location;
    },
    loading( {state}) {
      return state.loading;
    }
  },
  actions: {
    addToCart({ state }, item) {
      state.cart = state.cart.concat(item)
    },

    setCartItem({ state }, item) {
      state.cartItem = item;
    },
    setLocation({ state }, location) {
      state.location = location;
    },
    setLoading({ state }, loading) {
      state.loading = loading;
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
      saveDataArrayToCache("userLogin", user)
    },
    setToken({ state }, token) {
      state.token = token
      saveTokenToCache(token)
    },
    setProduct({ state }, product) {
      state.product = product
    },
    setUpdate({ state }, _v) {
      state.user = _v
      state.updateTime = _v
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

    // move to checkout page
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

    // move to register page
    async signup({ dispatch }) {
      const cachedUser = await loadDataArrayFromCache("userLogin")
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }

      var zaloToken = await getAccessToken() // Zalo
      saveDataArrayToCache("zalo_token", zaloToken)

      var bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        const ret = await initToken()
        if(ret.code == "ok"){
          bnbtoken = ret.token
        } else {
          alert(ret.msg)
        }

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


      zmp.views.main.router.navigate('/register', {
        animate: false
      })
    },

    // move to login page
    async loginpage({ dispatch }) {
      const cachedUser = await loadDataArrayFromCache("userLogin")
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }

      var zaloToken = await getAccessToken() // Zalo
      saveDataArrayToCache("zalo_token", zaloToken)

      var bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        const ret = await initToken()
        if(ret.code == "ok"){
          bnbtoken = ret.token
        } else {
          alert(ret.msg)
        }

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


      zmp.views.main.router.navigate('/login', {
        animate: false
      })

    },

    // move to forget password page
    async forgetpass({ dispatch }) {
      const cachedUser = await loadDataArrayFromCache("userLogin")
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }

      var zaloToken = await getAccessToken() // Zalo
      saveDataArrayToCache("zalo_token", zaloToken)

      var bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        const ret = await initToken()
        if(ret.code == "ok"){
          bnbtoken = ret.token
        } else {
          alert(ret.msg)
        }

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


      zmp.views.main.router.navigate('/forget-pass', {
        animate: false
      })

    },

    //move to otp page
    async otp({ dispatch }) {
      const cachedUser = await loadDataArrayFromCache("userLogin")
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }

      var zaloToken = await getAccessToken() // Zalo
      saveDataArrayToCache("zalo_token", zaloToken)

      var bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        const ret = await initToken()
        if(ret.code == "ok"){
          bnbtoken = ret.token
        } else {
          alert(ret.msg)
        }

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


      zmp.views.main.router.navigate('/otp', {
        animate: false
      })

    },

    // move to history order page
    async historyorder({ dispatch }) {
      const cachedUser = await loadDataArrayFromCache("userLogin")
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }

      var zaloToken = await getAccessToken() // Zalo
      saveDataArrayToCache("zalo_token", zaloToken)

      var bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        const ret = await initToken()
        if(ret.code == "ok"){
          bnbtoken = ret.token
        } else {
          alert(ret.msg)
        }

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


      zmp.views.main.router.navigate('/history-order', {
        animate: false
      })

    },

    // move to home page
    async login({ dispatch }) {
      const cachedUser = await loadDataArrayFromCache("userLogin")
      if (cachedUser) {
        dispatch('setUser', cachedUser)
      }

      var zaloToken = await getAccessToken() // Zalo
      saveDataArrayToCache("zalo_token", zaloToken)

      var bnbtoken = await loadTokenFromCache()
      if(!bnbtoken) {
        const ret = await initToken()
        if(ret.code == "ok"){
          bnbtoken = ret.token
        } else {
          alert(ret.msg)
        }

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


      // zmp.views.main.router.navigate('/prepayment', {
      //   animate: false
      // })

      // zmp.views.main.router.navigate('/product-detail?id=6194a45a60da790e0009eb73', {
      //   animate: false
      // })

      zmp.views.main.router.navigate('/home', {
        animate: false
      })


    },

    async clearAllCache(){
      await clearAllCache()
    }
  }

})

export default store

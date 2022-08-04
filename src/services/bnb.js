import config from '../config'
import store from '../store'
import {loadDataArrayFromCache , saveDataArrayToCache } from './storage'



const base = config.BASE_URL

export const request = async (method, url, data) => {
  const headers = { 'Content-Type': 'application/json' }
  const token = store.state.token
  if (token) {
    headers['X-Xto-Access-Token'] = token
  }

  return fetch(`${base}/${url}`, {
    method: method,
    body: JSON.stringify(data),
    headers
  })
}

export const initToken = async () => {
  try {
    const response = await (await request('GET', 'API/initToken')).json()
    if (response.token) {
      store.dispatch('setToken', response.token)
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('Error logging in. Details: ', error)
    return false
  }
}

export const checkUser = async (user) => {
  try {
    const response = await (await request('POST', 'API/zalo/chk', {
      source:'zalo', id: user.zaloId
    })).json()
    if (response.user) {
      store.dispatch('setUser', response.user)
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('Error check user exist. Details: ', error)
    return false
  }
}

export const createUser = async (user) => {
  try {
    const response = await (await request('POST', '/API/tiki/attach', {
      source:'zalo', id: user.zaloId
    })).json()
    if (response.user) {
      store.dispatch('setUser', response.user)
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('Error check user exist. Details: ', error)
    return false
  }
}


export const login = async (accessToken) => {
  try {
    const response = await (await request('POST', 'API/login', {
      accessToken
    })).json()
    if (response.data.jwt) {
      store.dispatch('setJwt', response.data.jwt)
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('Error logging in. Details: ', error)
    return false
  }
}

export const getCurrentUser = async () => {
  try {
    const response = await (await request('GET', 'users/logged-in')).json()
    return response.data
  } catch (error) {
    console.log('Error get current user info. Details: ', error)
    return null
  }
}

export const getProductsByCategory = async () => {
  try {
    const response = await (await request('GET', 'products/by-category')).json()
    return response.data
  } catch (error) {
    console.log('Error fetching products. Details: ', error)
    return []
  }
}

export const updateFollowStatus = async (status) => {
  try {
    const response = await request('POST', 'users/followed', { status })
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error update follow OA status. Details: ', error)
    return false
  }
}

export const checkout = async (payload) => {
  try {
    const response = await request('POST', 'orders/checkout', payload)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error placing an order. Details: ', error)
    return false
  }
}

export const getPlacedOrders = async () => {
  try {
    const response = await (await request('GET', 'orders/history')).json()
    return response.data ?? []
  } catch (error) {
    console.log('Error fetching placed orders. Details: ', error)
    return []
  }
}

/**
 * Lấy danh sách banner
 * @returns Danh sách những banner
 */
export const getSliders = async () => {
  try {
    // get from cache
    const items = await loadDataArrayFromCache("getSliders")
    if(items != null){
      return items
    }

    const response = await (await request('GET', 'API/sliders')).json()
    const ret = response.sliders ?? []

    // save to cache
    saveDataArrayToCache("getSliders", ret)

    return ret

  } catch (error) {
    console.log('Error fetching sliders. Details: ', error)
    return []
  }
}

/**
 * Lấy danh sách focus categories
 * @returns Danh sách những danh mục được chỉ định ở trang chủ
 */
 export const getAllFocusCategory = async () => {
  try {

    // get from cache
    const items = await loadDataArrayFromCache("getAllFocusCategory")
    if(items != null){
      return items
    }

    const response = await (await request('GET', 'API/load/mainAllCategory')).json()
    const results  =  response.allCategories ?? []

    // save to cache
    saveDataArrayToCache("getAllFocusCategory", results)

    return results

  } catch (error) {
    console.log('Error fetching getAllFocusCategory. Details: ', error)
    return []
  }
}

/**
 * Lấy danh sách categories và sản phẩm
 * @returns Danh sách những danh mục được chỉ định ở trang chủ
 */
 export const getHomeCategoryProduct = async () => {
  try {

    // get from cache
    const items = await loadDataArrayFromCache("getHomeCategoryProduct")
    if(items != null){
      return items
    }

    const response = await (await request('GET', 'API/load/mainFocusCates')).json()

    // save to cache
    saveDataArrayToCache("getHomeCategoryProduct", response)

    return response
  } catch (error) {
    console.log('Error fetching getHomeCategoryProduct. Details: ', error)
    return []
  }
}



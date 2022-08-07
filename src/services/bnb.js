import config from '../config'
import store from '../store'
import {loadDataArrayFromCache , saveDataArrayToCache } from './storage'
import { zmp } from "zmp-framework/react";



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

    }
    return response

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

export const getCurrentUser = async () => {
  try {
    const response = await (await request('GET', 'users/logged-in')).json()
    return response.data
  } catch (error) {
    console.log('Error get current user info. Details: ', error)
    return null
  }
}



/**
 *
 * @param  accessToken
 * @returns
 */
export const login = async (zaloToken) => {
  try {
    const response = await (await request('POST', 'API/login', {
      zaloToken: zaloToken
    })).json()
    if (response.code == "ok") {
      store.dispatch('setUser', response.user)

    }
    return response

  } catch (error) {
    console.log('Error logging in. Details: ', error)
    return false
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

    if(response.code == "ok"){
      // save to cache
      saveDataArrayToCache("getSliders", response)
    }


    return response

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

    if(response.code == "ok"){
      // const results  =  response.allCategories ?? []
      // save to cache
      saveDataArrayToCache("getAllFocusCategory", response)
    }

    return response

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
    if(response.code == "ok"){
      // save to cache
      saveDataArrayToCache("getHomeCategoryProduct", response)
    }
    return response
  } catch (error) {
    console.log('Error fetching getHomeCategoryProduct. Details: ', error)
    return []
  }
}


/**
 * Lấy thông tin sản phẩm
 * @returns thông tin sản phẩm
 */
 export const getProductInfo = async (pid) => {
  try {

    const key = "getProductInfo_" + pid
    // get from cache
    const items = await loadDataArrayFromCache(key)
    if(items != null){
      return items
    }

    const response = await (await request('GET', 'API/product/detail/' + pid)).json()
    if(response.code == "ok"){
      // save to cache
      saveDataArrayToCache(key, response)
    }
    return response
  } catch (error) {
    console.log('Error fetching getProductInfo. Details: ', error)
    return []
  }
}

/**
 * Lấy danh sách sản phẩm
 * @returns thông tin sản phẩm
 */
 export const getProducts = async (url) => {
  try {

    const key = "getProducts_" + url
    // get from cache
    const items = await loadDataArrayFromCache(key)
    if(items != null){
      return items
    }

    const response = await (await request('GET', url)).json()
    if(response.code == "ok"){
      // save to cache
      saveDataArrayToCache(key, response)
    }
    return response
  } catch (error) {
    console.log('Error fetching getProducts. Details: ', error)
    return []
  }
}

/**
 * Hiển thị message thông báo
 * @returns thông tin sản phẩm
 */
 export const showMessageToast = async (msg) => {
  zmp.toast.show({
    text: msg,
    position: 'bottom',
    closeTimeout: 2000
  });

}




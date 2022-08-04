import api from 'zmp-sdk'


export const loadDataArrayFromCache = (_key) => new Promise(resolve => {
  api.getStorage({
    keys: [_key],
    success: (data) => {
      if (data[_key]) {
        resolve(data[_key])
      }
      resolve(null)
    },
    fail: (error) => {
      console.log('Failed to load loadDataArrayFromCache from cache. Details: ', error)
      resolve([])
    }
  })
})

export const saveDataArrayToCache = async (_key, data) => {
  var _input = {}
  _input[_key] = data
  await api.setStorage({
    data: _input,
    fail: (error) => console.log('Failed to save saveDataArrayToCache to cache. Details: ', error)
  })
  return data
}



export const saveTokenToCache = async token => {
  await api.setStorage({
    data: { token },
    fail: (error) => console.log('Failed to save token to cache. Details: ', error)
  })
  return token
}

export const loadTokenFromCache = () => new Promise(resolve => {
  api.getStorage({
    keys: ['token'],
    success: ({ token }) => {
      if (token) {
        resolve(token)
      }
      resolve()
    },
    fail: (error) => {
      console.log('Failed to load token from cache. Details: ', error)
      resolve()
    }
  })
})


export const loadUserFromCache = () => new Promise(resolve => {
  api.getStorage({
    keys: ['user'],
    success: ({ user }) => {
      if (user) {
        resolve(user)
      }
      resolve()
    },
    fail: (error) => {
      console.log('Failed to load user from cache. Details: ', error)
      resolve()
    }
  })
})
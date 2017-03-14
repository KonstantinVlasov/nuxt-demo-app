import axios from 'axios'

export const state = {
  users: []
}

export const mutations = {
  SET_USERS (state, users) {
    state.users = users
  }
}

export const actions = {
  getUsers ({state, commit}) {
    return axios.request({
      url: '/api/users',
      baseURL: 'http://localhost:3001',
      method: 'get'
    })
      .then(response => {
        console.log('response', response)
        commit('SET_USERS', response.data)
      })
      .catch(error => {
        console.error('error', error.Response)
        // set demo data
        commit('SET_USERS', [{
          name: 'Demo name',
          email: 'demo@email.com',
          website: 'demosite.com',
          phone: '+1234567890'
        }, {
          name: 'Other name',
          email: 'other@email.com',
          website: 'othersite.com',
          phone: '+2345678901'
        }])
      })
  }
}

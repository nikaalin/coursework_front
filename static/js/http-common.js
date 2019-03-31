/*eslint-disable*/
import axios from 'axios'

export const httpAuth = axios.create({
  baseURL: 'http://localhost:8088/game_over_war_exploded/auth',
  headers: {
    Origin:''
  }
})

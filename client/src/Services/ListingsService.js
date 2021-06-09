import axios from 'axios'
import API_URL from '../API/Api.js'

// const PREFIX = ""

class ListingsService {
  getAllListings = async () => axios.get(API_URL)
}

export default new ListingsService();
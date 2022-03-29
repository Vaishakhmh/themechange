
import axios from 'axios'

let reqInstance = axios.create({
  baseURL:`http://localhost:5000/`,
    headers: {
      Authorization : "Bearer:" +localStorage.getItem("sapience")
      }
  })

  export  default reqInstance;
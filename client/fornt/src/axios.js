
import axios from 'axios'

let reqInstance = axios.create({
  baseURL:`http://localhost:${process.env.PORT},`,
    headers: {
      Authorization : "Bearer:" +localStorage.getItem("sapience")
      }
  })

  export  default reqInstance;
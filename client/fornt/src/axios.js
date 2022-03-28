
import axios from 'axios'

let reqInstance = axios.create({
    headers: {
      Authorization : "Bearer:" +localStorage.getItem("sapience")
      }
  })

  export  default reqInstance;
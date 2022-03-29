
import axios from 'axios'

let reqInstance = axios.create({
    headers: {
      Authorization : "Bearer:" +window.localStorage.getItem("sapience")
      }
  })

  export  default reqInstance;
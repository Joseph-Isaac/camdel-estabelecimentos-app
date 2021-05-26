import axios from 'axios'

const api = axios.create({
    baseURL: 'http://bd-delivery-camocim-com-br.umbler.net'
    //baseURL: 'http://10.0.2.2:3333'
})

export default api
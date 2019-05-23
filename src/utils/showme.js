import http from 'axios'

const ip = 'http://127.0.0.1:8080'
const url = ip + '/v1'

export default {
  GetAllTables(args) {
    return http.get(url + '/object/')
  },
  GetNote() {
    return http.get(url + '/note/group/')
  },
  dbs(args) {
    return http.post(url + '/db/select/', args)
  },
  exec(args) {
    return http.post(url + '/db/exec/', args)
  }
}

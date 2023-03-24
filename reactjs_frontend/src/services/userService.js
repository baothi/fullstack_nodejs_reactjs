import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
  return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
  return axios.delete('/api/delete-user', {
    data: { id: userId }
  })
}

const updateUserService = (inputdata) => {
  return axios.put('/api/edit-user', inputdata)
}

const getAllCodeService = (inputdata) => {
  return axios.get(`/api/allcode?type=${inputdata}`)
}

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
  return axios.get('/api/get-all-doctors')
}

const createInforDoctor = (data) => {
  return axios.post('/api/create-infor-doctor', data)
}

const getDetailInforDoctor = (id) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${id}`)
}

const saveBulkScheduleDoctor = (data) => {
  return axios.post('/api/bulk-create-schedule', data)
}

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  updateUserService,
  getAllCodeService,
  getTopDoctorHomeService,
  getAllDoctors,
  createInforDoctor,
  getDetailInforDoctor,
  saveBulkScheduleDoctor,
}

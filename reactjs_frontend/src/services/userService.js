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

const getSheduleDoctorByDate = (doctorId, date) => {
  return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}

const getExtraInforDoctorById = (doctorId) => {
  return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}

const getprofileDoctorById = (doctorId) => {
  return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`)
}

const postPatientBookAppointment = (data) => {
  return axios.post("/api/patient-book-appointment", data)
}

const postVerifyBookAppointment = (data) => {
  return axios.post("/api/verify-book-appointment", data)
}

const createNewSpecialty = (data) => {
  return axios.post("/api/create-new-specialty", data)
}

const getAllSpecialty = () => {
  return axios.get("/api/get-specialty")
}

const getAllDetailSpecialtyById = (data) => {
  return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`)
}

export {
  handleLoginApi, getAllUsers,
  createNewUserService, deleteUserService,
  updateUserService, getAllCodeService,
  getTopDoctorHomeService, getAllDoctors,
  createInforDoctor, getDetailInforDoctor,
  saveBulkScheduleDoctor, getSheduleDoctorByDate,
  getExtraInforDoctorById, getprofileDoctorById,
  postPatientBookAppointment, postVerifyBookAppointment,
  createNewSpecialty, getAllSpecialty, getAllDetailSpecialtyById
}

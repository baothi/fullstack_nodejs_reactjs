import doctorService from "../services/doctorService";

let getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ....",
    });
  }

};

let getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctors();
    // console.log('get all docs : ', doctors);
    return res.status(200).json(doctors);
  } catch (e) {
    console.log(e);
    return res.status(200).json({ errCode: -1, message: "Error from server" });
  }
};

let createInforDoctor = async (req, res) => {
  try {
    let response = await doctorService.createInforDoctor(req.body);
    console.log(response);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({ errCode: -1, message: "Error from server" });
  }
};

let getDetailDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({ errCode: -1, message: "get Detail Doctor By Id Error from server" });
  }
};

let bulkCreateSchedule = async (req, res) => {
  try {
    let infor = await doctorService.bulkCreateSchedule(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({ errCode: -1, message: "get Detail Doctor By Id Error from server" });
  }
};
let getSheduleByDate = async (req, res) => {
  try {
    let infor = await doctorService.getSheduleByDate(req.query.doctorId, req.query.date);
    console.log(infor);
    return res.status(200).json(infor)
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server"
    })
  }
}

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  createInforDoctor: createInforDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getSheduleByDate: getSheduleByDate
}
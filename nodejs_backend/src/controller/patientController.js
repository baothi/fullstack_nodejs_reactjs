import partientService from "../services/patientService";


let postBookAppointment = async (req, res) => {
  try {
    let infor = await partientService.postBookAppointment(req.body);
    console.log("=============================================   ", infor)
    return res.status(200).json(infor)
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server"
    })
  }
}

let postVerifyBookAppointment = async (req, res) => {
  try {
    let infor = await partientService.postVerifyBookAppointment(req.body);
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
  postBookAppointment: postBookAppointment,
  postVerifyBookAppointment: postVerifyBookAppointment
}
import partientService from "../services/patientService";


let postBookAppointment = async (req, res) => {
  try {
    console.log(req.body);
    let infor = await partientService.postBookAppointment(req.body);
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
  postBookAppointment: postBookAppointment
}
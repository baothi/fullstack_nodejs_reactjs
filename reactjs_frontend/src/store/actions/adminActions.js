import actionTypes from './actionTypes';
import {
  getAllCodeService, createNewUserService,
  getAllUsers, deleteUserService,
  updateUserService, getTopDoctorHomeService
} from '../../services/userService';
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START })
      let res = await getAllCodeService("GENDER")
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFaided());
      }
    } catch (e) {
      dispatch(fetchGenderFaided());
      console.log("fetchGenderFailed : ", e)
    }
  }

}

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData
})

export const fetchGenderFaided = () => ({
  type: actionTypes.FETCH_GENDER_FAIlDED
})

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START })
      let res = await getAllCodeService("POSITION")
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFaided());
      }
    } catch (e) {
      dispatch(fetchPositionFaided());
      console.log("fetchGenderFailed : ", e)
    }
  }

}

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData
})

export const fetchPositionFaided = () => ({
  type: actionTypes.FETCH_POSITION_FAIlDED
})

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START })
      let res = await getAllCodeService("ROLE")
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFaided());
      }
    } catch (e) {
      dispatch(fetchRoleFaided());
      console.log("fetchGenderFailed : ", e)
    }
  }

}

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData
})

export const fetchRoleFaided = () => ({
  type: actionTypes.FETCH_ROLE_FAIlDED
})

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data)
      // console.log("check reactjs use redux for : ", res);
      if (res && res.errCode === 0) {
        toast.success("create a new user succedd!");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("create a user faild!");
        dispatch(saveUserFailed());
      }
    } catch (e) {
      toast.error("create a user faild!");
      dispatch(saveUserFailed());
      console.log("fetchGenderStart : ", e)
    }
  }
};


export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED
})


export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        let users = res.users.reverse();
        dispatch(fetchAllUserSuccess(users));
      } else {
        toast.error("Fetch all users failed!");
        dispatch(fetchAllUserFaided());
      }
    } catch (e) {
      toast.error("Fetch all users failed!");
      dispatch(fetchAllUserFaided());
      console.log("fetchGenderFailed : ", e)
    }
  }

}

export const fetchAllUserSuccess = (Data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: Data
})

export const fetchAllUserFaided = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAIlDED
})


export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId)
      // console.log("check reactjs use redux for : ", res);
      if (res && res.errCode === 0) {
        toast.success("delete user succeed!");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("delete user faild!");
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      toast.error("delete user faild!");
      dispatch(deleteUserFailed());
      console.log("fetchGenderStart : ", e)
    }
  }
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (user) => {
  return async (dispatch, getState) => {
    try {
      let res = await updateUserService(user)
      // console.log("check reactjs use redux for : ", res);
      if (res && res.errCode === 0) {
        toast.success("update user succeed!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("update user faild!");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("update user faild!");
      dispatch(editUserFailed());
      console.log("fetchGenderStart : ", e)
    }
  }
};

export const editUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS
})

export const editUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED
})

export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService('');
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
          dataDoctors: res.data,
        })
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_FAIlDED,
        })
      }
    } catch (e) {
      toast.error("get all doctor faild!", e);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTOR_FAIlDED,
      })
    }
  }
}
// let res1 = await getTopDoctorHomeService(4);

export const fetchTopDoctorSuccess = () => ({
  type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS
})

export const fetchTopDoctorFailed = () => ({
  type: actionTypes.FETCH_TOP_DOCTOR_FAIlDED
})
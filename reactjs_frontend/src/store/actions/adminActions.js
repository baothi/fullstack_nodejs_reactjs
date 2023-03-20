import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService } from '../../services/userService';

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
      console.log("check reactjs use redux for : ", res);
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
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
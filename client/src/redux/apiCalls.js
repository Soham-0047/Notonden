import { loginFailure, loginStart, loginSuccess, recordFailure, recordSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";




export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    // console.log(res.data)
    dispatch(loginSuccess(res.data));
    
  } catch (error) {
    console.log(error)
    dispatch(loginFailure());
  }
};

export const register = async(dispatch,user) =>{
  dispatch(registerStart());
  try {
    const res =  await publicRequest.post("/auth/register",user);
    dispatch(registerSuccess(res.data))
  
  } catch (error) {
    dispatch(registerFailure());
  }
}

export const createrecord = async(dispatch,user) =>{
  
  try {
    const res = await userRequest.post("/records",user);
    dispatch(recordSuccess(res.data))
  } catch (error) {
    dispatch(recordFailure(error))
  }
}
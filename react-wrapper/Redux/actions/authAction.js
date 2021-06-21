import { LOG_USER_IN } from "../types";
import apiRequest from "helpers/axios";
import { Toast } from "../../../helpers/toast" 
import { Storage } from "../../../helpers/storageUtility" 
import { login } from "../../../helpers/api-routes/v1.js" 


export const login_Action = async (dispatch, dispatchAppContext, body, tokenListener, persistRequest = false) => {

  //API REQUEST HERE
  const res = await apiRequest({ url: login, method: "post", body },
                                 dispatch, dispatchAppContext, tokenListener, persistRequest);
  console.log(res);

  await dispatchAppContext({ //Disable The ceilin preloder
    type: "CEILING_PRELODER_REQUEST",
    payload: false,
  }); 

  if (res) {

    if (res.status !== 200) {
      return Toast("error", "top-right", `${ res.data.errors ? JSON.stringify(res.data.errors[0]) : res.data.message}`)
    }

    //Save To localStorage
    Storage.setItem("gg_current_user", res.data)
    Storage.setItem("gg_current_user_token", res.data.token)
    
    await dispatch({
      type: LOG_USER_IN,
      payload: {
        data: res.data,
        token: res.data.token,
      },
    });

    return res;
  }

};

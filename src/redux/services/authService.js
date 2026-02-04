
import { loginSuccess,loadingStatus, setError } from "../authSlice";
import axios from "axios";


// export const login = (payload) => async (dispatch) => {
//   try {
//      dispatch(loadingStatus(true));

//     console.log("api login payload:", payload);
              
//            const response=     await fetch("../../dataDemo/dummyUsers.json");
//            console .log ("ss", response);
//           const users = await response.json();
//            console .log ("users", users);

//            const user = users.find(u => 
//       u.email === payload. emailOrPhone && u.password === payload.password );
//        console.log("api login user:", user);
//        if (!user) {
//       dispatch(setError("User not found. Please check your credentials."));
//       dispatch(loadingStatus(false));
//       return;
//     }
 

// dispatch(loadingStatus(false));
   
    


   

    
//   } catch (error) {
//     console.error("login api error:", error);

//     dispatch(
//       setError(
//         error.response?.data?.responsePacket?.message || "Login failed"
//       )
//     );
//      dispatch(loadingStatus(false));

//   }
// };






export const login = (payload) => async (dispatch) => {
  try {
    
    dispatch(loadingStatus(true));
console.log("Login payload:", payload);
    const response = await axios.get("/dataDemo/dummyUsers.json");
console.log("Login response:", response);
    

     const users = response.data;

console.log("users:", users);
    const user = users.find(
      (u) =>
        u.email === payload.emailOrPhone ||u.phone===payload.emailOrPhone&& u.password === payload.password
    );
console.log("user:", user);

    if (!user) {
      dispatch(setError("Invalid email or password"));
      dispatch(loadingStatus(false));
      return;
    }

    const fakeToken = `token_${user.id}_${Date.now()}`;

   await dispatch(
      loginSuccess({
        data: {
          user,
          token: fakeToken,
        },
      })
    );

    dispatch(loadingStatus(false));
  } catch (error) {
    dispatch(setError(error.message || "Login failed"));
    dispatch(loadingStatus(false));
  }
};

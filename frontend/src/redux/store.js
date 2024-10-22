import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlic";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

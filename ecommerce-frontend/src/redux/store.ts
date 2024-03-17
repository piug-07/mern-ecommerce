import {configureStore} from "@reduxjs/toolkit"
import { userAPI } from "./api/userAPI";



export const server = import.meta.env.VITE_SERVER;




export const store = configureStore({
    reducer: {
      [userAPI.reducerPath]: userAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userAPI.middleware,
        // productAPI.middleware,
        // orderAPI.middleware,
        // dashboardAPI.middleware
      ),
  });

 

export type RootState = ReturnType<typeof store.getState>;
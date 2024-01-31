import { configureStore } from "@reduxjs/toolkit";
import UserSlices from "./UserSlices";
import TaskSlices from "./TaskSlices";
export default configureStore({reducer:{user:UserSlices,task:TaskSlices}})
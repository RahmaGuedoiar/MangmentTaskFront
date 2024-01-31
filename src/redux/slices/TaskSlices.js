import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const createTask = createAsyncThunk('/createTask', async (data, { rejectWithValue,dispatch }) => {
    try {
        // DATA  DONN2 CHNB3THO FI REQ.BODY 
        const res = await axios.post('/createTask', data, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        dispatch(getTask())
        // RETURN CHYT7T FI ACTION.POYLOUED 
        //  res.data howa kif nb3th req yrj3o kima fi postman
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
export const getTask = createAsyncThunk('/getTasks', async (data, { rejectWithValue }) => {
    try {
        // DATA  DONN2 CHNB3THO FI REQ.BODY 
        const res = await axios.get('/getTasks', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        // RETURN CHYT7T FI ACTION.POYLOUED 
        //  res.data howa kif nb3th req yrj3o kima fi postman
        return res.data
    } catch (error) {
         return rejectWithValue(error.response.data.msg)
    }
})
export const deleteTask = createAsyncThunk('/deleteTask', async (info, { rejectWithValue,dispatch }) => {
    try {
        // DATA  DONN2 CHNB3THO FI REQ.BODY 
        const res = await axios.delete(`deleteTask/${info}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        dispatch(getTask())
        // RETURN CHYT7T FI ACTION.POYLOUED 
        //  res.data howa kif nb3th req yrj3o kima fi postman
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})




const TaskSlices = createSlice({
    name: 'TaskSlice',
    initialState: {
        TaskData: {},
        isloding: false,
        error: null,

    },

    extraReducers: (builder) => {
        // fulfilled : kml t3det fmch mochkla  wla authorised 
        builder.addCase(createTask.fulfilled, (state, action) => {

            state.isloding = false

        })
            .addCase(createTask.rejected, (state, action) => {

                state.isloding = false
                state.error = action.payload

            })
            .addCase(createTask.pending, (state, action) => {

                state.isloding = true

            }).addCase( getTask.fulfilled, (state, action) => {

                state.isloding = false
                state.TaskData=action.payload.Tasks

            })
            .addCase( getTask.rejected, (state, action) => {

                state.isloding = false
                state.error = action.payload

            })
            .addCase( getTask.pending, (state, action) => {

                state.isloding = true

            }).addCase(deleteTask.fulfilled, (state, action) => {

                state.isloding = false
                state.TaskData=action.payload.Tasks

            })
            .addCase( deleteTask.rejected, (state, action) => {

                state.isloding = false
                state.error = action.payload

            })
            .addCase( deleteTask.pending, (state, action) => {

                state.isloding = true

            })



    }

})

export default TaskSlices.reducer
// export const { logout } = UserSlices.actions

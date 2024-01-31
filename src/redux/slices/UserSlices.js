import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export  const userLogin = createAsyncThunk('/login', async (data, { rejectWithValue }) => {
    try {
        // DATA  DONN2 CHNB3THO FI REQ.BODY 
        const res = await axios.post('/Login', data)
        // RETURN CHYT7T FI ACTION.POYLOUED 
        //  res.data howa kif nb3th req yrj3o kima fi postman
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})



export const UserRegister = createAsyncThunk('/createUser', async (data, { rejectWithValue }) => {
    try {
        // DATA  DONN2 CHNB3THO FI REQ.BODY 
        const res = await axios.post('/createUser', data)
        // RETURN CHYT7T FI ACTION.POYLOUED 
        //  res.data howa kif nb3th req yrj3o kima fi postman
        return res.data
    } catch (error) {
       return rejectWithValue(error.response.data.msg)
    }
})

const UserSlices = createSlice({
    name: 'UserSlice',
    initialState: {
        userData:{},
        token: localStorage.getItem('token') || null,
        isloding: false,
        error: null,
        isAuth: localStorage.getItem('isAuth') || false
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.isAuth = false
            localStorage.removeItem('token')
            localStorage.removeItem('isAuth')
        }
    },
    extraReducers: (builder) => {
        // fulfilled : kml t3det fmch mochkla  wla authorised 
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.isloding = false
            state.isAuth = true
            // VALEUR STATE.TOKEN DEJA 7TENA STATE.TKEN+ACTION.POYL
            localStorage.setItem('token', state.token)
            localStorage.setItem('isAuth', state.isAuth)
        })
            .addCase(userLogin.rejected, (state, action) => {
                state.token = null
                state.isloding = false
                state.isAuth = false
                state.error = action.payload

            })
            .addCase(userLogin.pending, (state, action) => {

                state.isloding = true


            }).addCase(UserRegister.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.isloding = false
                state.isAuth = true
                // VALEUR STATE.TOKEN DEJA 7TENA STATE.TKEN+ACTION.POYL
                localStorage.setItem('token', state.token)
                localStorage.setItem('isAuth', state.isAuth)
            })
            .addCase(UserRegister.rejected, (state, action) => {
                state.token = null
                state.isloding = false
                state.isAuth = false
                state.error = action.payload

            })
            .addCase(UserRegister.pending, (state, action) => {

                state.isloding = true


            })


    }

})

export default UserSlices.reducer
export const { logout } = UserSlices.actions

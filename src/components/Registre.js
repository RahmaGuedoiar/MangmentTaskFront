import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UserRegister } from '../redux/slices/UserSlices';


const Registre = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch=useDispatch()
    const onSubmit = data => {dispatch(UserRegister(data))}
    const {error}=useSelector(state=>state.user)
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" {...register("email",{})} />
                <input type="password" placeholder="password" {...register("password", {})} />
                <input type="number" placeholder="age" {...register("age", {})} />
                <input type="text" placeholder="name" {...register("name", {})} />
                {/* error chejina fi form du tableau fi backend 7tnh  */}
               {error && <p>{error[0].msg}</p>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Registre
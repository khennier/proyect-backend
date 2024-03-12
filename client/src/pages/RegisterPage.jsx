import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth.js';
function RegisterPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit (async (values) => {
        const res = await registerRequest(values)
        console.log(res)
    });

    return (
        <div className="bg-zinc-1000 max-w-md rounded-md">
            <form onSubmit={onSubmit}>
                <label><input type="text" name="username" {...register("username", { required: true })} className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder='Username'/></label>
                <label><input type="email" name="email" {...register("email", { required: true })} className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder='Email'/></label>
                <label><input type="password" name="password" {...register("password", { required: true })} className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder='Password' /></label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;

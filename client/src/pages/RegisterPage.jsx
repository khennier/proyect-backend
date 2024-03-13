import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext,js';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const {signup} = useAuth()

    const onSubmit = async (values) => {
        signup (values)
    };

    return (
        <div className="bg-zinc-1000 max-w-md rounded-md">
            {/* Aquí, handleSubmit ya es una función que maneja la presentación del formulario */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input
                        type="text"
                        name="username"
                        {...register("username", { required: true })}
                        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Username'
                    />
                </label>
                <label>
                    <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Email'
                    />
                </label>
                <label>
                    <input
                        type="password"
                        name="password"
                        {...register("password", { required: true })}
                        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Password'
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;

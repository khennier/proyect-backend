import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signin, errors: signinErrors} = useAuth()


    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900"> {/* Aquí aplicamos el fondo gris oscuro */}
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {signinErrors && signinErrors.map((error, i) => (
                    <div key={i} className='bg-red-500 p-2 text-white my-2'>
                        {error}
                    </div>
                ))}
                <h1 className="text-2xl font-bold text-white">Login</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                placeholder='Email'
                            />
                            {errors.email && (
                                <p className="text-red-500">Email is required</p>
                            )}
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <input
                                type="password"
                                name="password"
                                {...register("password", { required: true })}
                                className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                placeholder='Password'
                            />
                            {errors.password && (
                                <p className="text-red-500">Password is required</p>
                            )}
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                </form>

                <p className="flex gap-x-2 text-white my-4">Don't have an account? <Link className="text-sky-500" to="/register">Sign up</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom';


function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                {registerErrors && registerErrors.map((error, i) => (
                    <div key={i} className='bg-red-500 p-2 text-white my-2'>
                        {error}
                    </div>
                ))}
                                <h1 className="text-2xl font-bold text-white">Register</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label>
                            <input
                                type="text"
                                name="username"
                                {...register("username", { required: true })}
                                className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                placeholder='Username'
                            />
                            {errors.username && (
                                <p className="text-red-500">
                                    Username is required
                                </p>
                            )}
                        </label>
                    </div>
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
                                <p className="text-red-500">
                                    Email is required
                                </p>
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
                                <p className="text-red-500">
                                    Password is required
                                </p>
                            )}
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                </form>

                <p className="flex gap-x-2 text-white my-4">Already have an account? <Link className="text-sky-500" to="/login">Sign in</Link></p>
            </div>
        </div>
    );
}

export default RegisterPage;

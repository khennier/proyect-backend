function LoginPage() {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input
                        type="text"
                        name="username"
                        {...register("username", { required: true })}
                        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Username'
                    />
                        {
                            errors.username && (
                                <p className="text-red-500">
                                    Username is required
                                </p>
                            )
                        }
                </label>
                <label>
                    <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Email'
                    />
                    {
                            errors.email && (
                                <p className="text-red-500">
                                    Email is required
                                </p>
                            )
                    }
                </label>
                <label>
                    <input
                        type="password"
                        name="password"
                        {...register("password", { required: true })}
                        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='Password'
                    />
                    {
                            errors.password && (
                                <p className="text-red-500">
                                    Password is required
                                </p>
                            )
                    }
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
    
}
export default LoginPage
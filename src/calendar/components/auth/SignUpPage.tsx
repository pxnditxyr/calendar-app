import { Link } from 'react-router-dom';

export const SignUpPage = () => {
    return (
        <article className="bg-white py-12 px-8 rounded-3xl flex flex-col justify-center items-center w-96 shadow-2xl">
            <h1 className="text-5xl text-gray-800 font-bold"> Sign Up </h1>
            <form className="w-full">
                <input
                    autoComplete="off"
                    className="bg-gray-200 p-2 rounded-lg mt-8 w-full focus:outline-none"
                    type="text"
                    placeholder="Username"

                />

                <input
                    autoComplete="off"
                    className="bg-gray-200 p-2 rounded-lg mt-8 w-full focus:outline-none"
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-200 p-2 rounded-lg mt-8 w-full focus:outline-none"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-gray-200 p-2 rounded-lg mt-8 w-full focus:outline-none"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-8 w-full"
                > Sign Up </button>
            </form>
            <Link
                to="/auth/signin"
                className="text-blue-500 hover:text-blue-700 font-regular mt-8 hover:underline"
            > Already have an account? </Link>

        </article>
    );
};

import { useNavigate } from "react-router-dom";
import CommonForm from "../components/forms/CommonForm";
import { loginFormControls } from "../utils/formControls";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-row w-full h-screen text-white'>
            <div className="w-full sm:w-1/2 flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-blue-900">
                <div className="border-2 border-cyan-400 shadow-[0_0_20px_#22d3ee88] w-full max-w-sm sm:max-w-lg px-8 py-12 bg-slate-950 rounded-none space-y-6 sm:rounded-xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-cyan-300 drop-shadow-[0_0_6px_#22d3ee]">Welcome back!</h1>
                        <p className="text-base text-slate-300 mt-2">Log in with your credentials to continue.</p>
                    </div>
                    <CommonForm formControls={loginFormControls} btnText={"Login"} onSubmit={(data) => console.log(data)} />
                    <div className="space-y-4">
                        <div className="text-center text-base text-slate-400 mt-4">
                            Don't have an account?{" "}
                            <button
                                className="text-cyan-300 hover:underline hover:text-white transition cursor-pointer"
                                onClick={() => navigate('/register')}>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-1/2 aspect-[3/4] bg-cover bg-center hidden sm:block"
                style={{ backgroundImage: 'url(/background_img.jpg)' }}
            ></div>
        </div>
    );
};

export default Login;

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-slate-950 flex overflow-hidden">
      {/* Background Glow Effects */}

<div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Left Branding Section */}

      <div className="hidden lg:flex w-1/2 flex-col justify-center px-20">

        <div>

  <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
    AI Powered Career Intelligence
  </div>

  <div className="flex items-center gap-4 mb-6">

  <div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-cyan-400
to-blue-500
flex
items-center
justify-center
shadow-lg
shadow-cyan-500/30
animate-pulse
">

  <span className="text-white font-black text-2xl">
    🧬
  </span>

</div>

  <h1 className="text-7xl font-bold text-cyan-400">
    PlacementDNA AI
  </h1>

</div>

  ...

          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Know Who Will Get Placed Before Placement Season Begins
          </h2>

          <p className="text-slate-400 text-lg max-w-xl">
            AI-powered platform that predicts placement readiness,
            identifies skill gaps, and generates personalized growth
            plans for students and colleges.
          </p>
         <div className="mt-10 flex gap-4">

  <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-5 backdrop-blur-md w-52">

    <h3 className="text-3xl font-bold text-cyan-400">
      95%
    </h3>

    <p className="text-slate-400 mt-1">
      Placement Accuracy
    </p>

  </div>

  <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-5 backdrop-blur-md w-52">

    <h3 className="text-3xl font-bold text-cyan-400">
      10K+
    </h3>

    <p className="text-slate-400 mt-1">
      Students Analyzed
    </p>

  </div>
  <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-5 backdrop-blur-md w-52">

  <h3 className="text-3xl font-bold text-cyan-400">
    500+
  </h3>

  <p className="text-slate-400 mt-1">
    Career Recommendations
  </p>

</div>

</div>
        </div>

      </div>

      {/* Right Login Section */}

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-2">
            Login
          </h2>

          <p className="text-slate-400 text-center mb-8">
            Welcome back to PlacementDNA AI
          </p>

          <div className="mb-4">
            <label className="text-white block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="
w-full
p-3
rounded-xl
bg-slate-800/80
text-white
border
border-slate-700
focus:border-cyan-400
focus:outline-none
transition-all
duration-300
"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="
w-full
p-3
rounded-xl
bg-slate-800/80
text-white
border
border-slate-700
focus:border-cyan-400
focus:outline-none
transition-all
duration-300
"            />
          </div>

                    <div className="flex items-center justify-between mb-6">

  <label className="flex items-center gap-2 text-slate-400 text-sm">

    <input
      type="checkbox"
      className="accent-cyan-400"
    />

    Remember Me

  </label>

  <button
    className="text-cyan-400 text-sm hover:text-cyan-300 transition"
  >
    Forgot Password?
  </button>

</div>
                    <div className="mb-6">
            <label className="text-white block mb-2">
              Role
            </label>

            <select
              className="
              w-full
              p-3
              rounded-xl
              bg-slate-800/80
              text-white
              border
              border-slate-700
              focus:border-cyan-400
              focus:outline-none
              transition-all
              duration-300
              "
            >
              <option>Student</option>
              <option>Placement Officer</option>
              <option>Admin</option>
            </select>
          </div>

          <button
  onClick={handleLogin}
  className="
  w-full
  bg-cyan-400
  text-slate-950
  font-bold
  py-3
  rounded-xl
  hover:bg-cyan-300
  transition-all
  duration-300
  hover:scale-[1.02]
  shadow-lg
  shadow-cyan-500/20
  "
>
  Login
</button>
          <p className="text-center text-slate-500 text-xs mt-6">
  Powered by PlacementDNA AI • Version 1.0
</p>

        </div>

      </div>

    </div>
  );
}

export default Login;
import { loginUser } from "../services/users";

export const loginForm = () => {
  return `
    <div class="flex flex-col items-center mb-8">
      <h1
        class="text-5xl font-black text-green-400 tracking-wider drop-shadow-lg"
      >
        Rick & Morty
      </h1>

      <p class="text-zinc-400 mt-3">
        Enter the multiverse
      </p>
    </div>

    <form
      id="login-form"
      class="flex flex-col gap-5"
    >
      <div>
        <label class="text-sm text-zinc-300">
          User Email
        </label>

        <input
          name="userEmail"
          type="text"
          placeholder="RickSanchez@example.com"
          class="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f2937] border border-zinc-700 focus:border-green-400 outline-none transition"
        />
      </div>

      <div>
        <label class="text-sm text-zinc-300">
          Password
        </label>

        <input
          name="userPassword"
          type="password"
          id="password"
          placeholder="••••••••"
          class="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f2937] border border-zinc-700 focus:border-cyan-400 outline-none transition"
        />
      </div>

      <button
        type="submit"
        class="mt-4 bg-green-400 hover:bg-green-300 text-black font-bold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
      >
        Login
      </button>

      <p class="text-center text-zinc-400 text-sm">
        Don't have an account?
        <a
          href="/register"
          data-link
          class="text-cyan-400 hover:text-cyan-300"
        >
          Register
        </a>
      </p>
    </form>
  `;
};



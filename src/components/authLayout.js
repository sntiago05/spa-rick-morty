export const authLayout = (content) => {
  return `
    <section
      class="min-h-screen bg-[#0b1120] text-white flex items-center justify-center relative overflow-hidden"
    >
      <!-- Glow -->
      <div class="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

      <div class="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      <!-- Portal -->
      <div
        class="absolute w-[700px] h-[700px] border-[30px] border-green-400/10 rounded-full animate-pulse"
      ></div>

      <!-- Card -->
      <div
        class="relative z-10 w-full max-w-md bg-[#111827]/80 backdrop-blur-md border border-green-400/20 rounded-3xl p-8 shadow-2xl"
      >
        ${content}
      </div>
    </section>
  `;
};
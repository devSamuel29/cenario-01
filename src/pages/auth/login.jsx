import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="bg-gradient-to-b from-zinc-900">
      <form className="flex flex-col space-y-3 bg-black w-[550px] h-[850px] mt-7 mx-auto py-14 px-20 rounded-md items-center">
        <h1 className="text-white font-bold text-[40px] mb-8">
          Entrar no Spotify
        </h1>
        <div className="flex flex-col space-y-2 px-16">
          <button
            type="button"
            className="text-white font-semibold border-2 border-zinc-400 rounded-3xl p-1 hover:border-white"
          >
            Continuar com o google
          </button>
          <button
            type="button"
            className="text-white font-semibold border-2 border-zinc-400 rounded-3xl p-1 hover:border-white"
          >
            Continuar com o facebook
          </button>
          <button
            type="button"
            className="text-white font-semibold border-2 border-zinc-400 rounded-3xl p-1 hover:border-white"
          >
            Continuar com a Apple
          </button>
          <button
            type="button"
            className="text-white font-semibold border-2 border-zinc-400 rounded-full p-3 hover:border-white"
          >
            Continuar com um número de telefone
          </button>
        </div>

        <hr className="border-zinc-400 w-full" />

        <div className="w-full flex flex-col space-y-4 px-16">
          <label htmlFor="email-input" className="text-white font-semibold">
            E-mail ou nome de usuário
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Email ou nome de usuário"
            className="w-full py-2 px-5 text-white text-sm rounded-sm outline-white bg-[#131313]"
          />

          <label htmlFor="password-input" className="text-white font-semibold">
            Senha
          </label>
          <input
            id="password-input"
            type="password"
            placeholder="Senha"
            className="w-full py-2 px-5 text-white text-sm rounded-sm outline-white bg-[#131313]"
          />

          <label className="relative inline-flex items-center">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-4 bg-zinc-400 rounded-full peer peer-focus:ring-2 peer-focus:ring-white peer-checked:after:translate-x-4 peer-checked:after:border-none after:absolute after:top-1 after:left-[2px] after:bg-black after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#1db954]"></div>
            <span className="ml-3 text-sm font-medium text-white">
              Lembrar de mim
            </span>
          </label>

          <button
            type="button"
            className="h-10 w-full text-white font-semibold bg-[#1db954] rounded-3xl outline-white"
          >
            Entrar
          </button>

          <Link
            href="#!"
            className="text-white text-center underline underline-offset-1 hover:text-[#1db954]"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <hr className="border-zinc-400 w-full" />

        <p className="text-zinc-400">
          Não tem uma conta?
          <Link
            href="#!"
            className="text-white underline underline-offset-1 ml-1 hover:text-[#1db954]"
          >
            Inscrever-se no Spotify
          </Link>
        </p>
      </form>
    </main>
  );
}

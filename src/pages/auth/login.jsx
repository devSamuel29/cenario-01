import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="flex flex-col space-y-3 bg-black w-[700px] h-[900px] mt-7 mx-auto py-14 px-20 rounded-md justify-center">
      <h1 className="text-white font-bold text-[40px]">Entrar no Spotify</h1>
      <div className="flex flex-col px-20">
        <button
          type="button"
          className="text-white border-2 border-white rounded-3xl"
        >
          Continuar com o google
        </button>
        <button
          type="button"
          className="text-white border-2 border-white rounded-3xl"
        >
          Continuar com o facebook
        </button>
        <button
          type="button"
          className="text-white border-2 border-white rounded-3xl"
        >
          Continuar com a Apple
        </button>
        <button
          type="button"
          className="text-white border-2 border-white rounded-3xl"
        >
          Continuar com um número de telefone
        </button>
      </div>

      <hr className="border-zinc-400"/>

      <div className="flex flex-col px-20">
        <label htmlFor="email-input" className="text-white">
          E-mail ou nome de usuário
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="Email ou nome de usuário"
          className="w-full py-2 px-5 text-white text-sm rounded-sm outline-white bg-[#131313]"
        />

        <label htmlFor="password-input" className="text-white">
          Senha
        </label>
        <input
          id="password-input"
          type="password"
          placeholder="Senha"
          className="w-full py-2 px-5 text-white text-sm rounded-sm outline-white bg-[#131313]"
        />

        <button
          type="button"
          className="h-10 w-full text-white font-semibold bg-[#1db954] rounded-3xl outline-white"
        >
          Entrar
        </button>

        <Link
          href="#!"
          className="text-white underline underline-offset-1 hover:text-[#1db954]"
        >
          Esqueceu sua senha?
        </Link>
      </div>

      <hr className="border-zinc-400"/>

      <p className="text-zinc-400">
        Não tem uma conta?{" "}
        <Link href="#!" className="text-white underline underline-offset-1">
          Inscrever-se no Spotify
        </Link>
      </p>
    </form>
  );
}

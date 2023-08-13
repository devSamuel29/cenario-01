import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";

export default function LoginPage() {
  return (
    <main className="h-screen bg-gradient-to-b from-zinc-900">
      <form className="flex flex-col bg-black w-[700px] h-full mx-auto py-14 px-20 rounded-md items-center">
        <h1 className="text-white font-bold text-[40px]">Entrar no Spotify</h1>

        <ul className="flex flex-col space-y-2 mt-10 mb-2 px-32">
          <li>
            <button
              type="button"
              className="text-white font-semibold border-2 border-zinc-400 rounded-3xl w-full hover:border-white flex px-4 py-2"
            >
              <GoogleIcon className="" />
              <span className="mx-auto">Continuar com o google</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="text-white font-semibold border-2 border-zinc-400 rounded-3xl w-full hover:border-white flex px-4 py-2"
            >
              <FacebookOutlinedIcon className="" />
              <span className="mx-auto">Continuar com o facebook</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="text-white font-semibold border-2 border-zinc-400 rounded-3xl w-full hover:border-white flex px-4 py-2"
            >
              <AppleIcon className="" />
              <span className="mx-auto">Continuar com a apple</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="text-white font-semibold border-2 border-zinc-400 rounded-full w-full hover:border-white"
            >
              Continuar com um número de telefone
            </button>
          </li>
        </ul>

        <hr className="border-zinc-900 w-full m-10" />

        <div className="w-full flex flex-col px-28">
          <label
            htmlFor="email-input"
            className="mb-2 text-white font-semibold"
          >
            E-mail ou nome de usuário
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Email ou nome de usuário"
            className="w-full py-2 px-5 text-white text-sm rounded-sm bg-[#131313] border-2 border-zinc-400 hover:border-white focus:border-white focus:outline-none"
          />

          <label
            htmlFor="password-input"
            className="mt-4 mb-2 text-white font-semibold"
          >
            Senha
          </label>
          <input
            id="password-input"
            type="password"
            placeholder="Senha"
            className="w-full py-2 px-5 text-white text-sm rounded-sm bg-[#131313] border-2 border-zinc-400 hover:border-white focus:border-white focus:outline-none"
          />

          <label className="mt-8 relative inline-flex items-center">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-4 bg-zinc-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-white peer-checked:after:translate-x-4 peer-checked:after:border-none after:absolute after:top-1 after:left-[2px] after:bg-black after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#1db954]"></div>
            <span className="ml-3 text-sm font-medium text-white">
              Lembrar de mim
            </span>
          </label>

          <button
            type="button"
            className="p-3 mt-10 mb-5 text-black hover:scale-[1.04] font-semibold bg-[#1db954] rounded-3xl outline-white "
          >
            Entrar
          </button>

          <Link
            href="https://accounts.spotify.com/en/password-reset?flow_ctx=578b03af-64b8-448c-949e-dfd77fc8fbf5%3A1691979769"
            className="mb-8 text-white text-center underline underline-offset-1 hover:text-[#1db954]"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <hr className="border-zinc-900 w-full" />

        <p className="mt-10 text-zinc-400 pb-10">
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

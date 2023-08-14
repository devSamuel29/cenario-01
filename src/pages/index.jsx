export default function HomePage() {
  return (
    <main>
      <aside className="flex flex-col w-[300px] h-full space-y-2">
        <section className="flex flex-col rounded-sm text-white p-4 bg-[#131313]">
          <span>Início</span>
          <span>Buscar</span>
        </section>
        <section className="flex flex-col w-[300px] h-[100%] rounded-sm text-white p-4 bg-[#131313]">
          <span>Sua biblioteca</span>
        </section>
      </aside>
    </main>
  );
}

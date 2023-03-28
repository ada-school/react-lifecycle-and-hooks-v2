export default function Body({ children }) {
  return (
    <main className="h-full w-full pt-10 pb-10 flex items-center justify-center bg-mDark-300">
      <section className="h-full w-11/12 md:w-1/2 lg:w-[40%] flex flex-col items-center gap-y-10">
        {children}
      </section>
    </main>
  )
}

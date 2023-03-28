import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <header className="h-full w-full flex items-center justify-around bg-mBlue-100">
      <img src={logo} alt="ada logo" loading="lazy" width="108" height="46" />
    </header>
  )
}

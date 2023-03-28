import icon from "../../assets/icon.png"

export default function Footer() {
  const today = new Date()
  return (
    <footer className="h-full w-full flex flex-col items-center pb-4 pt-4 gap-y-3 bg-mDark-100">
      <p className="text-mGrey-200">Made with ❤️ by @ada-school team.</p>
      <img src={icon} alt="ada logo" loading="lazy" width="32" height="32" />
      <p className="text-mGrey-200">© Ada School {today.getFullYear()}.</p>
    </footer>
  )
}

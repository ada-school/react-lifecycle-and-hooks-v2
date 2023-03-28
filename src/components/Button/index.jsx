export default function Button({ onClick, children }) {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center rounded-full bg-mYellow-100 hover:bg-opacity-80"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

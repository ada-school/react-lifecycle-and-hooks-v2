import left from "../../assets/left.svg"
import right from "../../assets/right.svg"

export default function Card(props) {
  const { children, title, showButtons = false, onNext, onPrev } = props
  return (
    <article className="w-full h-80 p-1 rounded-lg bg-gradient-to-r from-mBlue-100 to-mPurple-100">
      <div className="w-full h-full flex flex-col items-center gap-y-4 p-4 rounded-lg bg-mDark-200 text-white">
        <div className="w-full flex items-center justify-evenly">
          {showButtons && (
            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-mPurple-100 hover:bg-opacity-80"
              onClick={onPrev || undefined}
            >
              <img src={left} alt="left arrow" width="20" height="20" />
            </button>
          )}
          <h2 className="text-base md:text-xl font-semibold text-center">
            {title}
          </h2>
          {showButtons && (
            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-mPurple-100 hover:bg-opacity-80"
              onClick={onNext || undefined}
            >
              <img src={right} alt="right arrow" width="20" height="20" />
            </button>
          )}
        </div>
        {children}
      </div>
    </article>
  )
}

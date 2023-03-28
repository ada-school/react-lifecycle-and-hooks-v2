export default function OptionPicker(props) {
  const { options, onClick, activeOption } = props

  return (
    <ul className="h-16 w-fit flex gap-x-2 p-2 bg-mDark-100 border-mBlue-100 border-[1px] rounded-md">
      {options.map(({ optionId, label }) => (
        <button
          className={`w-28 rounded-md p-3 text-white ${
            activeOption === optionId ? "bg-mBlue-100" : "bg-transparent"
          }`}
          key={optionId}
          onClick={() => onClick(optionId)}
        >
          {label}
        </button>
      ))}
    </ul>
  )
}

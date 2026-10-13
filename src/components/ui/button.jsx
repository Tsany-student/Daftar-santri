
export default function Button({ children, variant = "biru", onClick }) {
  let warna = "bg-blue-600 text-white hover:bg-blue-700"

  if (variant === "putih") {
    warna = "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
  } else if (variant === "merah") {
    warna = "bg-red-600 text-white hover:bg-red-700"
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium ${warna}`}
    >
      {children}
    </button>
  )
}
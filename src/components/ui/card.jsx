
export default function Card({ children }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      {children}
    </div>
  )
}
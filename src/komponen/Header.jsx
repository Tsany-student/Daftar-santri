
export default function Header({ title, subtitle }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </>
  )
}
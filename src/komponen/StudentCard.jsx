import Card from "../components/ui/card"
import Button from "../components/ui/button"


export default function StudentCard({ student, onDelete }) {
  const lulus = student.grade >= 80

  return (
    <Card>
      <h3 className="font-semibold text-lg text-gray-800">{student.name}</h3>
      <p className="text-sm text-gray-600">NIM: {student.nim}</p>
      <p className="text-sm text-gray-600">Nilai: {student.grade}</p>

      {lulus ? (
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
          Lulus dengan Baik
        </span>
      ) : (
        <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
          Perlu Perbaikan
        </span>
      )}

      {onDelete && (
        <div className="mt-3">
          <Button variant="merah" onClick={() => onDelete(student.id)}>
            Hapus
          </Button>
        </div>
      )}
    </Card>
  )
}
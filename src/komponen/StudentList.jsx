import StudentCard from "./StudentCard"


export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return <p className="text-gray-500">Belum ada data mahasiswa.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {students.map((s) => (
        <StudentCard key={s.id} student={s} onDelete={onDelete} />
      ))}
    </div>
  )
}
import { useState, useEffect } from "react"
import Header from "./komponen/Header"
import Loading from "./komponen/Loading"
import StudentList from "./komponen/StudentList"
import Button from "./components/ui/Button"

export default function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [hanyaLulus, setHanyaLulus] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents([
        { id: 1, name: "Andi Saputra", nim: "2301001", grade: 85 },
        { id: 2, name: "Budi Santoso", nim: "2301002", grade: 72 },
        { id: 3, name: "Citra Dewi", nim: "2301003", grade: 90 },
        { id: 4, name: "Dewi Lestari", nim: "2301004", grade: 65 },
      ])
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  function hapusMahasiswa(id) {
    setStudents(students.filter((s) => s.id !== id))
  }

  let dataTampil = students
  if (hanyaLulus) {
    dataTampil = students.filter((s) => s.grade >= 80)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-6 space-y-4">
        <Header
          title="Daftar Mahasiswa"
          subtitle="React Hooks, Props & Conditional Rendering"
        />

        <div className="flex gap-2 items-center">
          <Button variant="putih" onClick={() => setHanyaLulus(!hanyaLulus)}>
            {hanyaLulus ? "Tampilkan Semua" : "Hanya Nilai >= 80"}
          </Button>
          <span className="text-sm text-gray-500">
            Total: {dataTampil.length}
          </span>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <StudentList students={dataTampil} onDelete={hapusMahasiswa} />
        )}
      </div>
    </div>
  )
}
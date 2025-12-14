import Link from 'next/link'
import { Course } from '../lib/courses'

export default function CourseCard({ course }: { course: Course }){
  return (
    <article className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{course.ageRange} • {course.level}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">{course.type === 'teachers' ? 'הכשרה' : 'קורס'}</div>
          <div className="mt-2 font-semibold">{course.price}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link href={`/courses/${course.slug}`} className="text-haitech-blue hover:underline">לפרטים</Link>
        <Link href={`/courses/${course.slug}`} className="px-3 py-1 bg-gray-100 rounded-md text-sm">הרשמה</Link>
      </div>
    </article>
  )
}

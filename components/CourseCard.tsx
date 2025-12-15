import Link from 'next/link'
import { Course } from '../lib/courses'

export default function CourseCard({ course }: { course: Course }){
  return (
    <article className="relative border rounded-2xl p-4 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-haitech-blue to-haitech-purple" />
      <div className="ml-4">
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
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">{course.type}</span>
            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">{course.ageRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/courses/${course.slug}`} className="text-haitech-blue hover:underline">לפרטים</Link>
            <Link href={`/courses/${course.slug}`} className="px-3 py-1 bg-gradient-to-r from-haitech-blue to-haitech-purple text-white rounded-md text-sm">הרשמה</Link>
          </div>
        </div>
      </div>
    </article>
  )
}

import { courses } from '../../../lib/courses'

type Props = { params: { slug: string } }

export default function CourseDetail({ params }: Props){
  const course = courses.find(c=> c.slug === params.slug)
  if(!course) return <div>הקורס לא נמצא</div>

  return (
    <article>
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.ageRange} • {course.level}</p>
      <p className="mt-4">מחיר: {course.price}</p>
      <div className="mt-6">
        <h3 className="font-semibold">תיאור קצר</h3>
        <p className="text-gray-600">תיאור דמי עבור הקורס — כאן תוכלו להוסיף פירוט על תכנית הלימודים, משך הקורס ומטרות הלמידה.</p>
      </div>
    </article>
  )
}

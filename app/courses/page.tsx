"use client"
import { useState, useMemo } from 'react'
import { courses, Course } from '../../lib/courses'
import CourseCard from '../../components/CourseCard'
import { useSearchParams } from 'next/navigation'

export default function CoursesPage(){
  const search = useSearchParams()
  const initialCat = search?.get('category') ?? 'all'
  const [category, setCategory] = useState<string>(initialCat)

  const filtered = useMemo(()=>{
    if(category === 'all') return courses
    return courses.filter(c=> c.type === category)
  },[category])

  return (
    <div>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">כל הקורסים</h1>
          <p className="text-gray-500">בחרו קטגוריה כדי לסנן</p>
        </div>
        <div className="flex gap-2">
          {['all','kids','teens','adults','teachers'].map(cat=> (
            <button key={cat} onClick={()=>setCategory(cat)} className={`px-3 py-2 rounded ${category===cat? 'bg-haitech-blue text-white':'bg-white border'}`}>
              {cat === 'all' ? 'הכל' : (cat === 'kids' ? 'ילדים' : cat === 'teens' ? 'נוער' : cat === 'adults' ? 'מבוגרים' : 'צוותי הוראה')}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(c=> <CourseCard key={c.id} course={c as Course} />)}
      </div>
    </div>
  )
}

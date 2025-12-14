"use client"
import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { courses, Course } from '../lib/courses'
import CourseCard from './CourseCard'

export default function CoursesClient(){
  const search = useSearchParams()
  // When server renders this component (CSR), search may be null initially, so guard with effect
  const param = search?.get('category') ?? 'all'
  const [category, setCategory] = useState<string>(param)

  useEffect(()=>{
    // keep state in sync with URL when mounted
    setCategory(param)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[param])

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

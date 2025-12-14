"use client"
import { useState } from 'react'

const samples = [
  { name: 'מיכל — מנהלת בית ספר', text: 'שיתוף פעולה מצוין — תכניות מותאמות והטמעה קלה במערכת.' },
  { name: 'איתי — הורה', text: 'הילדים שלי התחברו והתקדמו מהר. מורים מקצועיים.' },
  { name: 'המרכז לטכנולוגיה חינוכית', text: 'שילוב כלי AI בהוראה שיפר את מעורבות התלמידים.' }
]

export default function TestimonialSlider(){
  const [i, setI] = useState(0)
  const next = ()=> setI((i+1)%samples.length)
  const prev = ()=> setI((i-1+samples.length)%samples.length)

  return (
    <section className="bg-gray-50 p-6 rounded-2xl">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">מה ששותפים וההורים אמרו</h3>
          <p className="text-sm text-gray-500">משוב אמיתי על העבודה עם בתי הספר והמשפחות</p>
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="px-3 py-1 bg-white rounded shadow">◀</button>
          <button onClick={next} className="px-3 py-1 bg-white rounded shadow">▶</button>
        </div>
      </div>

      <div className="mt-4">
        <blockquote className="text-gray-700">“{samples[i].text}”</blockquote>
        <cite className="block mt-3 text-sm text-gray-500">— {samples[i].name}</cite>
      </div>
    </section>
  )
}

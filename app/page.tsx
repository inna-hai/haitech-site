import Link from 'next/link'
import { courses } from '../lib/courses'
import CourseCard from '../components/CourseCard'
import TestimonialSlider from '../components/TestimonialSlider'

export default function Home(){
  const featured = courses.slice(0,6)

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-14">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">דרך ההייטק — קורסים חדשניים בטכנולוגיה ו-AI</h1>
          <p className="mt-4 text-gray-600 text-lg">תכניות מעשיות שמכינות לעתיד: פרויקטים, רובוטיקה, פיתוח ויישומי בינה מלאכותית בשילוב פדגוגיה מודרנית.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link href="/courses" className="px-6 py-4 bg-gradient-to-r from-haitech-blue to-haitech-purple text-white rounded-xl shadow-lg text-center">לכל הקורסים</Link>
            <Link href="/schools" className="px-5 py-4 border rounded-xl text-gray-700">פתרונות לבתי ספר</Link>
          </div>
          <div className="mt-6 flex items-center gap-3 flex-wrap text-sm text-gray-500">
            <span className="px-3 py-1 bg-gray-100 rounded-full">הצטרפו ל-1,200 תלמידים</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">הכשרות מקצועיות לצוותי הוראה</span>
          </div>
        </div>

        <div className="rounded-2xl p-6 flex items-center justify-center">
          <div className="w-full max-w-md aspect-video rounded-xl bg-gradient-to-br from-haitech-blue/20 to-haitech-purple/10 flex items-center justify-center animate-float">
            <img src="/hero-illustration.svg" alt="ai-education" className="w-3/4 h-3/4 object-contain opacity-90" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">קטגוריות</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/courses?category=kids" className="p-4 rounded-xl bg-white border shadow-sm hover:shadow-md text-center">קורסים לילדים</Link>
          <Link href="/courses?category=teens" className="p-4 rounded-xl bg-white border shadow-sm hover:shadow-md text-center">קורסים לנוער</Link>
          <Link href="/courses?category=adults" className="p-4 rounded-xl bg-white border shadow-sm hover:shadow-md text-center">קורסים למבוגרים</Link>
          <Link href="/courses?category=teachers" className="p-4 rounded-xl bg-white border shadow-sm hover:shadow-md text-center">הכשרות לצוותי הוראה</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">קורסים מובילים</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(c=> <CourseCard key={c.id} course={c} />)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">למה דרך ההייטק?</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
            <div className="text-haitech-purple text-2xl">🤖</div>
            <h3 className="mt-2 font-semibold">AI + פדגוגיה</h3>
            <p className="text-sm text-gray-500 mt-1">שילוב כלים חכמים להנגשה ולמדידה.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
            <div className="text-haitech-blue text-2xl">💡</div>
            <h3 className="mt-2 font-semibold">חדשנות</h3>
            <p className="text-sm text-gray-500 mt-1">תכניות עדכניות שמכינות לשוק העבודה.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
            <div className="text-haitech-azure text-2xl">🏫</div>
            <h3 className="mt-2 font-semibold">ניסיון בבתי ספר</h3>
            <p className="text-sm text-gray-500 mt-1">שיתופי פעולה עם מוסדות חינוך וארגונים.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
            <div className="text-haitech-purple text-2xl">🔀</div>
            <h3 className="mt-2 font-semibold">לימוד היברידי</h3>
            <p className="text-sm text-gray-500 mt-1">קורסים דיגיטליים ושיעורים פרונטליים.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-gradient-to-r from-haitech-blue/10 to-haitech-purple/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">פתרונות לבתי ספר</h3>
          <p className="text-gray-600">תכניות מודולריות, הכשרות למורים ושילוב טכנולוגיה בכיתה.</p>
        </div>
        <Link href="/schools" className="px-4 py-2 bg-white rounded shadow">למידע נוסף</Link>
      </section>

      <section className="mt-10">
        <TestimonialSlider />
      </section>

      <section className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold">רוצה שנחזור אליך?</h2>
        <p className="text-gray-600 mt-2">מלא/י פרטים וניצור קשר בתוך יום עסקים אחד.</p>
        {/* simple client form */}
        <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
          <input name="name" placeholder="שם" className="p-3 border rounded" />
          <input name="phone" placeholder="טלפון" className="p-3 border rounded" />
          <input name="email" placeholder="מייל" className="p-3 border rounded" />
          <select name="learnerType" className="p-3 border rounded">
            <option>בחירה</option>
            <option>ילד/ה</option>
            <option>נוער</option>
            <option>מבוגר</option>
            <option>מוסד/מורה</option>
          </select>
          <textarea name="notes" placeholder="הערות" className="p-3 border rounded col-span-1 sm:col-span-2" />
          <button type="submit" className="px-4 py-3 bg-gradient-to-r from-haitech-blue to-haitech-purple text-white rounded">שלח</button>
        </form>
      </section>
    </>
  )
}

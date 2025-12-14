export type Course = {
  id: string
  title: string
  ageRange: string
  level: string
  price: string
  type: 'kids' | 'teens' | 'adults' | 'teachers'
  slug: string
}

export const courses: Course[] = [
  { id: 'c1', title: 'מבוא לתכנות לילדים', ageRange: '7-12', level: 'מתחילים', price: '₪450', type: 'kids', slug: 'intro-kids' },
  { id: 'c2', title: 'רובוטיקה וננו-קוד', ageRange: '9-13', level: 'בינוני', price: '₪650', type: 'kids', slug: 'robotics-kids' },
  { id: 'c3', title: 'קוד לנוער: פייתון ואפליקציות', ageRange: '13-18', level: 'מתקדם', price: '₪980', type: 'teens', slug: 'python-teens' },
  { id: 'c4', title: 'פיתוח ווב למבוגרים', ageRange: '18+', level: 'מתחילים', price: '₪1200', type: 'adults', slug: 'web-adults' },
  { id: 'c5', title: 'AI בהוראה — הכשרה לצוותים', ageRange: '18+', level: 'מתקדם', price: '₪2200', type: 'teachers', slug: 'ai-teachers' },
  { id: 'c6', title: 'מפגשי סטודיו: פרויקט אישי', ageRange: '16+', level: 'בינוני', price: '₪1400', type: 'teens', slug: 'studio-teens' }
]

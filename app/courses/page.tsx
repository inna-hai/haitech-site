import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const CoursesClient = dynamic(() => import('../../components/CoursesClient'), { ssr: false })

export default function CoursesPage(){
  return (
    <div>
      <Suspense fallback={<div className="p-6">טוען קורסים…</div>}>
        {/* CoursesClient is a client component that handles search params and filtering */}
        <CoursesClient />
      </Suspense>
    </div>
  )
}

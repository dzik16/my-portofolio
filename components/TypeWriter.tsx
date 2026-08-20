'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Senior Mobile & Full-stack Engineer',
  'React Native Developer',
  'Android (Kotlin) Developer',
  'React / Next.js Engineer',
  'Go Backend Developer',
]

export default function TypeWriter() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout: NodeJS.Timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      // The state transition advances the typewriter cycle after deletion completes.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false)
      setRoleIdx((prev) => (prev + 1) % roles.length)
    } else if (deleting) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIdx])

  return (
    <span className="text-[#00d9b8]">
      {text}
      <span className="cursor" />
    </span>
  )
}

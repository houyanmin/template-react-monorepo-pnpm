// @ts-ignore
import React, { useState, useEffect } from 'react'

const c = 1
const b = 2

const getLog = () => {
  return c + b
}

export default function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setNum(getLog)
    }, 1000)
  }, [])

  return <div>计数：{num}</div>
}

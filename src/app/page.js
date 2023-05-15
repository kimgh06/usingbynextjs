"use client";
import { useState } from "react"

export default function Home() {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      hi{cnt}
      <button onClick={e => setCnt(cnt + 1)}>+</button>
    </div>
  )
}

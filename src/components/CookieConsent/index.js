import React, { useEffect, useState } from "react"

import { ConsentContainer } from "./CookieConsent.style"

const CookieConsent = () => {
  const [pop, setPop] = useState(true)
  const [answer, setAnswer] = useState(null)

  function shouldPopup() {
    return !localStorage.getItem("cookie_consent")
  }

  function saveToStorage() {
    localStorage.setItem("cookie_consent", true)
  }

  function handleQuestion() {
    saveToStorage()
    setAnswer(true)
    setPop(true)
  }

  useEffect(() => {
    if (shouldPopup()) {
      setPop(false)
    } else {
      setPop(true)
    }
  }, [])

  return (
    <ConsentContainer $answer={answer} $pop={pop}>
      <div>
        <p>
          We use cookies and other tracking technologies to improve your
          browsing experience on our website, to analyze our website traffic,
          and to understand where our visitors are coming from.
          <button onClick={handleQuestion}>Ok</button>
        </p>
      </div>
    </ConsentContainer>
  )
}

export default CookieConsent

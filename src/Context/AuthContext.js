import React, { createContext, useState, useEffect } from 'react'
import appFirebase, { auth } from '../services/firebase'
import history from '../history'
export const AuthContext = createContext()
export const AuthProvider = (props) => {
  const { children } = props
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    appFirebase.auth().onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <>Carregando... </>
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

import { User, getStoredUser, removeUser, storeUser } from '@/lib/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = getStoredUser()
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const login = (username: string, password: string) => {
    if (password === 'joebiden') {
      toast.success('joooo biden!!!')
      const newUser = { id: crypto.randomUUID(), username }
      setUser(newUser)
      storeUser(newUser)
      return true
    }

    toast.error('se a senha nao e joebiden voce errou hahaha se fodeu petralha!')
    return false
  }

  const logout = () => {
    setUser(null)
    removeUser()
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

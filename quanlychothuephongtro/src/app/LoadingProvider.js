"use client"
import { useState, createContext, useContext, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import LoadingSpinner from './LoadingSpinner'

const LoadingContext = createContext()

export const useLoading = () => useContext(LoadingContext)

export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)
    const pathname = usePathname()
    const searchParams = useSearchParams()
    // const searchParams = 1
    useEffect(() => {
        const handleStart = () => setIsLoading(true)
        const handleComplete = () => setIsLoading(false)

        handleStart()

        // Sử dụng timeout để mô phỏng thời gian tải
        const timer = setTimeout(() => {
            handleComplete()
        }, 0) //  có thể điều chỉnh thời gian này

        return () => clearTimeout(timer)
    }, [pathname, searchParams])

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && <LoadingSpinner />}
            {children}
        </LoadingContext.Provider>
    )
}

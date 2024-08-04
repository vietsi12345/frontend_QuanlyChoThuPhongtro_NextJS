// "use client"

// import React from 'react'
// import { Provider } from 'react-redux'
// import { store } from './store'

// const Providers = ({ children }) => {
//     return (
//         <Provider store={store} >
//             {children}
//         </Provider>
//     )
// }

// export default Providers

"use client"

import { Provider } from "react-redux"
import { store } from "@/store"
import { LoadingProvider } from "./app/LoadingProvider"
import { Suspense } from "react"


export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <LoadingProvider>
                    {children}
                </LoadingProvider>
            </Suspense>
        </Provider>
    )
}
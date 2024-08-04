import React, { Suspense } from 'react'
import PaymentV2 from './PaymentV2'

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <PaymentV2 />
            </div>
        </Suspense>
    )
}

export default page

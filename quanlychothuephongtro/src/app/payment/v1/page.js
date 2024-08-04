import React, { Suspense } from 'react'
import PaymentV1 from './PaymentV1'


const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <PaymentV1 />
            </div>
        </Suspense>
    )
}

export default page

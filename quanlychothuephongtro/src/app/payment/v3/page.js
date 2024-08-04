// import React from 'react'
// import BookingV3 from './BookingV3'

// const page = () => {
//     return (
//         <div>
//             <BookingV3 />
//         </div>
//     )
// }

// export default page
import React, { Suspense } from 'react'
import BookingV3 from './BookingV3'

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <BookingV3 />
            </div>
        </Suspense>
    )
}

export default page

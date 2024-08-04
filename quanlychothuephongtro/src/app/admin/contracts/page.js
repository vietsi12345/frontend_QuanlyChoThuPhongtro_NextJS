// import React from 'react'
// import { ContractTable } from './ContractTable'

// const page = () => {
//     return (
//         <div>
//             <ContractTable />
//         </div>
//     )
// }

// export default page

import React, { Suspense } from 'react'
import { ContractTable } from './ContractTable'

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <ContractTable />
            </div>
        </Suspense>
    )
}

export default Page
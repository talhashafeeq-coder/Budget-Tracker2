// import { currentUser } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
// import React from 'react'

// function page() {
//     const user = await currentUser();
//   if (!user) {
//     redirect("/sign-in");
//   }
//   return (
//     <div>
//      <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
//       <div>
//         <h1 className="text-center text-3xl">
//           Welcome, <span className="ml-2 font-bold">{user.firstName}! 👋</span>
//         </h1>
//         <h2 className="mt-4 text-center text-base text-muted-foreground">
//           Let &apos;s get started by setting up your currency
//         </h2>

//         <h3 className="mt-2 text-center text-sm text-muted-foreground">
//           You can change these settings at any time
//         </h3>
//       </div>
//     </div>
//   )
// }

// export default page
import React from 'react'

function page() {
  return (
    <div>
       <h3>Hello , Wizard</h3>
    </div>
  )
}


export default page


// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Provider } from "react-redux";
// import { store } from "@/store";
// import Providers from "@/Providers";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Providers children={children}></Providers>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Providers from "@/Providers";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Providers >{children} </Providers>
      </body>
    </html>
  );
}

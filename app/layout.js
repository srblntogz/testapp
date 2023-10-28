import { Oswald } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const oswald = Oswald({ subsets: ['latin'], weight: "200" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <PrimeReactProvider>
          <Navbar />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  )
}



import { Inter } from 'next/font/google'
import NavScrollExample from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Operacion Rosario',
  description: 'App Digital e Interactiva sobre las Islas Malvinas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <script src="https://unpkg.com/aos@next/dist/aos.js" ></script>
      </head>
      <body >
        <NavScrollExample />

        {children}

        <Footer />
        
  <script>
    AOS.init();
  </script>
      </body>
    </html>
  )
}

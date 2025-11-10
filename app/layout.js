import './globals.css'
import ThemeScript from './ThemeScript'

export const metadata = {
  title: 'Dheeraj Gajula | Portfolio',
  description: 'Software Engineer & Network Systems Specialist',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  )
}

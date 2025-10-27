import './globals.css'

export const metadata = {
  title: 'Dheeraj Gajula | Portfolio',
  description: 'Software Engineer & Network Systems Specialist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

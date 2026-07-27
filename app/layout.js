import './globals.css'

export const metadata = {
  title: 'AI Chat',
  description: 'Modern AI streaming chat application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

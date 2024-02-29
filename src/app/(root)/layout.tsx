import {PropsWithChildren} from 'react'

export default function MinimalRootLayout({children}: PropsWithChildren) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

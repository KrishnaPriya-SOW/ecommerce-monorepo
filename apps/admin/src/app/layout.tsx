import './globals.css' 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'E-commerce administration panel',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="min-h-screen flex">
          <aside className="w-64 bg-white shadow">
            <nav className="p-4">
              <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
              <ul className="space-y-2">
                <li><a href="/admin" className="block px-4 py-2 rounded bg-gray-100">Dashboard</a></li>
                <li><a href="/admin/products" className="block px-4 py-2 rounded hover:bg-gray-100">Products</a></li>
                <li><a href="/admin/orders" className="block px-4 py-2 rounded hover:bg-gray-100">Orders</a></li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-8 bg-white rounded-lg shadow-sm">{children}</main>
        </div>
      </body>
    </html>
  )
}

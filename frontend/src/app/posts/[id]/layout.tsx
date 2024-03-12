import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
	<div>
      {children}
	</div>
  )
}

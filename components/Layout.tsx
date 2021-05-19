import Head from 'next/head'
import Header from '@components/header'
import Breadcrumbs from '@components/Breadcrumbs'

export default function Layout({
  children,
  title = 'Quan Pizza',
}) {
  return (
    <div className='w-full '>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header> 
      <Breadcrumbs></Breadcrumbs>
      <div className='w-full bg-gray-400'>
        {children}
      </div>

      <footer>{'Footer'}</footer>
    </div>
  )
}

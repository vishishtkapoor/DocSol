import Container from '../components/Main/Container'
import {NextUIProvider} from '@nextui-org/react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>


<Container>
 <NextUIProvider>
  <Component {...pageProps} />
  </NextUIProvider>
  </Container>
  </>
}

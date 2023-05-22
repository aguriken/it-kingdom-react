import 'src/styles/globals.css'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';
import { useInputArray } from 'src/hooks/useInputArray'

export default function App({ Component, pageProps }) {
  const inputArray = useInputArray();
  useBgLightBlue();
  return <Component {...pageProps} {...inputArray} />
}

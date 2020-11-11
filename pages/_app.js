import "styles/reset.css"
import "styles/clarkson.css"
import "styles/defaults.css"
import Layout from "components/Layout"
import { useEffect } from "react"
import smoothscroll from "smoothscroll-polyfill"

function App({ Component, pageProps, router }) {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  useEffect(() => {
    const routeChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })

      // https://github.com/vercel/next.js/issues/17464
      document.querySelectorAll('style[media="x"]').forEach(elem => {
        elem.removeAttribute("media")
      })
    }
    router.events.on("routeChangeComplete", routeChange)
    router.events.on("routeChangeStart", routeChange)

    return () => {
      router.events.off("routeChangeComplete", routeChange)
      router.events.off("routeChangeStart", routeChange)
    }
  })

  return (
    <Layout>
      <Component key={router.asPath} {...pageProps} />
    </Layout>
  )
}

export default App

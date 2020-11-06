import "styles/reset.css"
import "styles/clarkson.css"
import "styles/defaults.css"
import Layout from "components/Layout"

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

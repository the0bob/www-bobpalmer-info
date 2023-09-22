import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import routes from '~react-pages'

// className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200"

export default function App() {
  return (
    <main>
      <Router>
        <Routes />
      </Router>
      <Footer />
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

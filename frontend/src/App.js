import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { privateRouters, publicRoutes } from './routes'
import './customer/scss/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.layout>{<route.element />}</route.layout>}
          />
        ))}
      </Routes>

      <Routes>
        {privateRouters.map((item, idx) => {
          const Page = item.element
          const Layout = item.layout
          return (
            <Route
              key={idx}
              path={item?.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App

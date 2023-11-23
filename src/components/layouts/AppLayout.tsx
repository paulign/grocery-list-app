import classNames from 'classnames'
import { ReactNode } from 'react'
import { Outlet } from 'react-router'
import { Link, useLocation } from 'react-router-dom'

type TAppLayoutProps = {
  children?: ReactNode
}

const AppLayout = ({ children }: TAppLayoutProps) => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <header className="fixed left-0 top-0 flex h-20 w-screen items-center border-b border-b-neutral-200 bg-teal-100">
        <div className="w-full px-5">
          <h1 className="text-3xl">
            <Link to="/">Grocery List</Link>
          </h1>
        </div>
      </header>
      <main className="mt-20 flex-1">
        <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
          <div
            className={classNames(
              'flex-1 flex-col overflow-hidden',
              !isHomePage ? 'hidden md:flex' : 'flex',
            )}
          >
            {children}
          </div>
          <div
            className={classNames(
              'flex-1 flex-col overflow-hidden',
              isHomePage ? 'hidden md:flex' : 'flex',
            )}
          >
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout

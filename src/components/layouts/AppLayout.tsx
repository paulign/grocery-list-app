import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <header className="fixed left-0 top-0 flex h-20 w-screen items-center border-b border-b-neutral-200 bg-teal-100">
        <div className="w-full px-5">
          <h1 className="text-3xl">
            <Link to="/">Grocery List App</Link>
          </h1>
        </div>
      </header>
      <main className="mt-20 h-full w-full flex-1">
        <div className="grid h-full w-full grid-cols-2">
          <div className="flex flex-1 flex-col overflow-y-auto">List here</div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout

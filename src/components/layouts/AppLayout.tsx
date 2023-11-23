import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <header className="fixed left-0 top-0 flex h-20 w-screen items-center border-b border-b-neutral-200 bg-teal-100">
        <div className="container mx-auto w-full px-5">
          <h1 className="text-3xl">Grocery List App</h1>
        </div>
      </header>
      <main className="mt-20 flex-1">
        <div className="container mx-auto grid grid-cols-2">
          <div className="overflow-y-auto p-5">List here</div>
          <div className="overflow-y-auto p-5">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout

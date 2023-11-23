import AppLayout from '@src/components/layouts/AppLayout'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  redirect,
  Route,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Outlet />}>
        <Route
          index
          element={
            <div className="hidden md:block">
              Select entry in the list to see it's details
            </div>
          }
        />
        <Route path="new" element={<div>Add new entry</div>} />
        <Route path="entry/:id" element={<div>Entry details</div>} />
        <Route path="*" loader={() => redirect('/')} />
      </Route>
    </Route>,
  ),
)

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter

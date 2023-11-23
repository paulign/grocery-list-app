import AppLayout from '@src/components/layouts/AppLayout'
import EntriesListPage from '@src/pages/EntriesListPage'
import NewEntryPage from '@src/pages/NewEntryPage'
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
    <Route
      element={
        <AppLayout>
          <EntriesListPage />
        </AppLayout>
      }
    >
      <Route path="/" element={<Outlet />}>
        {/* TODO - move empty state and Entry details pages content to separate files */}
        <Route
          index
          element={<div>Select entry in the list to see it's details</div>}
        />
        <Route path="new" element={<NewEntryPage />} />
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

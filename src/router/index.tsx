import AppLayout from '@src/components/layouts/AppLayout'
import EntriesListPage from '@src/pages/EntriesListPage'
import EntryDetailsPage from '@src/pages/EntryDetailsPage'
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
        {/* TODO - move empty state page content to separate files */}
        <Route
          index
          element={
            <div className="px-5 py-10 text-center font-semibold">
              Select entry in the list to see it's details
            </div>
          }
        />
        <Route path="new" element={<NewEntryPage />} />
        <Route path="entry/:id" element={<EntryDetailsPage />} />
        <Route path="*" loader={() => redirect('/')} />
      </Route>
    </Route>,
  ),
)

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter

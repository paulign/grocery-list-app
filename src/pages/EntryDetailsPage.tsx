import EntryItemCard from '@src/components/EntryItemCard'
import { entryItemStatusLabelsByValue } from '@src/models/entry-item'
import {
  selectEntryById,
  selectEntryStatusHistory,
} from '@src/redux/selectors/groceryEntriesSelectors'
import { useAppSelector } from '@src/redux/utils'
import { Link, useParams } from 'react-router-dom'

const EntryDetailsPage = () => {
  const { id } = useParams()
  const item = useAppSelector(selectEntryById(id))
  const statusHistoryList = useAppSelector(selectEntryStatusHistory(id))

  return (
    <div className="flex-1 overflow-auto border-l border-l-neutral-300 p-5">
      {item ? (
        <>
          <EntryItemCard item={item} className="mb-5" />
          {!!statusHistoryList?.length && (
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Status change history</h2>
              {statusHistoryList?.map(({ id, status, date }) => (
                <div key={id} className="border-b-300 border-b pb-1">
                  {new Date(date).toLocaleString()} -{' '}
                  {entryItemStatusLabelsByValue[status]}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="py-10 text-center font-semibold">
          <p>Not found</p>
          <Link to="/" className="btn">
            Close
          </Link>
        </div>
      )}
    </div>
  )
}

export default EntryDetailsPage

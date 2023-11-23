import EntryItemCard from '@src/components/EntryItemCard'
import {
  TEntryItemStatus,
  entryItemStatusOptions,
} from '@src/models/entry-item'
import {
  selectCurrentFilter,
  selectSortedEntriesList,
} from '@src/redux/selectors/groceryEntriesSelectors'
import { toggleFilter } from '@src/redux/slices/groceryEntries'
import { useAppDispatch, useAppSelector } from '@src/redux/utils'
import classNames from 'classnames'
import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'

const filters = [
  { label: 'All', value: null, key: 'All' },
  ...entryItemStatusOptions,
]

const EntriesListPage = () => {
  const dispatch = useAppDispatch()
  const entriesList = useAppSelector(selectSortedEntriesList)
  const currentFilter = useAppSelector(selectCurrentFilter)

  const onStatusClick = useCallback(
    (status: null | TEntryItemStatus) => () => {
      dispatch(toggleFilter(status))
    },
    [dispatch],
  )

  return (
    <div className="flex flex-1 flex-col gap-y-5 overflow-hidden px-5">
      <div className="flex flex-wrap items-center gap-3">
        Filter:
        {filters.map(({ key, value, label }) => {
          const isSelected = value === currentFilter

          return (
            <button
              key={String(key)}
              className={classNames(
                'underline',
                isSelected ? 'font-bold' : 'font-normal',
              )}
              onClick={onStatusClick(value)}
            >
              {label}
            </button>
          )
        })}
      </div>
      <NavLink
        to="/new"
        className={({ isActive }) =>
          classNames(
            'btn btn-sm btn-primary self-start',
            isActive ? 'pointer-events-none' : '',
          )
        }
      >
        Add item
      </NavLink>
      <div className="flex flex-1 flex-col gap-y-2 overflow-y-auto border-t border-t-neutral-300 py-2">
        {entriesList.map(item => (
          <EntryItemCard key={item.id} item={item} />
        ))}
        {!entriesList?.length && (
          <div className="py-10 text-center font-semibold">No entries yet</div>
        )}
      </div>
    </div>
  )
}

export default EntriesListPage

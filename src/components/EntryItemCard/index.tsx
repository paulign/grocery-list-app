import { EntryItemStatuses, IEntryItem } from '@src/models/entry-item'
import {
  deleteEntry,
  toggleEntryStatus,
} from '@src/redux/slices/groceryEntries'
import { useAppDispatch } from '@src/redux/utils'
import classNames from 'classnames'
import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type TEntryItemCardProps = {
  item: IEntryItem
  className?: string
}

const EntryItemCard = ({ item, className }: TEntryItemCardProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id, title, priority, status, statusUpdatedAt } = item

  const isRanOut = status === EntryItemStatuses.RAN_OUT

  const onStatusClick = useCallback(() => {
    dispatch(toggleEntryStatus(id))
  }, [dispatch, id])

  const onDeleteClick = useCallback(() => {
    dispatch(deleteEntry(id))
    navigate('/')
  }, [dispatch, id, navigate])

  return (
    <div
      className={classNames(
        'flex items-center gap-x-3 border-b border-b-neutral-300 pb-2 text-neutral-700',
        className,
      )}
    >
      <button
        className={classNames(
          'h-8 w-8 rounded-full border-2 border-neutral-600 text-white',
          !isRanOut && 'bg-teal-700',
        )}
        type="button"
        onClick={onStatusClick}
      >
        {!isRanOut && '✓'}
      </button>
      <div className="flex flex-col gap-y-1 ">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm">Priority: {priority}</p>
          <p className="text-sm">
            Status updated: {new Date(statusUpdatedAt).toLocaleString()}
          </p>
        </div>
        <div className="items-centers flex justify-start gap-2">
          <Link to={`entry/${id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
          <button type="button" className="btn btn-sm" onClick={onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default EntryItemCard

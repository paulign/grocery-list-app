import NewEntryForm from '@src/components/NewEntryForm'
import { addEntry } from '@src/redux/slices/groceryEntries'
import { useAppDispatch } from '@src/redux/utils'
import { TEntryItemSchema } from '@src/validators/entry-item'
import { useCallback } from 'react'

const NewEntryPage = () => {
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(
    (values: TEntryItemSchema) => {
      dispatch(addEntry(values))
    },
    [dispatch],
  )

  return (
    <div className="flex-1 overflow-auto border-l border-l-neutral-300 p-5">
      <NewEntryForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewEntryPage

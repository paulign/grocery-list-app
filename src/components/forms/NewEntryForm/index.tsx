import { EntryItemSchema, TEntryItemSchema } from '@src/validators/entry-item'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useMemo } from 'react'
import { entryItemPriorityOptions } from '@src/models/entry-item'
import { Link } from 'react-router-dom'

type TNewEntryFormProps = {
  onSubmit: SubmitHandler<TEntryItemSchema>
}

const NewEntryForm = ({ onSubmit }: TNewEntryFormProps) => {
  const defaultValues = useMemo(() => EntryItemSchema.cast({}), [])

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<TEntryItemSchema>({
    resolver: yupResolver(EntryItemSchema),
    defaultValues,
  })

  const submitHandler = useCallback<SubmitHandler<TEntryItemSchema>>(
    values => {
      onSubmit(values)
      reset()
    },
    [onSubmit, reset],
  )

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-y-5"
    >
      <div className="flex flex-col gap-y-2">
        <label className="block text-sm font-semibold" htmlFor="title-input">
          Title
        </label>
        <input
          className="block h-12 rounded-md border border-neutral-500 px-3"
          {...register('title')}
          id="title-input"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className="block text-sm font-semibold"
          htmlFor="priority-select"
        >
          Priority
        </label>
        <select
          {...register('priority')}
          id="priority-select"
          className="block h-12 rounded-md border border-neutral-500 px-3"
        >
          {entryItemPriorityOptions.map(({ key, value, label }) => (
            <option key={String(key)} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="block text-sm font-semibold" htmlFor="title-input">
          Quantity
        </label>
        <input
          className="block h-12 rounded-md border border-neutral-500 px-3"
          {...register('quantity')}
          id="title-input"
          type="number"
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Add Entry
      </button>
      <Link className="btn" to="/">
        Cancel
      </Link>
    </form>
  )
}

export default NewEntryForm

import { entryItemPriorities } from '@src/models/entry-item'
import * as Yup from 'yup'

export const EntryItemSchema = Yup.object().shape({
  title: Yup.string().label('Title').required().default(''),
  priority: Yup.number()
    .oneOf(entryItemPriorities)
    .label('Priority')
    .required()
    .default(1),
})

export type TEntryItemSchema = Yup.InferType<typeof EntryItemSchema>

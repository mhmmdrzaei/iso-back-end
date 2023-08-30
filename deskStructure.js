// ./deskStructure.js
import {CogIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      ...S.documentTypeListItems().reverse().filter(listItem => !['siteSettings'].includes(listItem.getId())),
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
    ]);


// ./deskStructure.js
import {CogIcon,IceCreamIcon,LemonIcon,HomeIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('In Search Of')
    .items([
      ...S.documentTypeListItems().reverse().filter(listItem => !['siteSettings','press','casting','home'].includes(listItem.getId())),
    //   settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        //home
        S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(
        S.document()
            .schemaType('home')
            .documentId('home')
        ),
     // Custom Press list item
      S.listItem()
      .title('Press')
      .icon(IceCreamIcon)
      .child(
        S.document()
          .schemaType('press')
          .documentId('press')
      ),
    //   Casting 
    S.listItem()
    .title('Casting')
    .icon(LemonIcon)
    .child(
      S.document()
        .schemaType('casting')
        .documentId('casting')
    )

    ]);


import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default', // The name of the Sanity Studio project
  title: 'masonliebe', // The title of the project

  projectId: '6icrb2vy', // The unique identifier for the project
  dataset: 'production', // The name of the dataset

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content') // Title for the studio content
          .items([
            S.listItem()
              .title('Home')
              .id('home')
              .child(S.document().schemaType('home').documentId('home')), // Define a "Home" section

            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')), // Define an "About" section

            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')), // Define a "Contact" section

            orderableDocumentListDeskItem({type: 'project', S, context, title: 'Projects'}), // Define a "Projects" section

            orderableDocumentListDeskItem({type: 'post', S, context, title: 'Blogs'}), // Define a "Blogs" section

            orderableDocumentListDeskItem({type: 'resume', S, context, title: 'Resumes'}), // Define a "Resumes" section

            orderableDocumentListDeskItem({type: 'social', S, context, title: 'Socials'}), // Define a "Socials" section

            orderableDocumentListDeskItem({type: 'category', S, context, title: 'Categories'}), // Define a "Categories" section
          ])
      },
    }),
    visionTool(), // Vision plugin for image and media management
    codeInput(), // Plugin for enhancing code input and editing
  ],

  schema: {
    types: schemaTypes, // Define schema types for the project
  },
})

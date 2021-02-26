export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6038be1c50b25b9ddbb9e0e3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-evvudo86',
                  apiId: '54568571-96a6-4497-b554-ca1edb2b45dd'
                },
                {
                  buildHookId: '6038be1c13761db5ad3bf394',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q9xxwm65',
                  apiId: '85ec2fe6-cffe-4119-906d-93b7fa57eb09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/clcl915/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q9xxwm65.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

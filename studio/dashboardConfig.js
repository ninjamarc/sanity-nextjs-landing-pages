export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62605a8fd8391c1777265011',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gqcrinfd',
                  apiId: '91759980-37a6-4d25-b040-e34984d91ef7'
                },
                {
                  buildHookId: '62605a90957724197683f48b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tp7kq9s8',
                  apiId: 'd62129bc-bd9e-4e6e-8a03-fbc99d053a94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ninjamarc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tp7kq9s8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

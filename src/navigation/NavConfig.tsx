const linking = {
    prefixes: ['https://musalaNews.com', 'musalanews://'],
    config: {
      screens:{
        Settings: 'settings',
        News: {
          path: 'news',
          screens:{
            NewsList: 'newslist',
            Details: 'details/:id'
          }
        }
      }
  }
}
export {linking}
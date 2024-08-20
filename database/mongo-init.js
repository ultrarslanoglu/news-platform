db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'newsDB'
    }
  ]
});

db.news.insertMany([
  { title: 'Sample News 1', content: 'This is the content for sample news 1', category: 'General' },
  { title: 'Sample News 2', content: 'This is the content for sample news 2', category: 'Technology' }
]);

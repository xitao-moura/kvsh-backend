module.exports = {
    apps: [
      {
        name: 'strapi kvsh',
        cwd: '/home/your-name/my-strapi-project/my-project',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: 'localhost', // database endpoint
          DATABASE_PORT: '27017',
          DATABASE_NAME: 'backend', // DB name
          DATABASE_USERNAME: 'kvsh', // your username for psql
          DATABASE_PASSWORD: 'rewq987aa', // your password for psql
        },
      },
    ],
  };
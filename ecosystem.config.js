module.exports = {
    apps: [
      {
        name: 'strapi kvsh',
        cwd: '/home/your-name/my-strapi-project/my-project',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: '127.0.0.1', // database endpoint
          DATABASE_PORT: '27017',
          DATABASE_NAME: 'kvsh', // DB name
          DATABASE_USERNAME: 'kvsh', // your username for psql
          DATABASE_PASSWORD: 'kvsh@!', // your password for psql
        },
      },
    ],
  };
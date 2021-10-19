module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4f16d208ec85cc33cafeece3c888810f'),
    },
  },
});

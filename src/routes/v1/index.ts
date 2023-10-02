import { Router } from 'express';

import oneSignalRoute from './onesignal.route';

const router = Router();

const defaultRoutes = [
  {
    path: '/one-signal',
    route: oneSignalRoute,
  },
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;

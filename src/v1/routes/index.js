import apiController from '../controllers/index';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.json({
      status: 'Welcome to API'
    });
  });

  router.param('id', apiController.id);

  router
    .route('/test')
    .get(apiController.list)
    .post(apiController.create);

  router
    .route('/test/:id')
    .get(apiController.get)
    .patch(apiController.update)
    .delete(apiController.remove);
};

export default routes;

import axios from 'axios';

const routes = {
  tasksPath: () =>
    'https://web-js-frontend-architecture-complex-state-4483931.evaluator6-5.hexlet.io/api/tasks',
};

export default () => {
  console.log('!');
  const response = () => axios.get(routes.tasksPath());
  response().then((r) => console.log(r.data));
};

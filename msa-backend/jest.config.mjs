export default {
  transform: {
    '^.+\\.js$': 'babel-jest',  // Ensure Babel transforms JS files
  },
  testEnvironment: 'node',  // Set the environment to node (needed for server-side code)
};

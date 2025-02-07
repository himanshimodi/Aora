module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Remove "expo-router/babel" from here if present
      'react-native-reanimated/plugin',  // If you're using Reanimated
    ],
  };
};

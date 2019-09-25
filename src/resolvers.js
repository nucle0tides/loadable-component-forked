import hoistNonReactStatics from 'hoist-non-react-statics'

export function resolveComponent(loadedModule, { Loadable }) {
  // eslint-disable-next-line no-underscore-dangle
  const Component = loadedModule.__esModule ? loadedModule.default : (loadedModule.default || loadedModule)
  console.log("resolveComponent/hoistNonReactStatics");
  console.log(Component);
  if (!Component) {
    throw new Error("Component is undefined");
  }
  try {
    console.log(
      hoistNonReactStatics(Loadable, Component, {
          preload: true,
      })
    );
  } catch (err) {
    throw new Error(err);
    console.log(err);
  }
  return Component;
}

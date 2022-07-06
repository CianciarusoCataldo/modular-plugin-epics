import { EpicsPlugin } from "./types";

import { combineEpics, createEpicMiddleware } from "redux-observable";

const epicsPlugin: EpicsPlugin = () => {
  const epicMiddleware: any = createEpicMiddleware();

  return {
    feature: "epics",
    create: (config) => ({
      field: "epics",
      content: config.epics || [],
    }),
    format: (config, enabledPlugins) => {
      let input = { ...config };
      const epics = input.epics || [];
      input.redux?.reduxMiddlewares?.push(epicMiddleware);
      input.epics = epics;

      return input;
    },
    postInit: (config, enabledPlugins) => {
      epicMiddleware.run(combineEpics(...config.epics));
    },
  };
};

export default epicsPlugin;
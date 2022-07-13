/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-epics modular-plugin-epics} init file
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { EpicsPlugin } from "./types";

import { combineEpics, createEpicMiddleware } from "redux-observable";

/**
 * Use {@link https://github.com/CianciarusoCataldo/modular-plugin-epics redux-observable} epics inside modular-engine
 *
 * @returns `epics` plugin
 *
 * @example <caption> Basic scenario - custom epic inside engine.config.js/ts file .</caption>
 *
 * const epicsPlugin = require("modular-plugin-epics");
 *
 *const { createModularAction } = require("modular-engine-tools");
 *
 *const customActionOne = createModularAction("@@custom/action-one");
 *
 *const customActionTwo = createModularAction("@@custom/action-two");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [epicsPlugin],
 *   epics: [
 *     (actions$) =>
 *       actions$.pipe(filter(customActionOne), mapTo(customActionTwo)),
 *   ],
 * };
 *
 * module.exports = { config };
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
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

      input.redux?.reduxMiddlewares?.push(epicMiddleware);

      return { ...input, epics: input.epics || [] };
    },
    postInit: (config, enabledPlugins) => {
      epicMiddleware.run(combineEpics(config.epics));
    },
  };
};

export default epicsPlugin;

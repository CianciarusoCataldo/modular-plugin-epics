import { Epic } from "redux-observable";
import { ModularEnginePlugin } from "modular-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/modular-plugin-epics modular-plugin-epics} config settings type definition
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-epics
 *
 */
export interface EpicsPluginSettings {
  epics?: Epic[];
}

/**
 * {@link https://github.com/CianciarusoCataldo/modular-plugin-epics modular-plugin-epics} type definition
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-epics
 *
 */
export type EpicsPlugin = ModularEnginePlugin<EpicsPluginSettings>;

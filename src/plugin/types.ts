/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-epics modular-plugin-epics} type definitions file
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-epics
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { Epic } from "redux-observable";
import { ModularEnginePlugin } from "modular-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/modular-plugin-epics modular-plugin-epics} config settings type definition
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
export interface EpicsPluginSettings {
  epics?: Epic[];
}

/**
 * {@link https://github.com/CianciarusoCataldo/modular-plugin-epics modular-plugin-epics} type definition
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
export type EpicsPlugin = ModularEnginePlugin<EpicsPluginSettings>;

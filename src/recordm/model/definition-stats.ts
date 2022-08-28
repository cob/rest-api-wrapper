// May contain unused imports in some cases
import { Definition } from "./definition"
// May contain unused imports in some cases
import { Fields } from "./fields"

/**
 *
 * @export
 * @interface DefinitionStats
 */
export interface DefinitionStats {
  /**
   *
   * @type {Definition}
   * @memberof DefinitionStats
   */
  definition?: Definition
  /**
   *
   * @type {Fields}
   * @memberof DefinitionStats
   */
  fields?: Fields
  /**
   *
   * @type {number}
   * @memberof DefinitionStats
   */
  instances_on_db?: number
  /**
   *
   * @type {number}
   * @memberof DefinitionStats
   */
  instances_on_es?: number
  /**
   *
   * @type {number}
   * @memberof DefinitionStats
   */
  es_errors?: number
}

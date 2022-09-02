/* eslint-disable */

// May contain unused imports in some cases
import { TaskAssignee } from "./task-assignee"

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'state'?: TaskStateEnum;
    /**
     * 
     * @type {TaskAssignee}
     * @memberof Task
     */
    'assignee'?: TaskAssignee;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'correlationId'?: string;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof Task
     */
    'permissions'?: { [key: string]: boolean; };
}

export const TaskStateEnum = {
    TODO: 'TODO',
    COMPLETE: 'COMPLETE',
    PLANNED: 'PLANNED'
} as const;

export type TaskStateEnum = typeof TaskStateEnum[keyof typeof TaskStateEnum];


// Type declarations for @cob/rest-api-wrapper

/** Any of the historically accepted forms for sort direction. */
export type Ascending = boolean | "asc" | "desc" | "true" | "false"

export interface LoggedInUser {
    username: string
    groups?: Array<{ name: string }>
    /** present (true) when the response was served from the 60s cache */
    throtle?: boolean
    [key: string]: unknown
}

export interface SearchResult {
    /** link to the same search in the web UI (absolute when running in node) */
    resultsUrl: string
    hits: {
        total: { value: number }
        hits: Array<{ _source: Record<string, unknown>, [key: string]: unknown }>
    }
    aggregations?: Record<string, unknown>
    [key: string]: unknown
}

/** Set the CoB server used by every function (not needed in a browser). */
export function setServer(server: string): void
export function getServer(): string

/** Authenticate with username/password or a timeless token (node only). */
export function auth(credentials: { username?: string, password?: string, token?: string }): Promise<LoggedInUser>

/** Current logged-in user; responses are cached for 60s unless throtle is false. */
export function umLoggedin(throtle?: boolean): Promise<LoggedInUser>

export function rmDefinitionSearch(definitionName: string, query?: string, from?: number, size?: number, sort?: string, ascending?: Ascending, timezone?: string): Promise<SearchResult>

export function rmDefinitionAggregation(def: number | string, aggregation: Record<string, unknown>, query?: string, from?: number, size?: number, sort?: string, ascending?: Ascending, timezone?: string): Promise<SearchResult>

export function rmDomainSearch(domainId: number | string, query?: string, from?: number, size?: number, sort?: string, ascending?: Ascending): Promise<SearchResult>

export function rmGetInstance(instanceId: number | string): Promise<Record<string, unknown> & { resultsUrl: string }>

export function rmAddInstance(definitionName: string, values: Record<string, unknown>): Promise<Record<string, unknown> & { id: number, resultsUrl: string }>

export function rmDeleteInstance(instanceId: number | string, ignoreRefs?: boolean): Promise<unknown>

export function rmListDefinitions(filter?: { includeDisabled?: boolean, name?: string | null }): Promise<Array<Record<string, unknown>>>

export function rmListDefinitionFields(definitionId: number | string): Promise<Record<string, unknown>>

export function dmEquipmentSearch(query?: string, from?: number, size?: number): Promise<SearchResult>

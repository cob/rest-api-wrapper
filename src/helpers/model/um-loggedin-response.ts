export interface UmLoggedInResponse {
  username: string
  groups?: Array<{ name: string }>
  throtle?: boolean
}

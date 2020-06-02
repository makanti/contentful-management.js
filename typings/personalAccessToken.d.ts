import { MetaSys, MetaSysProps } from './generated/types/common-types'

export interface PersonalAccessTokenProp {
  name: string
  scopes: 'content_management_manage'[]
}

export interface PersonalAccessToken extends PersonalAccessTokenProp, MetaSys<MetaSysProps> {
  revokedAt: null | string
  token?: string
  revoke(): Promise<PersonalAccessToken>
}

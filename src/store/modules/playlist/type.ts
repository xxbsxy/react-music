export interface Subscriber {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: any
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail?: any
  anchor: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
  avatarImgId_str: string
}

export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

export interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: string[]
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail: AvatarDetail
  anchor: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
  avatarImgId_str: string
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic: number
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Track {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia?: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt?: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq?: any
  hr?: any
  a?: any
  cd: string
  no: number
  rtUrl?: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData?: any
  tagPicList?: any
  resourceState: boolean
  version: number
  songJumpInfo?: any
  entertainmentTags?: any
  single: number
  noCopyrightRcmd?: any
  rtype: number
  rurl?: any
  mst: number
  cp: number
  mv: number
  publishTime: number
}

export interface TrackId {
  id: number
  v: number
  t: number
  at: number
  alg?: any
  uid: number
  rcmdReason: string
  sc?: any
  f?: any
}

export interface IPlaylistObject {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: string[]
  updateFrequency?: any
  backgroundCoverId: number
  backgroundCoverUrl?: any
  titleImage: number
  titleImageUrl?: any
  englishTitle?: any
  officialPlaylistType?: any
  copied: boolean
  subscribers: Subscriber[]
  subscribed: boolean
  creator: Creator
  tracks: Track[]
  videoIds?: any
  videos?: any
  trackIds: TrackId[]
  bannedTrackIds?: any
  shareCount: number
  commentCount: number
  remixVideo?: any
  sharedUsers?: any
  historySharedUsers?: any
  gradeStatus: string
  score?: any
  algTags: string[]
}

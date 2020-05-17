import { IImageData } from './image'
import { ILinkData } from './links'

export interface IFriendData {
  images: IImageData[]
  title: string
  description: string
  shortDescription?: string
  name: string
  siteLink: ILinkData
}

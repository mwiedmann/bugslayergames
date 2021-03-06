import { IImageData } from './image'
import { ILinkData } from './links'

export interface IGameData {
  images: IImageData[]
  title: string
  description: string
  shortDescription?: string
  name: string
  playLink: ILinkData
  github?: string
}

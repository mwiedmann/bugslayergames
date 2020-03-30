import { IImageData } from './image'

export type ILinkType = 'local' | 'external'

export interface ILinkData {
  link: string
  type: ILinkType
}

export interface IGameData {
  images: IImageData[]
  title: string
  description: string
  name: string
  playLink: ILinkData
}

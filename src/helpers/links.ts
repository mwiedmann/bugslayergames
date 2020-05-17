import { IImageData } from '../types/image'
import { ILinkData } from '../types/links'

const siteLink = (link: ILinkData, folder: string): string =>
  link.type === 'external' ? link.link : `/${folder}/${link.link}`

const gameLink = (name: string): string => `/games/${name}`

const imageLink = (image?: IImageData): string | undefined => (image ? `/images/${image.link}` : undefined)

const playLink = (link: ILinkData): string => siteLink(link, 'runtimes')

const friendViewLink = (name: string): string => `/friends/${name}`

export { gameLink, imageLink, playLink, friendViewLink }

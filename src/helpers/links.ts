import { IImageData } from '../types/image'
import { ILinkData } from '../types/game-data'

const gameLink = (name: string): string => `/games/${name}`

const imageLink = (image?: IImageData): string | undefined => (image ? `/images/${image.link}` : undefined)

const playLink = (link: ILinkData): string => (link.type === 'external' ? link.link : `/runtimes/${link.link}`)

export { gameLink, imageLink, playLink }

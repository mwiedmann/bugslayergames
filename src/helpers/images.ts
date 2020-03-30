import { IImageData, IImageType } from '../types/image'

export const findImageType = (images: IImageData[], type: IImageType): IImageData | undefined =>
  images.find((i) => i.type === type)

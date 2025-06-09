'use client'

import Image, { ImageProps } from 'next/image'

export default function BaseImage(props: ImageProps) {
  return <Image {...props} />
}

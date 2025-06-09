'use client'

import Image, { ImageProps } from 'next/image'

// Hardcoded sesuai next.config.mjs
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

export default function BaseImage(props: ImageProps) {
  return <Image {...props} src={basePath + props.src} />
}

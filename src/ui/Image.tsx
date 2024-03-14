'use client'

import {fromModule} from '@/utils/styler/Styler'
import {ImageLink} from 'alinea'
import {imageBlurUrl} from 'alinea/ui'
import NextImage, {ImageProps as NextImageProps} from 'next/image'
import {CSSProperties, useMemo} from 'react'
import css from './Image.module.scss'

const styles = fromModule(css)

interface ImageProps extends NextImageProps {}

export const Image: React.FC<
  Omit<ImageProps, 'alt'> & {
    alt?: string
    averageColor?: ImageLink['averageColor']
    focus?: ImageLink['focus']
    thumbHash?: ImageLink['thumbHash']
    title?: ImageLink['title']
  }
> = ({className, averageColor, focus, thumbHash, title, ...props}) => {
  const alt = props?.alt || title || ''
  const blurUrl = useMemo(() => imageBlurUrl({thumbHash}), [thumbHash])

  delete (props as any).blurHeight
  delete (props as any).blurWidth
  delete (props as any).entry
  delete (props as any).extension
  delete (props as any).hash
  delete (props as any).id
  delete (props as any).size
  delete (props as any).type

  if (!props?.src) return null

  if (props.fill) {
    const objectFit: CSSProperties['objectFit'] =
      props.style?.['objectFit'] || 'cover'
    const imageRatio: number = Number(props.width) / Number(props.height)
    const objectFitContain: boolean =
      objectFit === 'contain' && (imageRatio < 1 || imageRatio > 2)
    const objectPosition: CSSProperties['objectPosition'] =
      focus && `${focus.x * 100}% ${focus.y * 100}%`

    return (
      <>
        {blurUrl && objectFitContain && (
          <NextImage
            src={blurUrl}
            fill
            alt="BlurHash"
            style={{objectFit: 'cover'}}
          />
        )}
        <NextImage
          {...props}
          width={undefined}
          height={undefined}
          alt={alt}
          blurDataURL={blurUrl}
          placeholder={blurUrl && !objectFitContain ? 'blur' : undefined}
          className={styles.image.with(className)()}
          style={{
            ...props.style,
            objectFit: objectFitContain ? 'contain' : 'cover',
            objectPosition
          }}
        />
      </>
    )
  }

  return (
    <NextImage
      {...props}
      alt={alt}
      blurDataURL={blurUrl}
      placeholder={blurUrl ? 'blur' : undefined}
      className={styles.image.with(className)()}
    />
  )
}

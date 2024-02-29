import {ImageReference} from 'alinea'
import {Metadata} from 'next'

type dataType = {
  url: string
  title: string
  metadata: {
    title: string
    description: string
    openGraph: {
      title: string
      image: ImageReference
      description: string
    }
  }
}

export default async function getMetadata(
  data: dataType | null
): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL
  const projectName = 'Rit'

  if (!appUrl)
    throw new Error(
      'NEXT_PUBLIC_APP_URL is not defined - copy the .env.local.example file and fill it'
    )

  if (!data) return {title: `Pagina niet gevonden - ${projectName}`}

  const {url, title, metadata} = data
  const metaTitle =
    metadata?.title && metadata?.title !== title
      ? metadata.title
      : `${title} - ${projectName}`

  return {
    metadataBase: new URL(appUrl),
    title: metaTitle,
    description: metadata?.description,
    openGraph: {
      url: appUrl + url,
      type: 'website',
      title: metadata?.openGraph?.title || metaTitle,
      description: metadata?.openGraph?.description || metadata?.description,
      images: [
        metadata?.openGraph?.['image']?.src && {
          url: metadata?.openGraph?.['image'].src,
          width: metadata?.openGraph?.['image'].width,
          height: metadata?.openGraph?.['image'].height
        }
      ]
    }
  }
}

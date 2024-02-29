const icons = {
  IcRoundSearch: {ratio: 1},
  IcArrowDown: {ratio: 1}
}

export type IconType = keyof typeof icons

export const Icon = ({
  icon,
  className,
  mod
}: {
  icon: IconType
  className?: string
  mod?: 'square'
}) => {
  if (!icon) return null

  return (
    <span className={className} style={{display: 'inline-flex'}}>
      <svg
        style={{
          height: '1em',
          width: mod === 'square' ? '1em' : 'auto',
          aspectRatio: Math.floor((icons[icon]?.ratio || 1) * 100) / 100
        }}
      >
        <use href={`/icons.svg#${icon}`} />
      </svg>
    </span>
  )
}

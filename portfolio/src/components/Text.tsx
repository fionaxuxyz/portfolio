export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-medium text-ink">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-2 text-sm leading-6 text-ink/90">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>
          <Inline text={paragraph} />
        </p>
      ))}
    </div>
  )
}

export function SectionHeading({
  index,
  title,
  alternate,
  id,
}: {
  index: string
  title: string
  alternate: string
  id?: string
}) {
  return (
    <header className="mb-6 border-b border-line pb-4 md:mb-8">
      <p className="text-xs font-semibold tracking-[0.12em] text-lilac-deep">{index}</p>
      <h2
        id={id}
        className="mt-2 text-2xl leading-tight font-semibold tracking-[-0.035em] text-ink md:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-2 text-sm tracking-[0.08em] text-muted">{alternate}</p>
    </header>
  )
}

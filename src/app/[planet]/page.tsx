export default function Planet({ params }: { params: { planet: string }}) {
  return (
    <div>
      <h1 className="text-5xl font-bold">{params.planet}</h1>
    </div>
  )
}
export default function GamerProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">@{params.username}</h1>
      <p className="mt-4 text-xl text-zinc-400">Gamer Profile</p>
    </div>
  )
}

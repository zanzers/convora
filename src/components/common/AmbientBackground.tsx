function AmbientBackground() {
  return (
    
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-9500">
        <div className="absolute left-10 top-20 h-72 rounded-full bg-blue-500/20 blur-3xl"/>

        <div className="absolute right-20 top-40 h-95 w-96 rounded-full bg-violet-500/15 blur-3xl" />
        
        <div className="absolute bottom-10 left-1/2 h-80 w-80 -transition-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  )
}

export default AmbientBackground

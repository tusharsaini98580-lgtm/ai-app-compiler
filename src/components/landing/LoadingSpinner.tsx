export default function LoadingSpinner() {

  return (

    <div className="flex items-center justify-center gap-3">

      <div className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce" />

      <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce delay-100" />

      <div className="w-4 h-4 rounded-full bg-purple-400 animate-bounce delay-200" />

    </div>
  );
}
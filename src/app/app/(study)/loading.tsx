export default function Loading() {
  return (
    <div className="page animate-pulse" aria-busy="true" aria-label="Carregando">
      <div className="h-4 w-32 rounded bg-paper-deep" />
      <div className="h-9 w-72 max-w-full rounded-lg bg-paper-deep" />
      <div className="h-48 rounded-3xl bg-paper-deep" />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="h-28 rounded-2xl bg-paper-deep" />
        <div className="h-28 rounded-2xl bg-paper-deep" />
      </div>
    </div>
  );
}

import Main from "./_components/Main";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Main />
      </div>
    </div>
  );
}

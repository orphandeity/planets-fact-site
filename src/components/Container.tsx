export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[375px] px-6 md:max-w-[768px] md:px-10 lg:max-w-[1440px] lg:px-40">
      {children}
    </div>
  );
}

import Footer from "@/components/ui/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow bg-slate-900">
        {children}
      </main>
      <Footer />
    </div>
  );
}
import { Header } from "@/components/header/header";
import CoverArea from "@/components/cover/cover";
import { Offers } from "@/components/offers/offers";
import { Footer } from "@/components/footer/footer";
import { CallFree } from "@/components/call-free/call-free";
import { MainForm } from "@/components/mainForm/mainForm";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<p>Agurde</p>}>
        <CoverArea />
      </Suspense>
      <Suspense fallback={<p>Agurde</p>}>
        <Offers />
      </Suspense>
      <Suspense fallback={<p>Agurde</p>}>
        <MainForm />
      </Suspense>
      <Footer />
      <CallFree />
    </main>
  );
}

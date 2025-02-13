// import Encryption from "@/components/main/Encryption";
import Form from "@/components/main/Form";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        {/* This is the Hero Section */}
        <Hero />
        {/* Some Random Animations */}
        <Form />
      </div>
    </main>
  );
}

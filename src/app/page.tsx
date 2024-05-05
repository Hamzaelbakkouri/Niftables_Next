import NavBarSection from "../components/navBar_container";
import FirstSection from "../components/first_section";
import SecondSection from "../components/second_section";
import ThirdSection from "../components/third_section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBarSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}

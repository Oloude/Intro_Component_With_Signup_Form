import Code from "./components/Code";
import Form from "./components/Form";
import Trial from "./components/Trial";

export default function App() {
  return (
    <main className="font-Poppins min-h-screen p-6 bg-mobile bg-red bg-no-repeat bg-cover lg:bg-desktop">
      <section className="flex flex-col gap-10 max-w-5xl mx-auto lg:flex-row lg:gap-16">
        <Code/>
        <div className="flex flex-col gap-5 lg:basis-1/2">
        <Trial/>
        <Form/>
        </div>
        
      </section>
    </main>
  )
}
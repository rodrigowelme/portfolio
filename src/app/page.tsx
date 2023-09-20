export default function Home() {
  return (
    <main>
      <div className="flex container mx-auto items-center py-16">
        <div className="flex-1 ">
          <h1 className="text-4xl font-semibold">
            Olá, Eu sou o Rodrigo Welme da Paz
            <br /> Desenvolvedor FullStack
          </h1>
        </div>
        <div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-primary after:!w-5 after:!h-5"></li>
            <li data-content="" className="step after:!w-5 after:!h-5 before:!w-2"></li>
            <li data-content="" className="step after:!w-5 after:!h-5 before:!w-2"></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto items-center py-16">
        <h1 className="text-2xl">Services</h1>
        <h1 className="text-[#641AE6] text-5xl font-semibold">Skill-Set</h1>
      </div>

      <div className="flex container mx-auto items-center py-16">
        <div className="flex flex-1 gap-2 justify-items-center">
          <div className="bg-slate-600 w-44 h-44"></div>
          <div className="bg-slate-600 w-44 h-44"></div>
          <div className="bg-slate-600 w-44 h-44"></div>
          <div className="bg-slate-600 w-44 h-44"></div>
          <div className="bg-slate-600 w-44 h-44"></div>
          <div className="bg-slate-600 w-44 h-44"></div>
        </div>
        <div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step step-primary after:!w-5 after:!h-5"></li>
            <li data-content="" className="step after:!w-5 after:!h-5 before:!w-2"></li>
            <li data-content="" className="step after:!w-5 after:!h-5 before:!w-2"></li>
          </ul>
        </div>
      </div>
    </main>
  );
}








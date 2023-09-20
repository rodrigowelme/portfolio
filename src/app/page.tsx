import Card from "@/components/card";
import { GrGithub } from "react-icons/gr";
import { SiPrisma, SiFreelancer } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineAppShortcut } from "react-icons/md";

export default function Home() {
  return (
    <main className="overflow-auto">
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

      <div className="container mx-auto items-center py-10">
        <h1 className="text-2xl">Services</h1>
        <h1 className="text-[#641AE6] text-5xl font-semibold">Skill-Set</h1>
      </div>

      <div className="flex container mx-auto items-center py-10">
        <div className="flex flex-1">
          <div className="flex flex-wrap gap-10 max-w-6xl">
            <Card
              icon={<GrGithub size={50} className="text-[#641AE6]" />}
              title="Git Version Control"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            />
            <Card
              icon={<MdOutlineAppShortcut size={50} className="text-[#641AE6]" />}
              title="App Design"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            />
            <Card
              icon={<SiPrisma size={50} className="text-[#641AE6]" />}
              title="Git Version Control"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            />
            <Card
              icon={<FaServer size={50} className="text-[#641AE6]" />}
              title="Back-end Development"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            />
            <Card
              icon={<TfiWorld size={50} className="text-[#641AE6]" />}
              title="Web Development"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            />
            <Card
              icon={<SiFreelancer size={50} className="text-[#641AE6]" />}
              title="Git Version Control"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            />
          </div>
        </div>
        <div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step  after:!w-5 after:!h-5"></li>
            <li data-content="" className="step step-primary after:!w-5 after:!h-5 before:!w-2"></li>
            <li data-content="" className="step after:!w-5 after:!h-5 before:!w-2"></li>
          </ul>
        </div>
      </div>

      <div className="flex container mx-auto items-center py-16">
        <div className="flex-1">
          <form className="flex flex-col gap-2">
            <h1 className="text-5xl font-semibold text-[#641AE6]">Connect with me</h1>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="off"
              placeholder="E-mail"
              className="input input-bordered max-w-lg"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Message"
              id="message"
              className="textarea textarea-bordered textarea-lg max-w-lg"
            ></textarea>

            <button className="btn btn-primary w-fit">Stay Connected</button>
          </form>
        </div>

        <div>
          <ul className="steps steps-vertical">
            <li data-content="" className="step after:!w-5 after:!h-5"></li>
            <li data-content="" className="step after:!w-5 after:!h-5 before:!w-2"></li>
            <li data-content="" className="step step-primary after:!w-5 after:!h-5 before:!w-2"></li>
          </ul>
        </div>
      </div>
    </main>
  );
}


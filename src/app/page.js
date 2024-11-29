import Image from "next/image";
import { MyButton } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Links } from "./components/Link/Links";

export default function Home() {
  const myName = "Wesley Gabriel";

  return (
    <div className="text-white flex flex-col items-center">
      <main className="w-[95%] lg:max-w-[880px]">
        <header className="flex justify-between items-center my-10">
          <h1 className="text-3xl text-secundaryColor font-bold">Meus links</h1>
          <Image
            width={120}
            height={120}
            alt="icon"
            src={"./logo.svg"}
            className="bg-secundaryColor p-3 rounded-full"
          />
        </header>
        <section className="flex flex-col gap-y-5">
          <div className="relative h-[300px]">
            <Image
              alt="minha foto"
              src={"/pessoa.jpg"}
              className="rounded-2xl"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-secundaryColor text-2xl font-bold">
            Olá, eu sou {myName}
          </p>
          <p className="text-justify">
            Um apaixonado desenvolvedor full stack com uma paixão por criar
            soluções digitais inovadoras. Minha jornada começou na universidade,
            onde me formei em Ciência da Computação, e desde então, tenho
            dedicado minha carreira ao aprimoramento contínuo e à entrega de
            projetos excepcionais.
          </p>
          <MyButton textButton={"Fale comigo!"} />
        </section>

        <section>
          <Card />
        </section>

        <section>
          <Links />
        </section>

        <section className="flex flex-col gap-8 my-8">
          <p className="text-2xl font-bold text-secundaryColor">
            Entre em contato
          </p>
          <p className="text-justify">
            Estou entusiasmado para explorar novas oportunidades e contribuir
            para projetos desafiadores. Se você está buscando um desenvolvedor
            full stack dedicado e apaixonado, estou pronto para ajudar.
          </p>

          <MyButton textButton={"Fale comigo"} />
        </section>
      </main>

      <footer className="bg-gray-900 w-full text-center py-10">
        <p className={"mb-5"}>Feito por {myName}</p>
        <p>Todos os direitos reservados - 2024</p>
      </footer>
    </div>
  );
}

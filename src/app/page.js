import Image from "next/image";
import StorageTextArea from "../components/StorageTextArea";

function Exercise({ name, children }) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Exercício: {name}
      </h2>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="relative p-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
}

function Chapter({ name, children }) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        {name}
      </h2>
      {children}
      <StorageTextArea
        storageKey={name}
        question="Adicione suas anotações aqui"
      ></StorageTextArea>
    </div>
  );
}

function ChapterQuote({ author, children }) {
  return (
    <div>
      <div className="italic p-4 text-justify">
        {children}
        <div className="not-italic text-sm font-bold mt-2">{author}</div>
      </div>
    </div>
  );
}

function QuoteContainer({ children }) {
  return <div className="md:flex md:space-x-3">{children}</div>;
}

function Quote({ author, children, variant = "primary" }) {
  return (
    <div>
      <div
        className={
          "px-4 py-3 mr-2 " + (variant === "primary" ? " text-2xl" : " ")
        }
      >
        {children}
        <div className="not-italic text-sm font-bold mt-2">{author}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">
        <p>Clube do Livro: Como Integrar Fé e Trabalho</p>
        <Image
          src="/feetrabalho.jpg"
          width={100}
          height={100}
          className="mb-8"
          alt="Capa de Livro com fundo vermelho, nome do autor Timothy Keller e título: Como Integrar Fé e Trabalho"
        />
        <Chapter name="1. O design do trabalho">
          <ChapterQuote author="Gênesis 2.1-3,15">
            Assim foram concluídos os céus e a terra, com todos os seus
            elementos. No sétmo dia, Deus já havia completado a obra que fizera;
            nesse dia ele descansou de toda a sua obra. E Deus abençoou e
            santificou o sétmo dia, porque nele descansou de toda a obra que
            havia criado e feito [...] e o SENHOR Deus tomou o homem e o colocou
            no jardim do Éden, para que o homem o cultivasse e guardasse.
          </ChapterQuote>
          <QuoteContainer>
            <Quote author="Ben Witherington">
              “É perfeitamente claro que o excelente plano de Deus compreendia
              os seres humanos sempre trabalhando, ou, mais especificamente,
              vivendo no constante ciclo de trabalho e descanso”
            </Quote>

            <div>
              <Image
                src="/piret-ilver-98MbUldcDJY-unsplash.jpg"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
                className="px-4 py-3 mr-2"
                alt="Uma balança antiga"
              />
              <Quote author="(p41)" variant="secondary">
                “Muitas pessoas cometem o erro de achar que o trabalho é uma
                maldição e que o único meio de encontrar significado para a vida
                está em outra coisa (lazer, família e até mesmo tarefas
                “espirituais”). A Bíblia, como vimos e veremos, expõe a mentira
                dessa ideia. Mas também nos impede de cometer o erro oposto, ou
                seja, de achar que o trabalho é a única atividade humana
                importante e que o resto é um mal necessário”
              </Quote>
            </div>
          </QuoteContainer>
        </Chapter>
        <Divider />
        <Chapter name="2. A dignidade do trabalho">
          <ChapterQuote author={"Gênesis 1.26,27"}>
            E disse Deus: Façamos o homem à nossa imagem, conforme a nossa
            semelhança; e domine sobre os peixes do mar, e sobre as aves dos
            céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil
            que se move sobre a terra. E criou Deus o homem à sua imagem; à
            imagem de Deus o criou; homem e mulher os criou.
          </ChapterQuote>

          <QuoteContainer>
            <Image
              src="/peter-burdon-FmUgZxCIJhc-unsplash.jpg"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              className="px-4 py-3 mr-2"
              alt="5 trabalhadores em uma mina empurrando carros de carga em um trilho"
            />

            <div>
              <Quote author="(p48)">
                “Trabalhos de qualquer natureza, não importa se feitos com as
                mãos ou com a mente, evidenciam nossa dignidade de seres
                humanos, pois refletem em nós a imagem de Deus”
              </Quote>

              <Quote author="(p46)" variant="secondary">
                “Os gregos entendiam que a vida na terra exigia trabalho, porém
                acreditavam que nem todos os trabalhos foram criados iguais.
                [Para eles o] trabalho que usava a mente em vez do corpo era
                mais nobre, menos animalesco. A forma mais elevada de trabalho
                era a mais cognitiva e a menos braçal.”
              </Quote>
            </div>
          </QuoteContainer>
        </Chapter>
        <Divider />
        <Exercise name={"Definindo trabalho"}>
          <StorageTextArea question="Como você define “Trabalho”?" />

          <StorageTextArea question="Quais as caracteristicas de um trabalho significativo/relevante?" />

          <StorageTextArea question="Você acha que o seu trabalho hoje é significativo/revelante? Por quê?" />
        </Exercise>
      </div>
    </div>
  );
}

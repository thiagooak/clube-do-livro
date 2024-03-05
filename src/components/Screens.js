import Image from "next/image";
import StorageTextArea from "@/components/StorageTextArea";
import {
  Chapter,
  ChapterQuote,
  Quote,
  QuoteContainer,
  Divider,
  Exercise,
} from "@/components/Interface";
import { isMeetingEnabled, getNextMeeting } from "@/util";

function NotYet() {
  const [key] = getNextMeeting();
  return (
    <div>
      Ainda não chegamos aqui! Na nossa próxima reunião vamos discutir o
      material disponível{" "}
      <a className="underline" href={`/fe-e-trabalho/${key}`}>
        nesta página
      </a>
    </div>
  );
}

export function One() {
  if (!isMeetingEnabled("1-2")) {
    return <NotYet></NotYet>;
  }

  return (
    <>
      <Chapter name="1. O design do trabalho">
        <ChapterQuote author="Gênesis 2.1-3,15">
          Assim foram concluídos os céus e a terra, com todos os seus elementos.
          No sétmo dia, Deus já havia completado a obra que fizera; nesse dia
          ele descansou de toda a sua obra. E Deus abençoou e santificou o sétmo
          dia, porque nele descansou de toda a obra que havia criado e feito
          [...] e o SENHOR Deus tomou o homem e o colocou no jardim do Éden,
          para que o homem o cultivasse e guardasse.
        </ChapterQuote>
        <QuoteContainer>
          <Quote author="Ben Witherington">
            “É perfeitamente claro que o excelente plano de Deus compreendia os
            seres humanos sempre trabalhando, ou, mais especificamente, vivendo
            no constante ciclo de trabalho e descanso”
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
          semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus,
          e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se
          move sobre a terra. E criou Deus o homem à sua imagem; à imagem de
          Deus o criou; homem e mulher os criou.
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
              “Trabalhos de qualquer natureza, não importa se feitos com as mãos
              ou com a mente, evidenciam nossa dignidade de seres humanos, pois
              refletem em nós a imagem de Deus”
            </Quote>

            <Quote author="(p46)" variant="secondary">
              “Os gregos entendiam que a vida na terra exigia trabalho, porém
              acreditavam que nem todos os trabalhos foram criados iguais. [Para
              eles o] trabalho que usava a mente em vez do corpo era mais nobre,
              menos animalesco. A forma mais elevada de trabalho era a mais
              cognitiva e a menos braçal.”
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
    </>
  );
}

export function Two() {
  if (!isMeetingEnabled("3-4")) {
    return <NotYet></NotYet>;
  }

  return (
    <>
      <Chapter name="3. O trabalho como cultivo">
        <ChapterQuote author="Gênesis 1.28">
          Então Deus os abençoou e lhes disse: Fruticai e multiplicaivos; enchei
          a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do
          céu e sobre todos os animais que rastejam sobre a terra.
        </ChapterQuote>
        <QuoteContainer>
          <Quote author="(p56)">
            Para que haja crescimento espiritual, existe uma Palavra divina a
            ser obedecida. Para que haja desenvolvimento cultural e criativo,
            existe o trabalho físico de cuidar do jardim e a tarefa de dar nomes
            aos animais, que envolve esforço mental e discernimento.
          </Quote>

          <div>
            <Image
              src="/rajesh-ram-HOOKgN_zIY8-unsplash.jpg"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              className="px-4 py-3 mr-2"
              alt="Uma mulher e um homem trabalhando num campo com dois bovinos"
            />
            <Quote author="(p59)" variant="secondary">
              Temos de ser jardineiros que adotam uma postura ativa em suas
              tarefas. Jardineiros não deixam a terra como a encontram. Eles a
              retrabalham para torná-la mais frutífera, para extrair os
              potenciais de crescimento e desenvolvimento do solo. Os
              jardineiros escavam o solo e trabalham nele com um objetivo em
              mente: dispor a matéria-prima do jardim de modo que produza
              alimento, flores e beleza. E esse é o padrão para todo e qualquer
              trabalho. Ele é criativo e assertivo. Dedica-se a trabalhar a
              matéria-prima da criação de Deus de tal forma que ajude o mundo em
              geral e as pessoas em particular a crescer e florescer.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Chapter name="4. O trabalho como serviço">
        <ChapterQuote author={"1 Coríntios 7.17"}>
          Somente viva cada um como o Senhor lhe determinou, cada um como Deus o
          chamou. É isso que ordeno em todas as igrejas.
        </ChapterQuote>

        <QuoteContainer>
          <Image
            src="/arron-choi-fYD54gVXFGM-unsplash.jpg"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="px-4 py-3 mr-2"
            alt="Trabalhador usando marreta em uma construção"
          />

          <div>
            <Quote author="(p71)">
              Até mesmo seus trabalhos aparentemente seculares são um culto a
              Deus e um ato de obediência que agrada a Deus - Martinho Lutero
            </Quote>

            <Quote author="(p65)" variant="secondary">
              Nosso trabalho diário só é um chamado se for reconhecido como
              designação de Deus para servirmos ao próximo. É exatamente assim
              que a Bíblia nos ensina a ver o trabalho.
            </Quote>

            <Quote author="(p76)" variant="secondary">
              “Os cristãos não precisam exercer o ministério diretamente ou
              trabalhar para organizações de caridade para amar o semelhante por
              meio do trabalho.”
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Exercise name={"Influências"}>
        <Image
          src="/influencia.jpg"
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
          className="my-2 mx-auto border rounded-md"
          alt="Trabalhador usando marreta em uma construção"
        />

        <StorageTextArea question="Complete a frase: Eu cresci em uma fazenda/cidade grande/cidade pequena, e por isso aprendi que o trabalho ..." />

        <StorageTextArea question="Complete a frase: Minha Mãe/Pai/Cuidadora trabalhava como ... e por isso aprendi que o trabalho ..." />

        <StorageTextArea question="Complete a frase: Meu pior/melhor trabalho foi/é ..." />

        <StorageTextArea question="Complete a frase: No meu círculo familiar e de amigos o trabalho era visto como ..." />

        <StorageTextArea question="Complete a frase: Quando eu tinha 10 anos de idade eu queria ser ... porque ..." />
      </Exercise>
    </>
  );
}

export function Three() {
  if (!isMeetingEnabled("5-6")) {
    return <NotYet></NotYet>;
  }
  return (
    <>
      <Chapter name="5. O trabalho como cultivo">
        <ChapterQuote author="Gênesis 1.28">
          Então Deus os abençoou e lhes disse: Fruticai e multiplicaivos; enchei
          a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do
          céu e sobre todos os animais que rastejam sobre a terra.
        </ChapterQuote>
        <QuoteContainer>
          <Quote author="Lorem Ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a elit tellus. Morbi semper placerat sapien, mattis dapibus diam
            pulvinar ac. Ut et ornare sapien.
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
            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Chapter name="6. O trabalho como serviço">
        <ChapterQuote author={"Gênesis 1.26,27"}>
          Somente viva cada um como o Senhor lhe determinou, cada um como Deus o
          chamou. É isso que ordeno em todas as igrejas.
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
            <Quote author="(p00)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>

            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Exercise name={"Definindo trabalho"}>TBD</Exercise>
    </>
  );
}

export function Four() {
  if (!isMeetingEnabled("7-8")) {
    return <NotYet></NotYet>;
  }
  return (
    <>
      <Chapter name="7. O trabalho como cultivo">
        <ChapterQuote author="Gênesis 1.28">
          Então Deus os abençoou e lhes disse: Fruticai e multiplicaivos; enchei
          a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do
          céu e sobre todos os animais que rastejam sobre a terra.
        </ChapterQuote>
        <QuoteContainer>
          <Quote author="Lorem Ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a elit tellus. Morbi semper placerat sapien, mattis dapibus diam
            pulvinar ac. Ut et ornare sapien.
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
            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Chapter name="8. O trabalho como serviço">
        <ChapterQuote author={"Gênesis 1.26,27"}>
          Somente viva cada um como o Senhor lhe determinou, cada um como Deus o
          chamou. É isso que ordeno em todas as igrejas.
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
            <Quote author="(p00)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>

            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Exercise name={"Definindo trabalho"}>TBD</Exercise>
    </>
  );
}

export function Five() {
  if (!isMeetingEnabled("9-10")) {
    return <NotYet></NotYet>;
  }
  return (
    <>
      <Chapter name="9. O trabalho como cultivo">
        <ChapterQuote author="Gênesis 1.28">
          Então Deus os abençoou e lhes disse: Fruticai e multiplicaivos; enchei
          a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do
          céu e sobre todos os animais que rastejam sobre a terra.
        </ChapterQuote>
        <QuoteContainer>
          <Quote author="Lorem Ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a elit tellus. Morbi semper placerat sapien, mattis dapibus diam
            pulvinar ac. Ut et ornare sapien.
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
            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Chapter name="10. O trabalho como serviço">
        <ChapterQuote author={"Gênesis 1.26,27"}>
          Somente viva cada um como o Senhor lhe determinou, cada um como Deus o
          chamou. É isso que ordeno em todas as igrejas.
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
            <Quote author="(p00)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>

            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Exercise name={"Definindo trabalho"}>TBD</Exercise>
    </>
  );
}

export function Six() {
  if (!isMeetingEnabled("11-12")) {
    return <NotYet></NotYet>;
  }
  return (
    <>
      <Chapter name="11. O trabalho como cultivo">
        <ChapterQuote author="Gênesis 1.28">
          Então Deus os abençoou e lhes disse: Fruticai e multiplicaivos; enchei
          a terra e sujeitai-a; dominai sobre os peixes do mar, sobre as aves do
          céu e sobre todos os animais que rastejam sobre a terra.
        </ChapterQuote>
        <QuoteContainer>
          <Quote author="Lorem Ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a elit tellus. Morbi semper placerat sapien, mattis dapibus diam
            pulvinar ac. Ut et ornare sapien.
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
            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Chapter name="12. O trabalho como serviço">
        <ChapterQuote author={"Gênesis 1.26,27"}>
          Somente viva cada um como o Senhor lhe determinou, cada um como Deus o
          chamou. É isso que ordeno em todas as igrejas.
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
            <Quote author="(p00)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>

            <Quote author="(p00)" variant="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a elit tellus. Morbi semper placerat sapien, mattis
              dapibus diam pulvinar ac. Ut et ornare sapien.
            </Quote>
          </div>
        </QuoteContainer>
      </Chapter>
      <Divider />
      <Exercise name={"Definindo trabalho"}>TBD</Exercise>
    </>
  );
}

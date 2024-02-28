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

export function One() {
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
  return (
    <>
      <Chapter name="3. O trabalho como cultivo">
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
      <Chapter name="4. O trabalho como serviço">
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

export function Three() {
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

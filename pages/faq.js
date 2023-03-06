import Link from "../src/components/Link";
import PageTitle from '../src/components/PageTitle'

//SSG - Static side generation
//SSR - Server side render
//ISG - Incremental Static Generation

// getStaticSideProps() (roda no build do projeto e nunca mais) reenderiza tudo antes de carregar a página, gerando uma página estatica para o usuário, melhorando o SEO e o tempo de carregamento
// em modo DEV sempre roda em cada acesso

// getServerSideProps() (roda a cada acesso que voce recebe) reenderiza tudo antes de carregar a página melhorando o SEO e o tempo de carregamento
// em modo DEV sempre roda em cada acesso
export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
  return {
    props: {
      faq,
    }, // will be passed to the page component as props
  };
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <PageTitle>
        FAQ Alura Cases Campanha
      </PageTitle>
      <h1>Faq page</h1>
      <Link href="/">home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={answer}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

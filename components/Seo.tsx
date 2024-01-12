import Head from "next/head";

export default function Seo(props: { title: string }) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}

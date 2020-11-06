import Head from "next/head"

export default function CustomHead({ title }) {
  return (
    <Head>
      <title>{title || "SQSP Headless"}</title>
      <meta
        name="description"
        content="A website using Squarespace as a headless CMS."
      />
    </Head>
  )
}

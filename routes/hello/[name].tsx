/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/layouts/Layout.tsx";

export default function Hello(props: PageProps) {
  return (
    <Layout
      title={`Hello ${props.params.name}`}
      description=""
      hasFooter={true}
      hasHeader={true}
    >
      <div>Hello {props.params.name}</div>
    </Layout>
  );
}

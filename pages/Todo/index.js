import React from "react";
import Head from "next/head";
import Layout from "../../component/Layout";
function index() {
  return (
    <>
      <Head>
        <title>ToDoList</title>
      </Head>
      <Layout>{<p>Todo Page</p>}</Layout>
    </>
  );
}

export default index;

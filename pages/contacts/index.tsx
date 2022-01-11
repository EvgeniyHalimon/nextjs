import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { contactType } from "../../types";

type contactTypeProps = {
  contacts: [contactType]
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await fetch(`${process.env.API_HOST}/users`)
  const data = await response.json()

  if (!data){
    return {
      notFound: true
    }
  }

  return{
    props: {
      contacts: data
    }
  }
}

const Contacts: FC<contactTypeProps> = ({contacts}) => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <Heading text="Contacts :" />
    <ul>
        {contacts && contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  </>
);

export default Contacts;
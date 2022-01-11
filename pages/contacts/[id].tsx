import { FC } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import ContactInfo from "../../components/ContactInfo";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const {id} = context.params
  const response = await fetch(`${process.env.API_HOST}/users/${id}`)
  const data = await response.json()

  if (!data){
    return {
      notFound: true
    }
  }

  return{
    props: {
      contact: data
    }
  }
}

const Contact: FC<contactTypeProps> = ({contact}) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact}/>
  </>
);

export default Contact;
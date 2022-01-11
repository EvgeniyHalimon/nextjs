import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async(context) => {
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

const Contact = ({contact}) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact}/>
  </>
);

export default Contact;
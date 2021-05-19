import { GetStaticProps, GetStaticPaths/*, GetServerSideProps*/ } from 'next'
import Layout from "@components/Layout";

function Home(){
    return(
       <Layout>
           <h1>Home</h1>
       </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }

export default Home
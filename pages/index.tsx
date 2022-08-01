import type { NextPage } from "next";
import Image from "next/image";
import { Table } from "../components/Table/Table";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { isLoading, isError, data, error, refetch } = trpc.useQuery([
    "person.getAll",
  ]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {data && (
          <Table
            data={data.people}
            columns={[
              {
                title: "First Name",
                field: "firstName",
                Cell({ entry: { firstName } }) {
                  return <span>{firstName}</span>;
                },
              },
              {
                title: "Last Name",
                field: "lastName",
              },
              {
                title: "Age",
                field: "dateOfBirth",
                Cell({ entry: { dateOfBirth } }) {
                  return (
                    <span>
                      {new Date().getFullYear() -
                        new Date(dateOfBirth).getFullYear()}
                    </span>
                  );
                },
              },
            ]}
          />
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

import type React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="mb-4 text-2xl font-bold">
          Welcome to the Responsive Navigation Layout
        </h1>
        <p>
          Working
        </p>
      </div>
    </Layout>
  );
};

export default Home;

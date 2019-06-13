import Layout from "../components/Layout";
import Home from "../components/Home/Home";

function index() {
  return (
    <Layout
      title="Reservations"
      description="Look at all of these awesome reservations!"
    >
      <Home />
    </Layout>
  );
}

export default index;

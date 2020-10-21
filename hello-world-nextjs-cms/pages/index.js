import { LoadingComponent } from "../components/LoadingComponent";
import { Card } from "../components/Card";

export default function App(props) {
  return (
    <div className="page-wrapper with-navbar">
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            {props.data ? (
              props.data.map((x) => <Card item={x} />)
            ) : (
              <LoadingComponent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/products");
//   const data = await res.json();

//   return { props: { data } };
// }

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:1337/products");
//   const data = await res.json();

//   return { props: { data } };
// }

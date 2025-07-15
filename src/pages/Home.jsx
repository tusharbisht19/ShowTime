import { Header } from "../components/Header.jsx";
function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full z-10">
        <Header />
      </div>
      <div>
        <img
          className="w-full absolute h-screen object-cover top-0 left-0 z-0"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
          alt="movie images"
        />
      </div>
    </div>
  );
}
export { Home };

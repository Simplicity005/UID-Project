import Navbar from "./Navbar";

export default function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

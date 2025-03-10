import { Footer, Header } from "../../../shared";
import {
  AdBanner,
  Blog,
  Description,
  Hero,
  Services,
  Universities,
} from "../../components";

export function Home() {
  return (
    <div>
      <AdBanner />
      <Header />
      <Hero />
      <Description />
      <Services />
      <Universities />
      <Blog />
      <Footer />
    </div>
  );
}

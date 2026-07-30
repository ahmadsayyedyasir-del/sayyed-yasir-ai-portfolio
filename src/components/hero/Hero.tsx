import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

      <HeroBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>
      </Container>

    </section>
  );
};

export default Hero;
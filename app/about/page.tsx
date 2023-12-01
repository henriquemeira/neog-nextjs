import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre"
        description="A Plataforma NeoG é uma solução de software abrangente projetada para otimizar a gestão e potencializar a eficiência operacional em ambientes empresariais. Desenvolvido com precisão e inovação, o NeoG é uma ferramenta versátil que oferece uma gama de funcionalidades integradas, destacando-se como um parceiro indispensável para organizações que buscam excelência em suas operações."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

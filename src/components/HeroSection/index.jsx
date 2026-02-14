import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroContent,
  ProfileImage,
  MainTitle,
  TechStack,
  SubTitle,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
  SocialLinksSection,
  SocialLinksTitle,
  SocialLinksContainer,
  SocialLink,
  AvailabilityBadge,
  TrustLine,
} from "./HeroStyle";

import HeroImg from "../../images/HeroImage.jpg";
import { Bio } from "../../data/constants";
import { socialLinks } from "../../data/socialLinks";

const HeroSection = () => {
  const profileName = Bio?.name || "Profile";

  return (
    <section id="about" aria-label="About section">
      <HeroContainer>
        <HeroBg aria-hidden="true">
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          <HeroContent>
            <ProfileImage src={HeroImg} alt={profileName} loading="lazy" />

            {/* Freelance & Job positioning */}
            <AvailabilityBadge>
              Open for Full-Time Roles & Freelance Projects
            </AvailabilityBadge>

            <MainTitle>Full-Stack MERN & Next.js Developer</MainTitle>

            <TechStack>
              Next.js • React • Node.js • Express • MongoDB • APIs • GCP • CI/CD
            </TechStack>

            <SubTitle>
              I help startups and businesses build fast, SEO-friendly web apps,
              dashboards, CRMs, and automations — with clean code, scalable
              architecture, and reliable deployments.
            </SubTitle>

            <ButtonContainer>
              {/* Main CTA */}
              <PrimaryButton href="#contact">Get in Touch →</PrimaryButton>

              {/* Resume Download */}
              <SecondaryButton 
                href={Bio.resume} 
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume 📄
              </SecondaryButton>

              {/* Projects CTA */}
              <SecondaryButton href="#projects">See Projects</SecondaryButton>

              {/* Optional: WhatsApp CTA (uncomment and add your number in Bio.whatsapp)
              <SecondaryButton
                href={Bio.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Me 💬
              </SecondaryButton>
              */}
            </ButtonContainer>

            <StatsContainer>
              <StatItem>
                <StatNumber>50+</StatNumber>
                <StatLabel>Projects Delivered</StatLabel>
              </StatItem>

              <StatItem>
                <StatNumber>10K+</StatNumber>
                <StatLabel>Daily Active Users</StatLabel>
              </StatItem>

              <StatItem>
                <StatNumber>2+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
            </StatsContainer>

            <SocialLinksSection>
              <SocialLinksTitle>Connect with me</SocialLinksTitle>

              <SocialLinksContainer>
                {Array.isArray(socialLinks) &&
                  socialLinks.map((link) => {
                    const Icon = link?.icon;

                    // safer key (avoid index)
                    const key = link?.name || link?.url;

                    // if icon missing, don't render broken link
                    if (!link?.url || !Icon) return null;

                    return (
                      <SocialLink
                        key={key}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name || "Social link"}
                        title={link.name || "Social link"}
                      >
                        <Icon />
                      </SocialLink>
                    );
                  })}
              </SocialLinksContainer>
            </SocialLinksSection>
          </HeroContent>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
};

export default HeroSection;

import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  min-height: 100vh;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 960px) {
    padding-top: 60px;
  }

  @media (max-width: 640px) {
    padding-top: 40px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 2;
`;

/* ✅ NEW: Freelance availability badge */
export const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-bottom: 6px;

  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary}40;
  background: ${({ theme }) => theme.card_light};

  box-shadow: 0 10px 30px ${({ theme }) => theme.primary}14;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 16px ${({ theme }) => theme.primary};
  }

  @media (max-width: 640px) {
    font-size: 13px;
    padding: 9px 14px;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};
  object-fit: cover;
  box-shadow: 0 0 30px ${({ theme }) => theme.primary}50;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 640px) {
    width: 120px;
    height: 120px;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  text-align: center;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 44px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const TechStack = styled.h2`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.primary};
  line-height: 1.3;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 960px) {
    font-size: 28px;
  }

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 16px 0 6px 0;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 760px;

  @media (max-width: 960px) {
    font-size: 16px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 1.5;
  }
`;

/* ✅ NEW: Trust line under subtitle */
export const TrustLine = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  opacity: 0.95;

  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 26px 0;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 12px;
  }
`;

export const PrimaryButton = styled.a`
  appearance: button;
  text-decoration: none;
  padding: 16px 36px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.primary}50;
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
`;

export const SecondaryButton = styled.a`
  appearance: button;
  text-decoration: none;
  padding: 16px 36px;
  color: ${({ theme }) => theme.primary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.primary}30;
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 60px;
  margin: 40px 0;
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.text_secondary}30;

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StatNumber = styled.h3`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

export const StatLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const SocialLinksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

export const SocialLinksTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  text-transform: lowercase;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.white};
    transform: translateY(-3px);
    box-shadow: 0 5px 20px ${({ theme }) => theme.primary}50;
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

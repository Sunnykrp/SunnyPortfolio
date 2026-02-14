import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.card_light};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 800px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const SocialButton = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}80);
    z-index: -1;
    transition: all 0.5s ease;
  }

  &:hover:before {
    left: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const AvailabilityText = styled.p`
  text-align: center;
  margin-top: 4rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  
  span {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-top: 3rem;
  }
`;

const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
    username: 'Sunnykrp',
    url: Bio.github,
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    username: 'sunny-kumar',
    url: Bio.linkedin,
  },
  {
    name: 'Twitter',
    icon: <XIcon />,
    username: 'sunnykrp3',
    url: Bio.twitter,
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    username: '_mr_sunny_28',
    url: Bio.insta,
  },
  {
    name: 'Telegram',
    icon: <TelegramIcon />,
    username: 'sunnykumar',
    url: '#',
  },
  {
    name: 'Email',
    icon: <EmailIcon />,
    username: 'sunnykrp3@gmail.com',
    url: 'mailto:sunnykrp3@gmail.com',
  },
];

function Footer() {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <Title>Get in Touch</Title>

        <SocialGrid>
          {socialLinks.map((link, index) => (
            <SocialButton
              key={index}
              href={link.url}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              <IconWrapper>{link.icon}</IconWrapper>
              <ButtonText>{link.username}</ButtonText>
            </SocialButton>
          ))}
        </SocialGrid>

        <AvailabilityText>
          <span>Open to opportunities</span> and collaborations.
        </AvailabilityText>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
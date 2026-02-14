import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h3`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  margin: 16px 0 8px 0;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0 0 40px 0;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1350px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(20, 25, 35, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  border-left: 3px solid ${({ accentcolor }) => accentcolor || '#3B82F6'};

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      ${({ accentcolor }) => accentcolor || '#3B82F6'},
      transparent 50%,
      ${({ accentcolor }) => accentcolor || '#3B82F6'}
    );
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ accentcolor }) => accentcolor || '#3B82F6'};
    box-shadow: 
      0 8px 30px rgba(0, 0, 0, 0.5),
      0 0 20px ${({ accentcolor }) => `${accentcolor}40` || 'rgba(59, 130, 246, 0.25)'};
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    padding-left: 1.25rem;
    gap: 0.65rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0;
`;

const ServiceNumber = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ color }) => color || '#3B82F6'};
  opacity: 0.6;
  letter-spacing: 1px;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: ${({ color }) => color || '#3B82F6'};
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 20px;
  text-transform: capitalize;
  width: fit-content;
  box-shadow: 0 2px 8px ${({ color }) => `${color}50` || 'rgba(59, 130, 246, 0.3)'};
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.25rem 0;
`;

const IconWrapper = styled(motion.div)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: all 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.9);
  }

  &:hover {
    transform: scale(1.15) rotate(5deg);
    
    img {
      filter: brightness(1.1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  flex-grow: 1;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const LearnMoreLink = styled.button`
  color: ${({ theme }) => theme.primary};
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  
  &:hover {
    gap: 8px;
    opacity: 0.8;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: rgba(23, 29, 39, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 700px;
  width: 100%;
  position: relative;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: all 0.2s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    transform: rotate(90deg);
  }
`;

const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 1rem 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const ModalIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

const ModalIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.95);
  }
`;

const ModalDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin: 1.5rem 0 0 0;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      y: -3,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Container id="services">
      <Wrapper>
        <Title>Services</Title>
        <Subtitle>What I Do</Subtitle>
        <Description>How I Help Businesses Build Products</Description>
        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              variants={cardVariants}
              accentcolor={service.categoryColor}
              whileHover={{ y: -5 }}
            >
              <CardHeader>
                <ServiceNumber color={service.categoryColor}>
                  {String(index + 1).padStart(2, '0')}
                </ServiceNumber>
                <CategoryBadge color={service.categoryColor}>{service.category}</CategoryBadge>
              </CardHeader>
              <IconsContainer>
                {service.icons.map((icon, idx) => (
                  <IconWrapper
                    key={idx}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <img src={icon} alt={`${service.title} icon ${idx + 1}`} />
                  </IconWrapper>
                ))}
              </IconsContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LearnMoreLink onClick={() => openModal(service)}>
                Learn More →
              </LearnMoreLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Wrapper>

      {selectedService && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CategoryBadge color={selectedService.categoryColor}>
                {selectedService.category}
              </CategoryBadge>
              <CloseButton onClick={closeModal}>×</CloseButton>
            </ModalHeader>
            <ModalTitle>{selectedService.title}</ModalTitle>
            <ModalIconsContainer>
              {selectedService.icons.map((icon, idx) => (
                <ModalIconWrapper key={idx}>
                  <img src={icon} alt={`${selectedService.title} icon ${idx + 1}`} />
                </ModalIconWrapper>
              ))}
            </ModalIconsContainer>
            <ModalDescription>{selectedService.detailedDescription}</ModalDescription>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Services;

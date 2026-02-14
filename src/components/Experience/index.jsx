import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { experiences } from '../../data/experiences';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 60px;
  position: relative;
`;

const TimelineWrapper = styled.div`
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 40px 0;
  position: relative;
  
  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const TimelineDateWrapper = styled.div`
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  z-index: 40;
  
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    width: 100%;
    margin-bottom: 16px;
  }
`;

const TimelineDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.card};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TimelineDate = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 16px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 0;
  }
`;

const TimelineContent = styled(motion.div)`
  flex: 1;
  padding-left: 40px;
  position: relative;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 100px;
  top: 0;
  width: 2px;
  height: ${props => props.height}px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.text_secondary}40 10%,
    ${({ theme }) => theme.text_secondary}40 90%,
    transparent 100%
  );
  overflow: hidden;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TimelineProgress = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.primary}80,
    transparent
  );
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: ${({ theme }) => theme.primary}50;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg};
  object-fit: contain;
  padding: 4px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ExperienceInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Role = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Company = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Skill = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary}15;
  padding: 6px 12px;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`;

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect();
      setLineHeight(rect.height - 40);
    }
  }, [lineRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Professional experience developing scalable web applications and collaborating with cross-functional teams across multiple projects.
        </Desc>

        <TimelineContainer ref={containerRef}>
          <TimelineWrapper ref={lineRef}>
            <TimelineLine height={lineHeight}>
              <TimelineProgress style={{ height: progressHeight }} />
            </TimelineLine>

            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineDateWrapper>
                  <TimelineDot />
                  <TimelineDate>{experience.date}</TimelineDate>
                </TimelineDateWrapper>

                <TimelineContent
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ExperienceCard
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ExperienceHeader>
                      <CompanyLogo src={experience.img} alt={experience.company} />
                      <ExperienceInfo>
                        <Role>{experience.role}</Role>
                        <Company>@ {experience.company}</Company>
                      </ExperienceInfo>
                    </ExperienceHeader>

                    <Description>{experience.desc}</Description>

                    {experience.skills && (
                      <SkillsContainer>
                        {experience.skills.map((skill, idx) => (
                          <Skill key={idx}>{skill}</Skill>
                        ))}
                      </SkillsContainer>
                    )}
                  </ExperienceCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineWrapper>
        </TimelineContainer>
      </Wrapper>
    </Container>
  );
};

export default Experience;
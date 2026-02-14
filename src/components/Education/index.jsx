import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { education } from '../../data/constants';
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
  text-align: left;
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
  text-align: left;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-start' : 'flex-end'};
  padding: 40px 0;
  position: relative;
  width: 100%;
  
  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 968px) {
    justify-content: flex-end;
    padding: 30px 0;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 2px;
  height: ${props => props.height}px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.primary}40 5%,
    ${({ theme }) => theme.primary}40 95%,
    transparent 100%
  );
  overflow: hidden;
  
  @media (max-width: 968px) {
    left: 20px;
    transform: none;
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

const TimelineDot = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  border: 4px solid ${({ theme }) => theme.bg};
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}20;
  
  @media (max-width: 968px) {
    left: 20px;
    transform: translateX(-50%);
  }
`;

const TimelineContent = styled(motion.div)`
  width: calc(50% - 40px);
  position: relative;
  
  @media (max-width: 968px) {
    width: calc(100% - 60px);
    margin-left: 40px;
  }
`;

const TimelineConnector = styled.div`
  position: absolute;
  top: 60px;
  width: 30px;
  height: 2px;
  background: ${({ theme }) => theme.primary}40;
  ${props => props.align === 'right' ? 'left: -30px;' : 'right: -30px;'}
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(20, 25, 35, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  position: relative;
  text-align: left;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(133, 76, 230, 0.3);
    border-color: ${({ theme }) => theme.primary}50;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const EducationTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const DateBadge = styled.span`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 8px ${({ theme }) => theme.primary}50;
`;

const GradeBadge = styled.span`
  background: ${({ theme }) => theme.primary}15;
  color: ${({ theme }) => theme.primary};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #000;
  object-fit: contain;
  padding: 4px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const EducationInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const School = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Degree = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Education = () => {
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
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          Academic foundation and qualifications that support my technical expertise and professional development.
        </Desc>

        <TimelineContainer ref={containerRef}>
          <TimelineWrapper ref={lineRef}>
            <TimelineLine height={lineHeight}>
              <TimelineProgress style={{ height: progressHeight }} />
            </TimelineLine>

            {education.map((edu, index) => {
              const isRight = index % 2 === 0;
              
              return (
                <TimelineItem key={edu.id} align={isRight ? 'right' : 'left'}>
                  <TimelineDot
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  />
                  
                  <TimelineContent
                    initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TimelineConnector align={isRight ? 'right' : 'left'} />
                    <EducationCard
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <EducationTop>
                        <DateBadge>{edu.date}</DateBadge>
                        <GradeBadge>Grade: {edu.grade}</GradeBadge>
                      </EducationTop>

                      <EducationHeader>
                        <Logo src={edu.img} alt={edu.school} />
                        <EducationInfo>
                          <School>{edu.school}</School>
                          <Degree>{edu.degree}</Degree>
                        </EducationInfo>
                      </EducationHeader>

                      <Description>{edu.desc}</Description>
                    </EducationCard>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </TimelineWrapper>
        </TimelineContainer>
      </Wrapper>
    </Container>
  );
};

export default Education;
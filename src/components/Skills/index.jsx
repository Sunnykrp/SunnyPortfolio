import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { skills } from '../../data/constants'

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
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 550px;
  background: rgba(20, 25, 35, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(23, 92, 230, 0.15);
  border-radius: 16px;
  padding: 24px 32px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      #854CE6,
      transparent 50%,
      #854CE6
    );
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #854CE6;
    box-shadow: 
      0 8px 30px rgba(133, 76, 230, 0.3),
      0 0 20px rgba(133, 76, 230, 0.2);
  }

  &:hover::before {
    opacity: 0.15;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 24px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 20px;
  }
`

const SkillTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #854CE6, #7c3aed);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 28px;
`

const SkillItem = styled(motion.div)`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(133, 76, 230, 0.4);
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: rgba(133, 76, 230, 0.05);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    background: rgba(133, 76, 230, 0.15);
    border-color: #854CE6;
    box-shadow: 0 4px 12px rgba(133, 76, 230, 0.25);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
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

  const itemVariants = {
    hover: {
      y: -3,
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Core competencies developed through production applications serving 10,000+ users daily.
        </Desc>
        <SkillsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              variants={cardVariants}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem
                    key={idx}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
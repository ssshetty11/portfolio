"use client";

import React from 'react';
import { Heading, Text, Flex, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "SQL", "HTML/CSS", "C++", "C", "System Verilog"]
  },
  {
    category: "Developer Tools",
    skills: [
      "VS Code", "Jupyter Notebook", "Google Colab", "Git", "QUCS", 
      "Xilinx vivado", "Ripes Simulation", "Matlab", "Mentor Graphic Tools", 
      "Wireshark", "Cisco Packet tracer", "GNS3"
    ]
  },
  {
    category: "Frameworks and Libraries",
    skills: [
      "ReactJs", "Bootstrap", "Tailwind", "NodeJs", "Express", 
      "jQuery", "Shadcn", "NextJs"
    ]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Soft Skills",
    skills: ["Critical Thinking", "Problem Solving", "Teamwork", "Communication"]
  },
  {
    category: "Hobbies",
    skills: ["Reading books", "Studying financial literature", "Sports", "Playing mobile games"]
  }
];

export default function Skills() {
  return (
    <Flex
      fillWidth paddingTop="l" paddingX="l"
      direction="column" alignItems="center" flex={1}>
      
      {/* Navigation Bar */}
      <Flex 
        fillWidth 
        maxWidth={68} 
        marginBottom="l"
        justifyContent="space-between"
        alignItems="center">
        <Link href="/">
          <Text
            variant="body-strong-s"
            onBackground="neutral-strong"
            style={{ 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
            ← Back to Home
          </Text>
        </Link>

        <Heading
          wrap="balance"
          variant="display-strong-s">
          <LetterFx trigger="instant">
            My Skills
          </LetterFx>
        </Heading>
      </Flex>

      {/* Skills Grid */}
      <Flex
        position="relative"
        as="section"
        fillWidth
        maxWidth={68}
        direction="column"
        gap="l">
        
        {skillCategories.map((category, index) => (
          <Flex
            key={index}
            direction="column"
            padding="l"
            background="neutral-medium"
            radius="m"
            gap="m">
            <Heading variant="display-strong-s">
              <LetterFx trigger="instant">
                {category.category}
              </LetterFx>
            </Heading>
            <Flex wrap={true} gap="m">
              {category.skills.map((skill, skillIndex) => (
                <Text
                  key={skillIndex}
                  variant="body-default-m"
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--color-background-neutral-strong)',
                    borderRadius: '0.5rem',
                  }}>
                  <LetterFx trigger="instant">
                    {skill}
                  </LetterFx>
                </Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
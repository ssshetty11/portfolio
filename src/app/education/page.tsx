"use client";

import React from 'react';
import { Heading, Text, Flex, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

const educationData = [
  {
    institution: "PES University, Bengaluru",
    degree: "B.Tech in Electronics and Communication Engineering",
    duration: "2021 - 2025",
    details: [
      "CGPA: 7.98 in ECE, 8.00 in Computer Science (Minors)",
      "Active participation in technical events: Silicon Rush '22, Samarpana '22, Aatmatrisha '23, Hackezee '23",
      "Core member of multiple technical clubs",
      "Key skills: Web Development, Python, SQL, Data Structures, Machine Learning, C++",
      "Developed strong foundation in both software development and electronics"
    ]
  },
  {
    institution: "BASE PU College, Hubballi",
    degree: "Pre-University (Science, 12th Grade)",
    duration: "2019 - 2021",
    details: [
      "Percentage: 98.5%",
      "Jee Mains: 91.8 Percentile, KCET: 2811, NEET 493",
      "Participated in inter-college basketball tournaments",
      "Focused on academic excellence while maintaining active sports involvement",
      "Skills developed: Team Leadership, Communication, Scientific Aptitude"
    ]
  },
  {
    institution: "Parivarthan Gurukul Heritage, Hubballi",
    degree: "ICSE (Class X)",
    duration: "2019",
    details: [
      "Percentage: 93.8%",
      "Consistently achieved first-class results throughout schooling",
      "Represented school in inter-school sports competitions (Basketball, Kabaddi)",
      "Developed strong foundation in academics and extracurricular activities",
      "Skills gained: Teamwork, Discipline, Leadership"
    ]
  }
];

export default function Education() {
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
          <span className="font-code">
            <LetterFx trigger="instant">
              Education
            </LetterFx>
          </span>
        </Heading>
      </Flex>

      {/* Education Grid */}
      <Flex
        position="relative"
        as="section"
        fillWidth
        maxWidth={68}
        direction="column"
        gap="l">
        
        {educationData.map((edu, index) => (
          <Flex
            key={index}
            direction="column"
            padding="l"
            background="neutral-medium"
            radius="m"
            gap="m">
            <Heading variant="display-strong-m">{edu.institution}</Heading>
            <Text variant="body-strong-m">
              {edu.degree}
            </Text>
            <Text variant="body-default-m">
              {edu.details.map((detail, idx) => (
                <div key={idx}><span className="font-code">
                <LetterFx trigger="instant">
                {detail}
                </LetterFx>
              </span></div>
              ))}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-strong">
              
              <span className="font-code">
                <LetterFx trigger="instant">
                  {edu.duration}
                </LetterFx>
              </span>
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
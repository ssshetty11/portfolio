"use client";

import React from 'react';
// import { Heading, Text, Flex, Grid } from '@/once-ui/components';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Education() {
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
									<LetterFx
										trigger="instant">
										My Education
									</LetterFx>
								</span>
							</Heading>

        {/* Empty div for spacing balance */}
        <div style={{ width: '100px' }} />
      </Flex>

      {/* Main Content */}
      <Flex
        position="relative"
        as="section" overflow="hidden"
        fillWidth minHeight="0" maxWidth={68}
        direction="column" alignItems="center" flex={1}>

        {/* Education Grid */}
        <Grid
          gap="l"
          columns="1fr"
          fillWidth>
          {educationData.map((edu, index) => (
            <Flex
              key={index}
              radius="l"
              border="neutral-medium"
              borderStyle="solid-1"
              direction="column"
              padding="l"
              gap="m">
              <Flex direction="column" gap="s">
                <Text variant="heading-strong-m" onBackground="neutral-strong">
                  {edu.institution}
                </Text>
                <span className="font-code">
									<LetterFx
										trigger="instant">
										{edu.degree}
									</LetterFx>
								</span>
                <Text 
                  variant="body-default-s" 
                  onBackground="neutral-weak"
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-background-neutral-weak)',
                    width: 'fit-content'
                  }}>
                  {edu.duration}
                </Text>
              </Flex>
              <Flex direction="column" gap="s">
                {edu.details.map((detail, idx) => (
                  <Text
                    key={idx}
                    variant="body-default-s"
                    onBackground="neutral-medium"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                    <span style={{ color: 'var(--color-text-neutral-strong)' }}>•</span>
                    
                    <span className="font-code">
									<LetterFx
										trigger="instant">
										{detail}
									</LetterFx>
								</span>
                  </Text>
                ))}
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
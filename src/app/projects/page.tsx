"use client";

import React from 'react';
import { Heading, Text, Flex, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

const projects = [
  {
    title: "Swipe Card- Automated Data Extraction and Invoice Management",
    description: "Developed a React application for automating invoice data extraction and management using AI, supporting file uploads (Excel, PDF, images) and real-time synchronization via Redux. Organized data into Invoices, Products, and Customers tabs with robust validation and error handling.",
    tech: "React, Redux, Google Gemini API, deployed on Netlify",
    liveLink: "https://simple-payment.netlify.app/",
  },
  {
    title: "Insightfulink",
    description: "Insightful Ink is a dynamic web application dedicated to empowering PES teachers in managing their publications with convenience and efficiency. Teachers can easily create, edit, update, and delete their publications.",
    tech: "NextJs, Tailwind CSS, JavaScript",
    liveLink: "https://insightfulink.vercel.app/",
  },
  {
    title: "Hindi Handwritten Digit Recognition",
    description: "A python implementation of the K-Nearest Neighbors (KNN) algorithm for recognizing handwritten digits or characters. The project demonstrates the simplicity and effectiveness of the KNN algorithm in classifying images based on their similarities to a set of labeled examples.",
    tech: "KNN, Python",
    githubLink: "https://github.com/ssshetty11/Hindi_Handwritten_Digit_recognition",
  },
  {
    title: "NEXUS",
    description: "The Nexus Club website is a dynamic and interactive platform tailored specifically for the Nexus Club at PES University. The website is designed to enhance the overall experience of club members by providing a user-friendly interface and robust functionality. Whether it's staying updated on club activities, participating in discussions, or accessing important resources, the Nexus Club website is your go-to platform for all things Nexus.",
    tech: "NextJs, Tailwind, shadcn-ui",
    liveLink: "https://nexus-pes.vercel.app/",
  }
];

export default function Projects() {
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
              My Projects
            </LetterFx>
          </span>
        </Heading>
      </Flex>

      {/* Projects Grid */}
      <Flex
        position="relative"
        as="section"
        fillWidth
        maxWidth={68}
        direction="column"
        gap="l">
        
        {projects.map((project, index) => (
          <Flex
            key={index}
            direction="column"
            padding="l"
            background="neutral-medium"
            radius="m"
            gap="m">
            <Heading variant="display-strong-m">{project.title}</Heading>
            <Text variant="body-default-m">
              
              <span className="font-code">
            <LetterFx trigger="instant">
            {project.description}
            </LetterFx>
          </span>
            </Text>
            <Text variant="body-default-s" onBackground="neutral-strong">
              
              <span className="font-code">
            <LetterFx trigger="instant">
            Technologies: {project.tech}
            </LetterFx>
          </span>
            </Text>
            <Flex gap="m">
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank">
                  <Text
                    variant="body-strong-s"
                    onBackground="neutral-strong"
                    style={{ textDecoration: 'underline' }}>
                    GitHub
                  </Text>
                </Link>
              )}
              {project.liveLink && (
                <Link href={project.liveLink} target="_blank">
                  <Text
                    variant="body-strong-s"
                    onBackground="neutral-strong"
                    style={{ textDecoration: 'underline' }}>
                    Live Demo
                  </Text>
                </Link>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
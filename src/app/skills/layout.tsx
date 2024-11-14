import React from 'react';
import { Metadata } from 'next';
import { Flex } from '@/once-ui/components';

export const metadata: Metadata = {
  title: 'Skills | Sanchay Shetty',
  description: 'Explore my technical skills in frontend development, including React, Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'Skills | Sanchay Shetty',
    description: 'Explore my technical skills in frontend development, including React, Next.js, TypeScript, and modern web technologies.',
  },
  keywords: [
    'Frontend Development',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Development Skills',
    'UI/UX',
    'Technical Skills'
  ],
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      as="main"
      direction="column"
      flex={1}
      fillWidth
      fillHeight
      background="neutral-weak"
      style={{
        backdropFilter: 'blur(var(--static-space-1))'
      }}>
      {children}
    </Flex>
  );
}
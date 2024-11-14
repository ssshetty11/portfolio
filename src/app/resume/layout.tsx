import React from 'react';
import { Metadata } from 'next';
import { Flex } from '@/once-ui/components';

export const metadata: Metadata = {
  title: 'Resume | Sanchay Shetty',
  description: 'View my professional experience, education, and skills. Frontend Developer with expertise in React, Next.js, and TypeScript.',
  openGraph: {
    title: 'Resume | Sanchay Shetty',
    description: 'View my professional experience, education, and skills. Frontend Developer with expertise in React, Next.js, and TypeScript.',
    images: [{
      url: '/images/resume.png',
      width: 1200,
      height: 630,
      alt: 'Sanchay Shetty Resume'
    }],
  },
  keywords: ['Frontend Developer Resume', 'React Developer', 'Web Development', 'Software Engineer', 'PES University'],
};

export default function ResumeLayout({
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

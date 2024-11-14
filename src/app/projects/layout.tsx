import React from 'react';
import { Metadata } from 'next';
import { Flex } from '@/once-ui/components';

export const metadata: Metadata = {
  title: 'Projects | Sanchay Shetty',
  description: 'Explore my portfolio of web development projects. Featured work includes React applications, Next.js websites, and TypeScript solutions.',
  openGraph: {
    title: 'Projects | Sanchay Shetty',
    description: 'Explore my portfolio of web development projects. Featured work includes React applications, Next.js websites, and TypeScript solutions.',
    images: [{
      url: '/images/project.png',
      width: 1200,
      height: 630,
      alt: 'Sanchay Shetty Projects'
    }],
  },
  keywords: ['React Projects', 'Next.js Portfolio', 'Frontend Development', 'Web Applications', 'TypeScript Projects']
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      fillWidth
      fillHeight
      background="neutral-weak">
      {children}
    </Flex>
  );
} 

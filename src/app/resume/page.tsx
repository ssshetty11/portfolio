"use client";

import React from 'react';
import { Heading, Text, Flex, Button, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Resume() {
  const handleDownload = () => {
    const resumeUrl = '/SanchayShetty_resume.pdf';
    window.open(resumeUrl, '_blank');
  };

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
										My Resume
									</LetterFx>
								</span>
							</Heading>

        <Button
          variant="primary"
          onClick={handleDownload}>
          Download PDF
        </Button>
      </Flex>

      {/* Resume Display */}
      <Flex
        position="relative"
        as="section"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}>
        <iframe
          src="/SanchayShetty_resume.pdf#view=FitH"
          style={{
            width: '100%',
            height: 'calc(100vh - 150px)',
            border: 'none',
            borderRadius: '8px',
          }}
        />
      </Flex>
    </Flex>
  );
}

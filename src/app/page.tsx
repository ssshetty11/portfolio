"use client";

import React from 'react';
import Image from 'next/image';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

const INTRODUCTION = (
	<>
		Final-year undergraduate at{" "}
		<span className="brand-on-background-medium">PES University</span>
	</>
);

export default function Home() {
	const links = [
		{
			href: "/education",
			title: "Education",
			description: "Academic journey from PGS to PES University, showcasing achievements and growth.",
		},
		{
			href: "/projects",
			title: "Projects",
			description: "Full-stack applications and innovative development projects showcasing problem-solving skills.",
		},
		{
			href: "/skills",
			title: "Skills",
			description: "Proficiency in modern web technologies, programming languages, and development tools.",
		},
		{
			href: "/resume",
			title: "Resume",
			description: "A comprehensive look at my professional journey and achievements.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Image
								src="/images/try2.JPG"
								alt="Sanchay Shetty"
								width={200}
								height={200}
								style={{
									borderRadius: '50%',
									objectFit: 'cover',
									padding: '4px',
									border: '2px solid rgba(255, 255, 255, 0.1)',
									backgroundColor: 'rgba(0, 0, 0, 0.2)',
									boxShadow: `
										0 0 30px rgba(0, 0, 0, 0.3),
										0 0 15px rgba(255, 255, 255, 0.1)
									`,
									transition: 'all 0.3s ease'
								}}
							/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								{INTRODUCTION}
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Hello I'm Sanchay Shetty
									</LetterFx>
								</span>
							</Heading>
							<Button
								id="readDocs"
								href="/resume"
								variant="secondary">
								<Flex alignItems="center">
									
									Frontend Developer
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(4, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/ssshetty11"
						prefixIcon="github" 
						size="s" 
						variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://www.linkedin.com/in/sanchay-shetty-81058b240/"
						prefixIcon="linkedin" 
						size="s" 
						variant="tertiary">
						LinkedIn
					</Button>
					<Button
						href="https://www.instagram.com/sanchay__shetty?igshid=YmMyMTA2M2Y%3D"
						prefixIcon="instagram" 
						size="s" 
						variant="tertiary">
						Instagram
					</Button>
					<Button
						href="mailto:shettysanchay@gmail.com"
						prefixIcon="gmail" 
						size="s" 
						variant="tertiary">
						shettysanchay11@gmail.com
					</Button>
					<Link href="/resume">
						<Button variant="primary">View Resume</Button>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
}

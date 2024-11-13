import type { Metadata } from "next";
import { Flex } from "@/once-ui/components";

export const metadata: Metadata = {
  title: "Education | Your Name",
  description: "Educational background and academic achievements",
};

export default function EducationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            as="main"
            direction="column"
            gap="xl"
            padding="xl"
            alignItems="center"
            style={{ minHeight: '100vh' }}
            background="neutral-weak"
            position="relative">
            {children}
        </Flex>
    );
}
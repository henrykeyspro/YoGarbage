import { Box, Flex, Heading, SimpleGrid, Text, Link } from '@chakra-ui/core';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { LogoIcon } from './Logo';
import SocialLink from './SocialLink';

export function FooterHeading({ title }) {
  return (
    <Heading color="#002240" fontSize={['sm', 'sm', 'md']}>
      {title}
    </Heading>
  );
}

export function FooterText({ children, href }) {
  return (
    <Text color="#002240" fontSize={['sm', 'sm', 'md']} py={2} href={href}>
      {children}
    </Text>
  );
}

/**
 * Refactored footer to avoid repetition by creating an array of objects
 */

const whySalesWhaleArray = [
  {
    label: 'Collaborative Intelligence',
    url: '#',
  },
  {
    label: 'AI Assistant Capabilities',
    url: '#',
  },
  {
    label: 'Customer Stories',
    url: '#',
  },
  {
    label: 'Use Case - Technology',
    url: '#',
  },
  {
    label: 'Use Case - Education',
    url: '#',
  },
  {
    label: 'Use Case - Events',
    url: '#',
  },
];

export function WhySaleswhale({ ...rest }) {
  return (
    <Box {...rest}>
      <FooterHeading title="Why Saleswhales" />
      {whySalesWhaleArray.map((item) => {
        return (
          <Link href={item.url}>
            <FooterText children={item.label} />
          </Link>
        );
      })}
    </Box>
  );
}

const productArray = [
  {
    label: 'AI Conversations',
    url: '#',
  },
  {
    label: 'Lead Enrichment',
    url: '#',
  },
  {
    label: 'Deal Intelligence',
    url: '#',
  },
  {
    label: 'Workflow Integration',
    url: '#',
  },
];

export function Product({ ...rest }) {
  return (
    <Box {...rest}>
      <FooterHeading title="Product" />
      {productArray.map((item) => {
        return (
          <Link href={item.url}>
            <FooterText children={item.label} />
          </Link>
        );
      })}
    </Box>
  );
}

const companyArray = [
  {
    label: 'About us',
    url: '#',
  },
  {
    label: 'Blog',
    url: '#',
  },
  {
    label: 'Resources',
    url: '#',
  },
  {
    label: 'Careers',
    url: '#',
  },
  {
    label: 'Help Centre',
    url: '#',
  },
];

export function Company({ ...rest }) {
  return (
    <Box {...rest}>
      <FooterHeading title="Company" />
      {companyArray.map((item) => {
        return (
          <Link href={item.url}>
            <FooterText children={item.label} />
          </Link>
        );
      })}
    </Box>
  );
}

const contactArray = [
  {
    title: 'About us',
    label: 'hello@saleswhale.com',
    url: '#',
  },
  {
    title: 'US Office',
    label: '1701 Rhode Island Ave NW Washington, DC 20036',
    url: '#',
  },
  {
    title: 'Singapore Office',
    label: '155B Telok Ayer Street Singapore, 068611',
    url: '#',
  },
];

export function Contact({ ...rest }) {
  return (
    <Box {...rest}>
      <Box paddingBottom={4}>
        {contactArray.map((item) => {
          return (
            <Box paddingBottom={4}>
              <FooterHeading title={item.title} />
              <FooterText children={item.label} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

// export function TopFooter() {
//   return (
//     <Flex
//       justifyContent="space-between"
//       alignItems="flex-start"
//       py={16}
//       direction={['column', 'column', 'row', 'row']}
//       px={['30px', '30px', '60px', '110px']}
//     >
//       <LogoIcon
//         // minWidth={['70px', '70px', '200px', '200px']}
//         minWidth={['50px', '50px', '200px', '200px']}
//         py={[8, 8, 0, 0]}
//       />
//       <SimpleGrid columns={[2, 2, 2, 4]} spacing={8} marginLeft={[0, 0, 8, 12]}>
//         <WhySaleswhale />
//         <Product />
//         <Company />
//         <Contact />
//       </SimpleGrid>
//     </Flex>
//   );
// }

export function BottomFooter() {
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      bg="#F4F4F4"
      paddingX={12}
      paddingY={24}
      marginTop={100}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
        py={-3}
      >
        <Box textAlign={['center', 'center', 'left', 'left']}>
          <FooterHeading title="Privacy Terms" />
          <FooterText
            // py={12}
            fontSize="14px"
            children="© 2020 YoGarbage, Inc. All rights reserved."
          />
        </Box>
        <SimpleGrid
          listStyleType="none"
          columns={3}
          spacing={16}
          paddingBottom={12}
        >
          <SocialLink
            icon={FaFacebook}
            label="facebook"
            link="https://www.facebook.com/yogarbage/"
            color="#35589D"
          />
          <SocialLink
            icon={FaTwitter}
            label="twitter"
            link="https://twitter.com/yogarbage/"
            color="#5DA8DC"
          />
          <SocialLink
            icon={FaLinkedin}
            label="linkedin"
            link="https://www.linkedin.com/company/yogarbage/"
            color="#337BB1"
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
import React from 'react';
import { Box, PseudoBox } from '@chakra-ui/core';

export function HoverLink({ link, label, ...props }) {
  return (
    <PseudoBox
      as="a"
      display="inline-block"
      href={link}
      target="__blank"
      rel="nofollow noopener noreferrer"
      aria-label={label}
      transition="all 0.3s"
      _hover={{ transform: `translateY(-4px)`, color: 'blue.500' }}
      {...props}
    />
  );
}

export default function SocialLink({ icon, label, link, color, ...rest }) {
  return (
    <Box as="li" {...rest} color={color}>
      <HoverLink link={link} label={label}>
        <Box size="40px" as={icon} />
      </HoverLink>
    </Box>
  );
}
"use client";

import React from "react";
import styled from "styled-components";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  delaySec?: number;
  distancePx?: number;
  as?: React.ElementType;
};

const Box = styled.div<{ $visible: boolean; $distance: number; $delay: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible, $distance }) => ($visible ? 0 : $distance)}px);
  transition: opacity 600ms ease, transform 600ms ease;
  transition-delay: ${({ $delay }) => `${$delay}s`};
  will-change: opacity, transform;
`;

export default function Reveal({ children, delaySec = 0, distancePx = 24, ...rest }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // reveal once
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Box ref={ref} $visible={visible} $distance={distancePx} $delay={delaySec} {...rest}>
      {children}
    </Box>
  );
}



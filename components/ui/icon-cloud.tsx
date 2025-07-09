"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const fetchIcons = async () => {
      try {
        const iconData = await fetchSimpleIcons({ slugs: iconSlugs });
        setData(iconData);
      } catch (error) {
        console.warn("Failed to fetch icons:", error);
        // Fallback: create basic icon data structure
        const fallbackData = {
          simpleIcons: iconSlugs.reduce((acc, slug) => {
            acc[slug] = {
              title: slug,
              hex: "#000000",
              path: "",
              slug: slug,
            };
            return acc;
          }, {} as Record<string, SimpleIcon>),
          allIcon: iconSlugs.reduce((acc, slug) => {
            acc[slug] = {
              title: slug,
              hex: "#000000",
              slug: slug,
            };
            return acc;
          }, {} as Record<string, { title: string; hex: string; slug: string }>),
        };
        setData(fallbackData);
      }
    };

    fetchIcons();
  }, [iconSlugs, isClient]);

  const renderedIcons = useMemo(() => {
    if (!data || !isClient) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark"),
    );
  }, [data, theme, isClient]);

  // Don't render anything on server-side to prevent hydration mismatch
  if (!isClient) {
    return <div className="w-full h-64 flex items-center justify-center">Loading...</div>;
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

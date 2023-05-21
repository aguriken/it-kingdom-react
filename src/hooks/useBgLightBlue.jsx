import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

export const useBgLightBlue = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === '/' ? "lightblue" : "";
  }, [router.pathname])

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
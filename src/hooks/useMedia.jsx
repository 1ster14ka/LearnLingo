import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../constants/breakpoints";

const useMedia = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT.mobileMax}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.tableMin}px) and (max-width: ${BREAK_POINT.tableMax}px)`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.desktop}px)`,
  });
  const isMobileOrTablet = isMobile || isTablet;
  const current =
    (isMobile && "mobile") ||
    (isTablet && "tablet") ||
    (isDesktop && "desktop");

  return { isMobile, isTablet, isMobileOrTablet, isDesktop, current };
};

export default useMedia;

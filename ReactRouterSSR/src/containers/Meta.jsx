import React, { useMemo } from "react";

const Meta = ({ headers }) => {
  const headersComponent = useMemo(() => {
    return Object.entries(headers).map(([currentValue]) => {
      if (`${currentValue}`.endsWith("js")) {
        return <link crossOrigin="" rel="modulepreload" href={currentValue} />;
      } else if (`${currentValue}`.endsWith("css")) {
        return <link crossOrigin="" rel="stylesheet" href={currentValue} />;
      } else if (currentValue.endsWith(".woff")) {
        return <link rel="preload" href={currentValue} as="font" type="font/woff" crossOrigin="" />;
      } else if (currentValue.endsWith(".woff2")) {
        return <link rel="preload" href={currentValue} as="font" type="font/woff2" crossOrigin="" />;
      } else if (currentValue.endsWith(".gif")) {
        return <link rel="preload" href={currentValue} as="image" type="image/gif" />;
      } else if (currentValue.endsWith(".jpg") || currentValue.endsWith(".jpeg")) {
        return <link rel="preload" href={currentValue} as="image" type="image/jpeg" />;
      } else if (currentValue.endsWith(".png")) {
        return <link rel="preload" href={currentValue} as="image" type="image/png" />;
      }
      return null
    });
  }, [headers]);
  return headersComponent;
};

export default Meta;

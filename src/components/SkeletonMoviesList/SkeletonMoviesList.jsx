import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={250}
    viewBox="0 0 400 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="104" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="130" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="156" rx="5" ry="5" width="220" height="10" />
    <rect x="24" y="179" rx="5" ry="5" width="220" height="10" />
    <rect x="24" y="201" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
);

export default MyLoader;

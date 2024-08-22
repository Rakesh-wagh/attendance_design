import React from "react";

export const EmptyIcon = ({ title = "", className = "" }) => {
  return (
    <i
      type="ci-00774"
      className={`cIcon cIcon-Empty ${className}`}
      title={title}
    >
      <svg
        width="1em"
        height="1em"
        fill="currentcolor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 486.66"
      >
        <path d="M512,231v6c-3.13,2.59-6,5.7-9.44,7.67q-23.25,13.17-46.83,25.71c-3.49,1.86-4.9,3.88-4.87,8,.2,31-.05,62,.23,93,.06,7.23-2.41,11.67-8.82,15.16q-89.19,48.64-178.12,97.78c-5.76,3.18-10.54,3.18-16.3,0Q158.92,435.17,69.73,386.5c-6.4-3.49-8.88-7.93-8.82-15.16.28-31,0-62,.23-93,0-4.12-1.38-6.14-4.87-8Q32.71,257.8,9.44,244.66C6,242.69,3.13,239.58,0,237v-6a91.55,91.55,0,0,1,5.92-7.33c9.58-9.73,19.28-19.33,28.93-29l22.54-22.52c-3.33-3-6.53-5.66-9.44-8.6Q23.92,139.32,0,115v-6c2.54-2.52,4.66-5.78,7.67-7.45Q97.49,51.94,187.51,2.68C195-1.44,198.11-1,204.27,5.18Q228.16,29,252,52.9c1.25,1.25,2.56,2.45,4.84,4.61a37.4,37.4,0,0,1,3.48-4.88q23.61-23.75,47.34-47.4C314-1,317-1.45,324.86,2.88q23.65,12.95,47.28,25.94a29.1,29.1,0,0,1,4.59,3A9.87,9.87,0,0,1,379.14,44a9.68,9.68,0,0,1-11.5,4.68,30.21,30.21,0,0,1-5.41-2.53C349.08,39,335.89,31.85,322.86,24.46c-3-1.71-4.74-1.54-7.2,1C302.36,39,288.85,52.36,275.43,65.81c-.86.86-1.59,1.86-2.6,3.06l165.08,90.67,46.3-46.25c-1-.59-2.58-1.52-4.16-2.39-15.32-8.42-30.66-16.8-45.94-25.27-6.48-3.6-8.6-9.16-5.75-14.43,3-5.5,8.79-6.7,15.64-3,20.44,11.18,40.9,22.34,61.2,33.78,2.71,1.52,4.55,4.59,6.8,7v6c-9.74,10-19.43,20-29.22,29.86-9.11,9.22-18.33,18.33-28.49,28.48a35.57,35.57,0,0,1,4.81,3.38q23.55,23.42,47,47A91.51,91.51,0,0,1,512,231ZM81,284.24c0,27.62.07,54.27-.08,80.92,0,3.47,1.08,5.25,4.12,6.91q78,42.63,155.84,85.5c1.52.83,3.07,1.6,5.09,2.64v-3.83q0-48.24,0-96.49c0-7.12,4.32-11.89,10.22-11.71s9.59,4.76,9.75,11.69c0,1.17,0,2.33,0,3.5v96.8c1.59-.79,2.47-1.18,3.31-1.64Q348.54,415,427.79,371.6c2.64-1.45,3.23-3.17,3.22-5.92-.08-25.83,0-51.66-.05-77.49,0-1.07-.16-2.15-.29-3.81-2.25,1.19-4,2.07-5.71,3l-98.48,54.07c-10,5.5-12.15,5.17-20.39-3.06q-23-23-45.95-46c-1.27-1.27-2.61-2.47-4.14-3.91-1.52,1.43-2.85,2.63-4.12,3.9l-46.67,46.66c-7.35,7.35-10,7.72-19.25,2.64L87.06,287.4C85.34,286.46,83.59,285.58,81,284.24Zm11.12-111.8c1.12.78,1.63,1.21,2.2,1.52Q173.57,217.48,252.74,261c2.87,1.58,4.87.87,7.32-.48q77.88-42.84,155.79-85.6c1.24-.69,2.41-1.5,3.82-2.38-.92-.63-1.44-1.05-2-1.36q-79.2-43.53-158.39-87.1c-2.88-1.59-4.85-.84-7.31.52q-40.22,22.2-80.51,44.26ZM27.63,113.28l46.28,46.37,165.4-90.86C238,67.36,237,66.25,236,65.21c-13.06-13.08-26.24-26-39.12-39.29-2.91-3-4.89-3-8.41-1.09q-69,38.16-138.15,76ZM239.54,276.52l-165.71-91L27.56,231.82c1.13.64,2.69,1.55,4.27,2.42Q104.22,274,176.61,313.76c5.38,2.95,11.34,8.56,16.17,7.76,5.15-.84,9.36-7.76,13.83-12.17C217.49,298.59,228.29,287.75,239.54,276.52Zm198.88-91.13L272.49,276.51c14.56,14.55,28.68,28.43,42.49,42.63,3.07,3.16,5.2,3.06,8.82,1.06q78.42-43.29,157-86.31c1.41-.77,2.75-1.65,4-2.38Z"></path>
        <path d="M404.54,68A9.9,9.9,0,0,1,395,57.89a10,10,0,0,1,10.09-9.66c5.26.18,9.88,5,9.71,10.18A10.23,10.23,0,0,1,404.54,68Z"></path>
        <path d="M256.09,334.86a10.34,10.34,0,0,1-10-9.84,9.92,9.92,0,0,1,19.84-.19A10.33,10.33,0,0,1,256.09,334.86Z"></path>
      </svg>
    </i>
  );
};

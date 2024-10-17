import Cameras from '/Cameras.svg';
import Tablets from '/Tablets.svg';
import MobileApp from '/MobileApp.svg';

export const products = [
  {
    svg: Cameras,
    alt: 'Cameras',
    text: 'Providing 4K surveillance cameras that will allow you tenants to access the video stream. The video stream will be available 24/7 and the tenants will be able to access it remotely. The cameras enable a greater peace of mind for all the tenants in your residential complex.',
    header: '4K Surveillance Cameras',
  },
  {
    svg: Tablets,
    alt: 'Tablets',
    text: 'The lobby is the busiest area of the residential building. This allows for a perfect placement of a tablet that would act as a information board. Your tenant will be able to see all of the important information, incorporated into a simple and effective design. The lobby tablet allows a modern and easier solution for information sharing among tenants.',
    header: 'Modern Information Board',
    reverseLayout: true,
  },
  {
    svg: MobileApp,
    alt: 'MobileApps',
    text: 'The WAVEZ mobile application provides a comprehensive information system for your tenants. Each tenant will be given access to the application. Via the application the tenants will be able to access the cameras, share and view important information and handle complaints, issues, etc.',
    header: 'Mobile Application',
  },
];

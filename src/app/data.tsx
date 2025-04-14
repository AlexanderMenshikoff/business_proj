interface IFirstBlockData {
  mainHeader: string;
  text: string;
}

interface ISecondBlockData {
  header: string;
  text: string;
  img: string;
  imgWidth: number;
  className: string;
  id: number;
}

interface IThirdBlockData {
    header: string;
    text: string;
    img: string;
    imgWidth: number;
    id: number;
  }

interface ICustomerReviewData {
  companyLogo: string;
  companyLogoWidth: number,
  customerReview: string;
  customerPic: string;
  customerName: string;
  customerCompany:string;
  id: number;
}

export interface IFAQBlockData {
  question: string;
  answer: string;
  id:number;
}

export interface IFooterLinksData {
  columnName: string;
  columnText: string[];
  id:number;
}

export const firstBlockData: IFirstBlockData = {
  mainHeader: 'Powerful data insights for all',
  text: 'Torch makes data analysis easy for everyone. Visualise key metrics, track perfomance, and dsicover trends without needing a data science background.',
};

export const SecondBlockData: ISecondBlockData[] = [
  {
    header: 'Easy-to-use dashboards',
    text: 'Creative intuitive, custom dashboards to visualise your most important metrics. No coding or technical skills required.',
    img: '/blocks_imgs/img_block.png',
    imgWidth: 30,
    className: 'col-span-2 row-span-3',
    id: 1,
  },
  {
    header: 'Collaborative analytics',
    text: 'Share dashboards and reports with your team for seamless collaboration. Comment, edit, and review data insights together.',
    img: '/blocks_imgs/img_arrow.png',
    imgWidth: 35,
    className: 'col-span-2 row-span-2 col-start-1 row-start-4',
    id: 2,
  },
  {
    header: 'Real-tme data updates',
    text: 'Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed',
    img: '/blocks_imgs/img_speedometer.png',
    imgWidth: 30,
    className: 'col-span-2 row-span-2 col-start-3 row-start-1',
    id: 3,
  },
  {
    header: 'Automated reports',
    text: 'Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports.',
    img: '/blocks_imgs/img_wand.png',
    imgWidth: 30,
    className: 'col-span-2 row-span-3 col-start-3 row-start-3',
    id: 4,
  },
];

export const ThirdBlockData:IThirdBlockData[] = [
  {
    header: 'Instant updates',
    text: 'Always stay up-to-date with live data flowing directly into your dashboard. Track changes as they happen.',
    img: '/blocks_imgs/img_flash.png',
    imgWidth: 25,
    id: 1,
  },
  {
    header: 'Customisable views',
    text: 'Tailor your dashboard to show the metrics that matter most. Create multiple views for different team members or purposes.',
    img: '/blocks_imgs/img_settings.png',
    imgWidth: 25,
    id: 2,
  },
  {
    header: 'Collaborative tools',
    text: 'Easily share your insights with the team. Comment, edit, and collaborate on reports without leaving the platform.',
    img: '/blocks_imgs/img_handshake.png',
    imgWidth: 25,
    id: 3,
  },
];

export const FourthBlockData:IThirdBlockData[] = [
  {
    header: 'Automated reports',
    text: 'Save time with automated, scheduled reports. Get the insights you need, delivered straight to your inbox.',
    img: '/blocks_imgs/img_wand.png',
    imgWidth: 25,
    id: 1,
  },
  {
    header: 'Trend analysis',
    text: 'Discover patterns and trends in your data effortlessly. Visualise historical data to forecast future performance.',
    img: '/blocks_imgs/img_trend.png',
    imgWidth: 25,
    id: 2,
  },
  {
    header: 'Interactive charts',
    text: 'Dive deeper into your data with interactive charts. Hover and click for more detailed insights and breakdowns.',
    img: '/blocks_imgs/img_chart.png',
    imgWidth: 25,
    id: 3,
  },
];


export const CustomersBlockData: ICustomerReviewData[] = [
  {
    companyLogo: '/companies_logos/someday_logo_white.png',
    companyLogoWidth: 120,
    customerReview: 'Torch completely transformed how we track our business performance. The real-time insights have helped us make faster, smarter decisions!',
    customerPic: '/customer_pics/firstCustomer_img.png',
    customerName: 'Emily Chang',
    customerCompany:'Luminate',
    id: 1
  },
  {
    companyLogo: '/companies_logos/na_logo_white.png',
    companyLogoWidth: 70,
    customerReview: 'Our team loves how easy Torch is to use. The custom dashboards give us exactly the data we need, all in one place.',
    customerPic: '/customer_pics/secondCustomer_img.png',
    customerName: 'Xavier Carter',
    customerCompany:'Cucumber',
    id: 2
  },
  {
    companyLogo: '/companies_logos/irene_logo_white.png',
    companyLogoWidth: 120,
    customerReview: "Torch seamlessly integrated with our existing tools, making data management so much more efficient. It's become an essential part of our workflow.",
    customerPic: '/customer_pics/thirdCustomer_img.png',
    customerName: 'Alexander Patel',
    customerCompany:'Vexa',
    id: 3
  },
]

export const FAQBlockData:IFAQBlockData[] = [
  {
    question:'What does Torch do?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id:1
  },
  {
    question:'Who is Torch for?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id:2
  },
  {
    question:'How secure is my data on Torch?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id:3
  },
  {
    question:'Can Torch integrate with existing tools?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id:4
  },
  {
    question:'Is Torch easy to use if you’re not technical?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id:5
  },
  
]


export const FooterLinksData: IFooterLinksData[]= [
  {
    columnName: 'Product',
    columnText: ['Home', 'Features', 'Pricing', 'Sign in'],
    id:1
},
{
    columnName: 'Company',
    columnText: ['About', 'Contact'],
    id:2
},
{
    columnName: 'Social',
    columnText: ['X (Twitter)', 'Instagram', 'LinkedIn'],
    id:3
},
{
    columnName: 'Admin',
    columnText: ['Style guide', 'Licenses', 'Password', '404'],
    id:4
},
{
    columnName: 'Important',
    columnText: ['Site by Bryn Taylor', 'View all templates', 'Powered by Webflow'],
    id:5
}
  
]
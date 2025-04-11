export const firstBlockData: IFirstBlockData = {
  mainHeader: 'Powerful data insights for all',
  text: 'Torch makes data analysis easy for everyone. Visualise key metrics, track perfomance, and dsicover trends without needing a data science background.',
};

interface IFirstBlockData {
  mainHeader: string;
  text: string;
}

export const SecondBlockData: ISecondBlockData[] = [
  {
    header: 'Easy-to-use dashboards',
    text: 'Creative intuitive, custom dashboards to visualise your most important metrics. No coding or technical skills required.',
    img: '/img_block.png',
    imgWidth: 30,
    className: 'col-span-2 row-span-3',
    id: 1,
  },
  {
    header: 'Collaborative analytics',
    text: 'Share dashboards and reports with your team for seamless collaboration. Comment, edit, and review data insights together.',
    img: '/img_arrow.png',
    imgWidth: 35,
    className: 'col-span-2 row-span-2 col-start-1 row-start-4',
    id: 2,
  },
  {
    header: 'Real-tme data updates',
    text: 'Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed',
    img: '/img_speedometer.png',
    imgWidth: 30,
    className: 'col-span-2 row-span-2 col-start-3 row-start-1',
    id: 3,
  },
  {
    header: 'Automated reports',
    text: 'Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports.',
    img: '/img_wand.png',
    imgWidth: 30,
    className: 'col-span-2 row-span-3 col-start-3 row-start-3',
    id: 4,
  },
];

interface ISecondBlockData {
  header: string;
  text: string;
  img: string;
  imgWidth: number;
  className: string;
  id: number;
}

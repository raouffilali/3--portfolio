import { Statistic } from "@/types/interfaces";

export function getStatistics() {
  const statistics: Statistic[] = [
    {
      label: "Years experience",
      value: new Date().getFullYear() - 2019,
    },

    {
      label: "Completed projects",
      value: 5,
    },
  ];

  return { statistics };
}

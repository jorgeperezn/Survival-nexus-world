import { Badge } from "@/app/components/badge";
import { InformationCircleIcon } from "@heroicons/react/16/solid";

interface ReportsPageProps {}

const ReportsPage = (props: ReportsPageProps) => {
  const currentMonthGrowth = 5;

  const reportCards = [
    {
      id: 1,
      title: "Number of Healthy Survivors",
      growth: "+5%",
      growthType: true,
      highlight: "1,205",
      timeLabel: "Last 30 days",
    },
    {
      id: 2,
      title: "Number of Infected Survivors",
      growth: "-12%",
      growthType: false,
      highlight: "39",
      timeLabel: "Last 30 days",
    },
    {
      id: 3,
      title: "Average Resource Allocation",
      highlight: "Food",
      timeLabel: "10 days worth",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">Reports</h2>
        <div className="flex items-center gap-2">
          <p className="text-gray-600">
            Your camp has grown{" "}
            <span className="text-green-700">+{currentMonthGrowth}%</span> this
            month
          </p>
          <InformationCircleIcon className="h-3 w-3" />
        </div>
      </div>

      <div className="flex flex-wrap">
        {reportCards.map((report) => (
          <div key={report.id} className="w-full sm:w-full md:w-1/3 mb-4 px-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl">
              <div className="p-4">
                <h3 className="font-medium mb-6">{report.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-3xl">{report.highlight}</span>
                  {report.growth && (
                    <Badge type={report.growthType ? "success" : "danger"}>
                      <small>{report.growth}</small>
                    </Badge>
                  )}
                </div>
                <small className="font-normal text-gray-500">
                  {report.timeLabel}
                </small>
              </div>

              <hr />

              <div className="p-4">
                <button>
                  <small>Download Report</small>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;

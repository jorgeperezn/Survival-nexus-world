import { Survivor } from "@/types";

import { SurvivorList } from "./components/SurvivorsList";

import { getSurvivors } from "@/services/survivors";

interface SurvivorsPageProps {}

const SurvivorsPage: React.FC<SurvivorsPageProps> = async () => {
  const survivors: Survivor[] = await getSurvivors();

  return <SurvivorList survivors={survivors} />;
};

export default SurvivorsPage;

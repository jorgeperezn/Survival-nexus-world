import { Survivor } from "@/types";
import { getSurvivors } from "@/services/survivors";

interface SurvivorListProps {}

const SurvivorList: React.FC<SurvivorListProps> = async () => {
  const survivors: Survivor[] = await getSurvivors();

  const healthySurvivorsCount = survivors.filter(
    (survivor) => !survivor.infected
  ).length;

  return (
    <div>
      <h2>List of survivors</h2>
      <p>You have {healthySurvivorsCount} healthy survivors</p>
      <button>Add Survivor</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {survivors.map((survivor) => (
            <tr key={survivor.name}>
              <td>{survivor.name}</td>
              <td>{survivor.infected ? "Infected" : "Healthy"}</td>
              <td>{survivor.dateAdded.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurvivorList;

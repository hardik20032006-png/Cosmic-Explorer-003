import achievements from "../achievementsData";
import AchievementCard from "../components/components/AchievementCard";

export default function Achievements() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Space Achievements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </div>
  );
}
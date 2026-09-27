import { useParams, Link } from "react-router-dom";
import achievements from "../achievementsData";

export default function AchievementDetails() {
  const { title } = useParams();

  const decodedTitle = decodeURIComponent(title);

  const achievement = achievements.find(
    (item) => item.title === decodedTitle
  );

  if (!achievement) {
    return (
      <div className="min-h-full flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Achievement Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            The achievement you are looking for does not exist.
          </p>

          <Link
            to="/achievements"
            className="
              inline-block
              mt-6
              px-5 py-2
              rounded-lg
              bg-[#6142BF]
              text-white
              hover:bg-purple-500
              transition
            "
          >
            ← Back to Achievements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-8 pt-2 pb-8">

      {/* Back button */}
      <Link
        to="/achievements"
        className="
          inline-flex
          items-center
          text-purple-300
          hover:text-white
          transition
          mb-4
        "
      >
        ← Back to Achievements
      </Link>

      {/* Main detail card */}
      <article
        className="
          bg-[#0E1A2B]
          border border-[#6142BF]
          rounded-2xl
          shadow-2xl
          overflow-hidden
        "
      >

        {/* Header */}
        <div className="p-6 md:p-8">

          <h1
            className="
              text-3xl
              md:text-4xl
              font-semibold
              text-white
            "
          >
            {achievement.title}
          </h1>

        </div>

        {/* Image + information */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.5fr_1fr]
            gap-8
            px-6
            md:px-8
            pb-8
          "
        >

          {/* Image */}
          <div
            className="
              rounded-xl
              overflow-hidden
              bg-[#111827]
              border border-[#1D2949]
            "
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="
                w-full
                h-[300px]
                md:h-[420px]
                object-cover
              "
            />
          </div>

          {/* Information */}
          <div
            className="
              bg-[#111827]
              rounded-xl
              border border-[#1D2949]
              p-6
            "
          >

            <h2 className="text-xl font-semibold text-white mb-5">
              Achievement Information
            </h2>

            <div className="space-y-5">

              {/* Achievement */}
              <div>
                <p className="text-sm text-purple-300">
                  Achievement
                </p>

                <p className="text-white mt-1">
                  {achievement.title}
                </p>
              </div>

              {/* Short Description */}
              <div>
                <p className="text-sm text-purple-300">
                  Short Description
                </p>

                <p className="text-gray-300 mt-1 leading-relaxed">
                  {achievement.shortDescription}
                </p>
              </div>

              {/* Date */}
              <div>
                <p className="text-sm text-purple-300">
                  Date
                </p>

                <p className="text-white mt-1">
                  {achievement.date}
                </p>
              </div>

              {/* Country */}
              <div>
                <p className="text-sm text-purple-300">
                  Country
                </p>

                <p className="text-white mt-1">
                  {achievement.country}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Detailed information */}
        <div className="px-6 md:px-8 pb-8">

          <div
            className="
              border-t
              border-[#1D2949]
              pt-8
            "
          >

            <h2 className="text-2xl font-semibold text-white">
              About This Achievement
            </h2>

            <p
              className="
                mt-5
                text-gray-300
                leading-8
                text-base
                md:text-lg
                max-w-5xl
              "
            >
              {achievement.description}
            </p>

          </div>

        </div>

      </article>

    </div>
  );
}
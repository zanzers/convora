import Card from "../ui/Card"
import { TEXTSTRING } from "@/constant/textString"


const stats = [
  {
    title: TEXTSTRING.stats.sessions,
    value: 0,
  },
  {
    title: TEXTSTRING.stats.minutes,
    value: 0,
  },
  {
    title: TEXTSTRING.stats.words,
    value: 0,
  },
  {
    title: TEXTSTRING.stats.accuracy,
    value: "0%",
  }
];



function StateCard() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold">
                {stat.value}
              </h2>
            </div>

        </Card>
      ))}
      



    </div>
  )
}

export default StateCard

import Link from "next/link";

// TODO: type: hyena types required
type Props = { competitions: any };

export default function Competitions({ competitions }: Props) {
  if (!competitions?.length) {
    return null;
  }

  return (
    <div className="compeitions__container block wrapped">
      {competitions.map((competition) => (
        <p key={competition["competition_id"]}>
          <Link
            href={`/competition?id=${competition["competition_id"]}`}
            as={`/c/${competition["competition_id"]}`}
          >
            <a>
              {competition.name} {competition.season.name}
              {competition.area_name && ` (${competition["area_name"]})`}
            </a>
          </Link>
        </p>
      ))}
    </div>
  );
}

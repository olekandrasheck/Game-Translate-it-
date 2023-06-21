import "./ShowRoundInfo.scss";

import { IRoundInfoProps } from "../types/types";

export const RoundInfo: React.FC<IRoundInfoProps> = ({
  score,
  currentRound,
  roundsCount,
}) => {
  return (
    <div className="roundInfo__component">
      <div>
        Your score: <strong>{score}</strong>
      </div>
      <div>
        Current round: <strong>{currentRound}</strong> from
        <strong>{roundsCount}</strong>
      </div>
    </div>
  );
};

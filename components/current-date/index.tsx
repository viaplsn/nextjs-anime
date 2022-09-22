import getDate from "../../utils/getDate";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { DateText, TodayDate } from "./current-date.styled";

const CurrentDate = (): JSX.Element => {
  const { day, month, shortMonth } = getDate();
  const { width } = useWindowDimensions();
  const isDesktopScreenSize = Boolean(width && width > 768);

  return (
    <>
      {isDesktopScreenSize ? (
        <DateText>
          Today is the{" "}
          <TodayDate>
            {day} of {month}
          </TodayDate>
        </DateText>
      ) : (
        <DateText>
          {shortMonth} {day}
        </DateText>
      )}
    </>
  );
};

export default CurrentDate;

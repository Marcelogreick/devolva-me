import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { ptBR } from "./localeConfig";
import { View } from "react-native";
import { convertUSDate } from "../../utils/date";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface CalendarProps {
  dateSelected: string;
  onDaySelected: (day: string) => void;
  onMinToday?: boolean;
}

export function Calendar({
  dateSelected,
  onDaySelected,
  onMinToday,
}: CalendarProps) {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState({});

  useEffect(() => {
    if (dateSelected) {
      let data = {};
      data[dateSelected] = {
        selected: true,
        selectedColor: "#aae83f",
      };
      setSelectedDate(data);
    }
  }, []);

  const onDayPress = (day) => {
    let data = {};
    data[day.dateString] = {
      selected: true,
      selectedColor: "#aae83f",
    };
    setSelectedDate(data);
  };

  return (
    <View style={{ backgroundColor: theme.COLORS.PRIMARY }}>
      <CustomCalendar
        onDayPress={(day) => {
          if (onDaySelected) onDaySelected(day.dateString);
          onDayPress(day);
        }}
        style={{ paddingTop: 7 }}
        renderArrow={(direction) => (
          <Feather
            size={24}
            color={theme.COLORS.WHITE}
            name={direction == "left" ? "chevron-left" : "chevron-right"}
          />
        )}
        headerStyle={{
          backgroundColor: theme.COLORS.PRIMARY,
          borderBottomWidth: 1,
          borderBottomColor: theme.COLORS.PRIMARY,
          paddingBottom: 12,
          marginBottom: 12,
        }}
        theme={{
          calendarBackground: theme.COLORS.PRIMARY,
          textSectionTitleColor: theme.COLORS.WHITE,
          selectedDayTextColor: theme.COLORS.WHITE,
          todayTextColor: theme.COLORS.WHITE,
          textDayFontFamily: theme.FONT_FAMILY.BOLD,
          textDayHeaderFontFamily: theme.FONT_FAMILY.BOLD,
          textDayHeaderFontSize: 12,
          dayTextColor: theme.COLORS.WHITE,
          textDisabledColor: "#2d4150",
          textMonthFontFamily: theme.FONT_FAMILY.BOLD,
          textMonthFontSize: 20,
          monthTextColor: theme.COLORS.WHITE,
          arrowStyle: {
            marginHorizontal: -12,
          },
        }}
        firstDay={1}
        current={dateSelected}
        minDate={
          onMinToday
            ? convertUSDate(new Date(new Date().setDate(new Date().getDate())))
            : undefined
        }
        markedDates={selectedDate}
        markingType="multi-dot"
      />
    </View>
  );
}

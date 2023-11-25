import AntDesign from "@expo/vector-icons/AntDesign";
import { shade } from "polished";
import { Button, Container, TextPage } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  setPage: (page: number) => void;
  current_page: number;
  last_page: number;
}

export function Pagination({ current_page, last_page, setPage }: Props) {
  const { COLORS } = useTheme();
  function handleNextPage() {
    if (current_page === last_page) {
      return;
    }

    setPage(current_page + 1);
  }

  function handlePreviousPage() {
    if (current_page === 1) {
      return;
    }

    setPage(current_page - 1);
  }

  return (
    <Container>
      <Button activeOpacity={1}>
        <AntDesign
          name="caretleft"
          size={22}
          color={current_page === 1 ? shade(0.5, "#fff") : "#fff"}
          onPress={() => handlePreviousPage()}
        />
      </Button>
      <TextPage>
        {current_page} - {last_page}
      </TextPage>
      <Button activeOpacity={1}>
        <AntDesign
          name="caretright"
          size={22}
          color={current_page === last_page ? shade(0.5, "#fff") : "#fff"}
          onPress={() => handleNextPage()}
        />
      </Button>
    </Container>
  );
}

import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Image src={logo} alt="Leadster logo" />
    </Container>
  );
}

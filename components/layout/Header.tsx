import { RadioBar } from "../features/Radio/RadioBar";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <div className="fixed w-screen flex flex-col z-40">
        <RadioBar/>
        <NavBar />
    </div>
  )
}

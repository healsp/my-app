import { ReactNode } from "react";
import MainNavigation from "./mainNavigation";

interface Props {
  children: ReactNode
}

function Layout (props: Props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  )
}

export default Layout;
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import style from "@/styles/hammenu.module.css";
import Link from "next/link";
import Text from "@carefully-coded/react-text-gradient"

export default function HamMenu() {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }
  return (
    // <DropdownMenu className={style.dropDownSection}>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline">
    //       {" "}
    //       <img src="hamberger.svg" alt="Defi Logo" />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className={style.hamMenu}>
    //     <div className={style.hamMenuDiv}>
    //       <Link href="/waitlist" className={style.hamMenuText}>
    //         <img src="trade.svg" alt="Trade icon" />
    //         Trade
    //       </Link>
    //       <DropdownMenuSeparator />

    //       <a
    //         className={style.hamMenuText}
    //         onClick={() => openInNewTab("https://telegram.me/helloDefiPe")}
    //       >
    //         <img src="bulb.svg" alt="bulb icon" />
    //         Join us
    //       </a>
    //       <DropdownMenuSeparator />
    //       <a style={{ cursor: "not-allowed" }} className={style.hamMenuText}>
    //         <img src="aboutus.svg" alt="Trade icon" />
    //         About us
    //       </a>
    //     </div>
    //   </DropdownMenuContent>
    // </DropdownMenu>

    <Dropdown className={style.dropDownSection}>
      <DropdownTrigger>
        <Button variant="none">
          <img src="https://defipe.b-cdn.net/hamberger.svg" alt="Defi Logo" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className={style.hamMenu}>
        <DropdownItem key="new">
          <Link href="https://test.defipe.io/" className={style.hamMenuText}>
            <img src="https://defipe.b-cdn.net/trade.svg" alt="Trade icon" />
            Trade
          </Link>
        </DropdownItem>
        <DropdownItem key="copy">
          <a
            className={style.hamMenuText}
            onClick={() => openInNewTab("https://telegram.me/helloDefiPe")}
          >
            <img src="https://defipe.b-cdn.net/bulb.svg" alt="bulb icon" />
            Join us
          </a>
        </DropdownItem>
        <DropdownItem key="edit">
        <Text 
  gradient={{ from: '#a1ff0a', to: '#ff6000' }} 
  animateTo={{ to: '#bc00dd', from: '#6a00f4' }} 
  animationDuration={4000}
  style={{fontWeight:"bold"}}
>
<Link href="/airdrop">Win $50k</Link>
</Text>
        </DropdownItem>
        {/* <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}

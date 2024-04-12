import { Button } from "@/@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/@/ui/dropdown-menu";
import { useState } from "react";
import style from "@/styles/hammenu.module.css";
import Link from "next/link";

export default function HamMenu() {
 
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }
  return (
    <DropdownMenu className={style.dropDownSection}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {" "}
          <img src="hamberger.svg" alt="Defi Logo" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={style.hamMenu}>
        <div className={style.hamMenuDiv}>
          <Link href="/waitlist" className={style.hamMenuText}>
            <img src="trade.svg" alt="Trade icon" />
            Trade
          </Link>
          <DropdownMenuSeparator />

          <a
            className={style.hamMenuText}
            onClick={() => openInNewTab("https://telegram.me/helloDefiPe")}
          >
            <img src="bulb.svg" alt="bulb icon" />
            Join us
          </a>
          <DropdownMenuSeparator />
          <a style={{ cursor: "not-allowed" }} className={style.hamMenuText}>
            <img src="aboutus.svg" alt="Trade icon" />
            About us
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { ConnectWallet, WalletInformation } from "../components";
import { fonts, menus } from "../configs/constants";
import { useAppDispatch, useAppSelector } from "../reduxs/hooks";
import { getBscScanUrl } from "../utils";
import Mobile from "./Mobile";
import MobileMenu from "./MobileMenu";
import React from 'react';

export default function Header() {
  const { walletInfo, point } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  return (
    <Flex
      w="full"
      h="120px"
      alignItems="center"
      justifyContent="center"
      px="20px"
    >
      {!walletInfo.address && <ConnectWallet />}
      {walletInfo.address && <WalletInformation />}
    </Flex>
  );
}


import React, { useEffect, useState,useRef } from "react";
import { useRouter } from "next/navigation";

import { Box,Flex,Text,Grid,Button,IconButton,Tabs} from "@radix-ui/themes";
import { Label } from "@radix-ui/react-label";

import { Select, Dialog,Link} from "@radix-ui/themes";

import { XSelect } from "@/radix/keyvalue/inpselect";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";
import { OpConstants } from "@/common/constants";
import { Keyvalue } from "@/common/model/keyvalue";
import { DocFormats } from "@/filesystem/fsconstants";
import { InfoNotdata } from "@/radix/data/infonotdata";


import { RadixConf } from "@/radix/radixconf";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { ThemeButtonsStyle, ThemeIconsStyle } from "@/radix/radixtheme";
import { parseResponseCollection, parseResponseItem } from "@/common/parsers/javascriptparser";

//   const typeRef = useRef<HTMLSelectElement>(null);
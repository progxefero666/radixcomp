//
import "@radix-ui/themes/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "radix-themes-datepicker-styles";

import { TextField } from "@radix-ui/themes"
import DatePicker from 'react-datepicker';

export const App = () => (
    <DatePicker
      showPopperArrow={false}
      popperPlacement="bottom-start"
      customInput={<TextField.Root />}
      placeholderText="Select date"  />
);

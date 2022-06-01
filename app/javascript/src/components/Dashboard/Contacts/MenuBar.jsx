import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

import { TAGS, TYPES, SEGMENTS } from "./constants";

const MenuBar = ({ showMenu }) => (
  <NeetoUIMenuBar showMenu={showMenu} title="Contacts">
    {TYPES.map(({ id, label, count }) => (
      <NeetoUIMenuBar.Block key={id} label={label} count={count} />
    ))}
    <NeetoUIMenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </NeetoUIMenuBar.SubTitle>
    {SEGMENTS.map(({ id, label, count }) => (
      <NeetoUIMenuBar.Block key={id} label={label} count={count} />
    ))}
    <NeetoUIMenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
        {
          icon: Plus,
        },
        {
          icon: Settings,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </NeetoUIMenuBar.SubTitle>
    {TAGS.map(({ id, label, count }) => (
      <NeetoUIMenuBar.Block key={id} label={label} count={count} />
    ))}
  </NeetoUIMenuBar>
);

export default MenuBar;

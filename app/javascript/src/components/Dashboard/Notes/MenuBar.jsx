import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

import { TAGS } from "./constants";

const MenuBar = ({ showMenu }) => (
  <NeetoUIMenuBar showMenu={showMenu} title="Notes">
    {TAGS.map((tag, idx) => (
      <NeetoUIMenuBar.Block key={idx} label={tag} />
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
    <NeetoUIMenuBar.Block label="Europe" count={80} />
    <NeetoUIMenuBar.Block label="Middle-East" count={60} />
    <NeetoUIMenuBar.Block label="Asia" count={60} />

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
    <NeetoUIMenuBar.Block label="Sales" count={80} />
    <NeetoUIMenuBar.Block label="Finance" count={60} />
    <NeetoUIMenuBar.Block label="User Experienc" count={60} />
  </NeetoUIMenuBar>
);

export default MenuBar;

import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

import { TAGS, TYPES, SEGMENTS } from "./constants";

const MenuBar = ({ showMenu }) => (
  <NeetoUIMenuBar showMenu={showMenu} title="Notes">
    {TYPES.map((type, idx) => (
      <NeetoUIMenuBar.Block key={idx} label={type.label} count={type.count} />
    ))}

    <NeetoUIMenuBar.Block label={"All"} count={10} />
    <NeetoUIMenuBar.Block label={"Users"} count={15} />
    <NeetoUIMenuBar.Block label={"Leads"} count={25} />
    <NeetoUIMenuBar.Block label={"Visitors"} count={30} />

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
    {SEGMENTS.map((segment, idx) => (
      <NeetoUIMenuBar.Block
        key={idx}
        label={segment.label}
        count={segment.count}
      />
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
    {TAGS.map((tag, idx) => (
      <NeetoUIMenuBar.Block key={idx} label={tag.label} count={tag.count} />
    ))}
  </NeetoUIMenuBar>
);

export default MenuBar;

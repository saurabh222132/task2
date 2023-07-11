const database = {
  dataSheetFirstOptions: [
    {
      name: "Observation",
      dataSheetSecondOptions: [
        {
          name: "Vessel",
          form: [
            {
              label: "Vessel Name",
              name: "vesselName",
              type: "text",
            },
            {
              label: "Port of Registry",
              name: "portOfRegistry",
              type: "text",
            },
            {
              label: "Gross Tonnage",
              name: "grossTonnage",
              type: "number",
            },
          ],
        },
        {
          name: "Gear",
          form: [
            {
              label: "Gear Type",
              name: "gearType",
              type: "text",
            },
            {
              label: "Gear Quantity",
              name: "gearQuantity",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "Damage Report",
      dataSheetSecondOptions: [
        {
          name: "Damage Details",
          form: [
            {
              label: "Damage Type",
              name: "damageType",
              type: "text",
            },
            {
              label: "Damage Location",
              name: "damageLocation",
              type: "text",
            },
            {
              label: "Estimated Cost of Repair",
              name: "repairCost",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
};

export default database.dataSheetFirstOptions;

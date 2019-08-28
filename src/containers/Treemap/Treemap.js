/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { ResponsiveTreeMap } from "@nivo/treemap";

import React, { Component } from "react";
const root = {
  name: "nivo",
  color: "hsl(34, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(339, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(328, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(199, 70%, 50%)",
              loc: 101444
            },
            {
              name: "xAxis",
              color: "hsl(18, 70%, 50%)",
              loc: 174415
            },
            {
              name: "yAxis",
              color: "hsl(151, 70%, 50%)",
              loc: 89257
            },
            {
              name: "layers",
              color: "hsl(268, 70%, 50%)",
              loc: 51016
            }
          ]
        },
        {
          name: "pie",
          color: "hsl(134, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(206, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(319, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(202, 70%, 50%)",
                      loc: 77170
                    },
                    {
                      name: "slices",
                      color: "hsl(10, 70%, 50%)",
                      loc: 104156
                    },
                    {
                      name: "bbox",
                      color: "hsl(354, 70%, 50%)",
                      loc: 127852
                    }
                  ]
                },
                {
                  name: "donut",
                  color: "hsl(270, 70%, 50%)",
                  loc: 3770
                },
                {
                  name: "gauge",
                  color: "hsl(124, 70%, 50%)",
                  loc: 8887
                }
              ]
            },
            {
              name: "legends",
              color: "hsl(73, 70%, 50%)",
              loc: 60976
            }
          ]
        }
      ]
    },
    {
      name: "colors",
      color: "hsl(101, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(105, 70%, 50%)",
          loc: 1670
        },
        {
          name: "hsl",
          color: "hsl(307, 70%, 50%)",
          loc: 111388
        }
      ]
    },
    {
      name: "utils",
      color: "hsl(302, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(127, 70%, 50%)",
          loc: 146131
        },
        {
          name: "resetClock",
          color: "hsl(71, 70%, 50%)",
          loc: 92206
        },
        {
          name: "noop",
          color: "hsl(162, 70%, 50%)",
          loc: 109751
        },
        {
          name: "tick",
          color: "hsl(204, 70%, 50%)",
          loc: 68716
        },
        {
          name: "forceGC",
          color: "hsl(13, 70%, 50%)",
          loc: 139393
        },
        {
          name: "stackTrace",
          color: "hsl(283, 70%, 50%)",
          loc: 19816
        },
        {
          name: "dbg",
          color: "hsl(179, 70%, 50%)",
          loc: 127417
        }
      ]
    },
    {
      name: "generators",
      color: "hsl(151, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(341, 70%, 50%)",
          loc: 32042
        },
        {
          name: "city",
          color: "hsl(338, 70%, 50%)",
          loc: 138270
        },
        {
          name: "animal",
          color: "hsl(207, 70%, 50%)",
          loc: 128953
        },
        {
          name: "movie",
          color: "hsl(358, 70%, 50%)",
          loc: 100922
        },
        {
          name: "user",
          color: "hsl(217, 70%, 50%)",
          loc: 104502
        }
      ]
    },
    {
      name: "set",
      color: "hsl(165, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(92, 70%, 50%)",
          loc: 29285
        },
        {
          name: "intersect",
          color: "hsl(117, 70%, 50%)",
          loc: 49944
        },
        {
          name: "merge",
          color: "hsl(198, 70%, 50%)",
          loc: 95654
        },
        {
          name: "reverse",
          color: "hsl(255, 70%, 50%)",
          loc: 132827
        },
        {
          name: "toArray",
          color: "hsl(134, 70%, 50%)",
          loc: 99507
        },
        {
          name: "toObject",
          color: "hsl(125, 70%, 50%)",
          loc: 35414
        },
        {
          name: "fromCSV",
          color: "hsl(44, 70%, 50%)",
          loc: 183456
        },
        {
          name: "slice",
          color: "hsl(74, 70%, 50%)",
          loc: 187789
        },
        {
          name: "append",
          color: "hsl(136, 70%, 50%)",
          loc: 17647
        },
        {
          name: "prepend",
          color: "hsl(210, 70%, 50%)",
          loc: 169800
        },
        {
          name: "shuffle",
          color: "hsl(128, 70%, 50%)",
          loc: 128221
        },
        {
          name: "pick",
          color: "hsl(56, 70%, 50%)",
          loc: 17714
        },
        {
          name: "plouc",
          color: "hsl(335, 70%, 50%)",
          loc: 151058
        }
      ]
    },
    {
      name: "text",
      color: "hsl(60, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(332, 70%, 50%)",
          loc: 41577
        },
        {
          name: "slugify",
          color: "hsl(213, 70%, 50%)",
          loc: 141648
        },
        {
          name: "snakeCase",
          color: "hsl(4, 70%, 50%)",
          loc: 96715
        },
        {
          name: "camelCase",
          color: "hsl(349, 70%, 50%)",
          loc: 156935
        },
        {
          name: "repeat",
          color: "hsl(297, 70%, 50%)",
          loc: 93470
        },
        {
          name: "padLeft",
          color: "hsl(239, 70%, 50%)",
          loc: 42768
        },
        {
          name: "padRight",
          color: "hsl(77, 70%, 50%)",
          loc: 69051
        },
        {
          name: "sanitize",
          color: "hsl(282, 70%, 50%)",
          loc: 7111
        },
        {
          name: "ploucify",
          color: "hsl(275, 70%, 50%)",
          loc: 89315
        }
      ]
    },
    {
      name: "misc",
      color: "hsl(198, 70%, 50%)",
      children: [
        {
          name: "whatever",
          color: "hsl(299, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(144, 70%, 50%)",
              loc: 142240
            },
            {
              name: "WTF",
              color: "hsl(254, 70%, 50%)",
              loc: 188462
            },
            {
              name: "lol",
              color: "hsl(165, 70%, 50%)",
              loc: 5468
            },
            {
              name: "IMHO",
              color: "hsl(318, 70%, 50%)",
              loc: 71919
            }
          ]
        },
        {
          name: "other",
          color: "hsl(99, 70%, 50%)",
          loc: 8990
        },
        {
          name: "crap",
          color: "hsl(201, 70%, 50%)",
          children: [
            {
              name: "crapA",
              color: "hsl(237, 70%, 50%)",
              loc: 93109
            },
            {
              name: "crapB",
              color: "hsl(321, 70%, 50%)",
              children: [
                {
                  name: "crapB1",
                  color: "hsl(132, 70%, 50%)",
                  loc: 79290
                },
                {
                  name: "crapB2",
                  color: "hsl(231, 70%, 50%)",
                  loc: 102851
                },
                {
                  name: "crapB3",
                  color: "hsl(267, 70%, 50%)",
                  loc: 111860
                },
                {
                  name: "crapB4",
                  color: "hsl(202, 70%, 50%)",
                  loc: 94298
                }
              ]
            },
            {
              name: "crapC",
              color: "hsl(41, 70%, 50%)",
              children: [
                {
                  name: "crapC1",
                  color: "hsl(153, 70%, 50%)",
                  loc: 82918
                },
                {
                  name: "crapC2",
                  color: "hsl(94, 70%, 50%)",
                  loc: 128972
                },
                {
                  name: "crapC3",
                  color: "hsl(211, 70%, 50%)",
                  loc: 155847
                },
                {
                  name: "crapC4",
                  color: "hsl(321, 70%, 50%)",
                  loc: 395
                },
                {
                  name: "crapC5",
                  color: "hsl(64, 70%, 50%)",
                  loc: 72435
                },
                {
                  name: "crapC6",
                  color: "hsl(243, 70%, 50%)",
                  loc: 138613
                },
                {
                  name: "crapC7",
                  color: "hsl(187, 70%, 50%)",
                  loc: 34533
                },
                {
                  name: "crapC8",
                  color: "hsl(183, 70%, 50%)",
                  loc: 178064
                },
                {
                  name: "crapC9",
                  color: "hsl(314, 70%, 50%)",
                  loc: 37658
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const Treemap1 = () => (
  <div style={{ width: "800px", height: "500px" }}>
    <ResponsiveTreeMap
      root={root}
      identity="name"
      value="loc"
      innerPadding={3}
      outerPadding={3}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      label="loc"
      labelFormat=".0s"
      labelSkipSize={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
    />
  </div>
);

export default Treemap1;
